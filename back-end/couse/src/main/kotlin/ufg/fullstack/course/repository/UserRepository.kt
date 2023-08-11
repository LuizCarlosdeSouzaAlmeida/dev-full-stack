package ufg.fullstack.course.repository

import org.springframework.data.repository.CrudRepository
import ufg.fullstack.course.model.User

interface UserRepository : CrudRepository<User, Long> {
    fun findByEmail(email: String): User?
}
