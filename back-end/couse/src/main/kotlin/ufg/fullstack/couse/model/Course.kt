package ufg.fullstack.couse.model

import jakarta.persistence.*
@Entity
class Course (
    var name: String,
    var description: String,
    @Id @GeneratedValue var id: String? = null)