import React from "react"
import Card from "../components/card/card"
import Navbar from "../components/navbar/navbar"

export default function Courses() {
  return (
    <div>
      <Navbar />
     
      <h1>Cursos disponibles</h1>
      <div className="courses-container">
        <Card
          name="Introducción a Git y Github"
          description="Breve introducción al versionamiento de código con Git y Github"
        />
        <Card
          name="Introducción a Git y Github"
          description="Breve introducción al versionamiento de código con Git y Github"
        />
        <Card
          name="Introducción a Git y Github"
          description="Breve introducción al versionamiento de código con Git y Github"
        />
      </div>
    </div>
  )
}
