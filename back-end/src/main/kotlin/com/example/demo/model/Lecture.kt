package com.example.demo.model

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Lecture(@Id
              @GeneratedValue
              val title: String = "",
              val description: String = "") {

}