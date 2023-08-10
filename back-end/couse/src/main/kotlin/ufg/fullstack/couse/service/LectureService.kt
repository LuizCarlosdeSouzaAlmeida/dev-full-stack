package ufg.fullstack.couse.service

import org.springframework.stereotype.Service
import ufg.fullstack.couse.model.Lecture
import ufg.fullstack.couse.repository.LectureRepository
import org.springframework.data.repository.findByIdOrNull

@Service
class LectureService(private val lectureRepository: LectureRepository) {

    fun findAllLectures(): List<Lecture> {
        return lectureRepository.findAll().toList()
    }

    fun findLectureById(id: Long): Lecture {
        return lectureRepository.findByIdOrNull(id)
            ?: throw NoSuchElementException("Lecture with ID $id not found")
    }
    fun createLecture(
        name: String,
        description: String,
        hours: String,
        videoUrl: String,
        text: String,
        downloadLinks: Array<String>
    ): Lecture {
        val lecture = Lecture(null,name, description, hours, videoUrl, text, downloadLinks)
        return lectureRepository.save(lecture)
    }



    fun updateLecture(id: Long, updatedLecture: Lecture): Lecture {
        val existingLecture = findLectureById(id)

        existingLecture.apply {
            name = updatedLecture.name
            description = updatedLecture.description
            hours = updatedLecture.hours
            videoUrl = updatedLecture.videoUrl
            text = updatedLecture.text
            downloadLinks = updatedLecture.downloadLinks
        }

        return lectureRepository.save(existingLecture)
    }

    fun deleteLecture(id: Long) {
        val existingLecture = findLectureById(id)
        lectureRepository.delete(existingLecture)
    }
}
