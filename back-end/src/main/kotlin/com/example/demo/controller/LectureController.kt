package com.example.demo.controller
import com.example.demo.model.Lecture
import com.example.demo.repository.LectureRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("lectures")
class LectureController {

    @Autowired
    lateinit var lectureRepository: LectureRepository
    @GetMapping
    fun list(): List<Lecture> {
        return lectureRepository.findAll().toList()
    }

    @PostMapping
    fun add(@RequestBody lecture: Lecture): Lecture {
        return lectureRepository.save(lecture)
    }
}