package ufg.fullstack.couse.repository

import org.springframework.data.repository.CrudRepository
import ufg.fullstack.couse.model.User

interface UserRepository : CrudRepository<User, Long> {
    fun findByEmail(email: String): User?
}
