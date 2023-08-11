package ufg.fullstack.course.repository

import org.springframework.data.repository.CrudRepository
import ufg.fullstack.course.model.Course

interface CourseRepository : CrudRepository<Course, Long> {
    fun findByName(name: String): Course?
}