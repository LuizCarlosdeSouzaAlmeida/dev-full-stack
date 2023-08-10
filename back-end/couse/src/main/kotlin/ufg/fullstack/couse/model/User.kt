package ufg.fullstack.couse.model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "app_user")
class User(
    var name: String,
    var email: String,
    var password: String,
    @Id @GeneratedValue var id: String? = null)