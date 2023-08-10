package ufg.fullstack.couse.controller

import org.springframework.http.HttpStatus.*
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException
import ufg.fullstack.couse.model.User
import ufg.fullstack.couse.repository.UserRepository

@RestController
@RequestMapping("/api/user")
class UserController(private val repository: UserRepository) {

    @GetMapping("/")
    fun findAll() = repository.findAll()

    @GetMapping("/{id}")
    fun findOne(@PathVariable id: Long) =
        repository.findById(id) ?: throw ResponseStatusException(NOT_FOUND, "User with ID $id not found")

    @PostMapping("/")
    fun newUser(@RequestBody user: User): User {
        return repository.save(user)
    }

}
