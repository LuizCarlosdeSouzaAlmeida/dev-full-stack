package ufg.fullstack.couse.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import ufg.fullstack.couse.model.Lecture
import ufg.fullstack.couse.service.LectureService

@RestController
@RequestMapping("/api/lecture")
class LectureController(private val lectureService: LectureService) {

    @GetMapping("/")
    fun findAll(): List<Lecture> {
        return lectureService.findAllLectures()
    }

    @GetMapping("/{id}")
    fun findOne(@PathVariable id: Long): ResponseEntity<Lecture> {
        val lecture = lectureService.findLectureById(id)
        return ResponseEntity.ok(lecture)
    }
    @PostMapping("/")
    fun newLecture(@RequestBody lecture: Lecture): ResponseEntity<Lecture> {
        val createdLecture = lectureService.createLecture(
            lecture.name,
            lecture.description,
            lecture.hours,
            lecture.videoUrl,
            lecture.text,
            lecture.downloadLinks
        )
        return ResponseEntity.ok(createdLecture)
    }
    @PutMapping("/{id}")
    fun updateLecture(@PathVariable id: Long, @RequestBody updatedLecture: Lecture): ResponseEntity<Lecture> {
        val updated = lectureService.updateLecture(id, updatedLecture)
        return ResponseEntity.ok(updated)
    }

    @DeleteMapping("/{id}")
    fun deleteLecture(@PathVariable id: Long): ResponseEntity<Unit> {
        lectureService.deleteLecture(id)
        return ResponseEntity.noContent().build()
    }
}
