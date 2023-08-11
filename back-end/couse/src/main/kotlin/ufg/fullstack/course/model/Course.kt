package ufg.fullstack.course.model

import jakarta.persistence.*
@Entity
class Course (
    var name: String,
    var description: String,
    @Id @GeneratedValue var id: String? = null)