package ufg.fullstack.course.repository

import org.springframework.data.repository.CrudRepository
import ufg.fullstack.course.model.Lecture

interface LectureRepository : CrudRepository<Lecture, Long>

