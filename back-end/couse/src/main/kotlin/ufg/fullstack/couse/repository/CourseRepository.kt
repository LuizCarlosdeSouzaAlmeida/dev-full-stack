package ufg.fullstack.couse.repository

import org.springframework.data.repository.CrudRepository
import ufg.fullstack.couse.model.Course

interface CourseRepository : CrudRepository<Course, Long> {
    fun findByName(name: String): Course?
}