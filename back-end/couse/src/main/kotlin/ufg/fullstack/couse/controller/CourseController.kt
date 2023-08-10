package ufg.fullstack.couse.controller

import org.springframework.http.HttpStatus.*
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException
import ufg.fullstack.couse.model.Course
import ufg.fullstack.couse.repository.CourseRepository

@RestController
@RequestMapping("/api/course")
class CourseController(private val repository: CourseRepository) {
    @GetMapping("/")
    fun findAll() = repository.findAll()

    @GetMapping("/{name}")
    fun findOne(@PathVariable name: String) =
        repository.findByName(name) ?: throw ResponseStatusException(NOT_FOUND, "This course does not exist")

    @PostMapping("/")
    fun newCourse(@RequestBody course: Course) {
        repository.save(course)
    }

}