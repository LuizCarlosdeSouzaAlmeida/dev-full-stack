package com.example.demo.repository

import com.example.demo.model.Lecture
import org.springframework.data.repository.CrudRepository
interface LectureRepository  : CrudRepository<Lecture, Long>