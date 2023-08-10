package ufg.fullstack.couse.repository

import org.springframework.data.repository.CrudRepository
import ufg.fullstack.couse.model.Lecture

interface LectureRepository : CrudRepository<Lecture, Long>

