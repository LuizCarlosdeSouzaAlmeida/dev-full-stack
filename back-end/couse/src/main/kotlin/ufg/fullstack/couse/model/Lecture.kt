package ufg.fullstack.couse.model

import jakarta.persistence.*
@Entity
class Lecture (
    @Id @GeneratedValue
    var id: Long? = 0,
    var name: String,
    @Column(columnDefinition = "TEXT")
    var description: String,
    var hours: String,
    var videoUrl: String,
    @Column(columnDefinition = "TEXT")
    var text: String,
    var downloadLinks: Array<String>,
)

