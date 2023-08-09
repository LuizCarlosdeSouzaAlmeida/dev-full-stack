package ufg.fullstack.couse.model

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
class Course (
    var name: String,
    var description: String,
    var addedAt: LocalDateTime = LocalDateTime.now(),
    @Id @GeneratedValue var id: Long? = null)