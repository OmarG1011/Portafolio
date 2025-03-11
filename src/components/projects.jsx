import "./home.css"
import pelicula from "../assets/pelicula.png"
import crud from "../assets/CRUD.jpg"
import canv from "../assets/uu.png"

import { ProjectCard } from "./tarjeta"
export function Projects() {
    return (
        <div className="container-fluid min-vh-100 d-flex flex-column mibg" id="projects">
            <div className="row flex-fill">
                <div className="col-12 d-flex justify-content-center p-5 align-items-center">
                    <div className="text-white ">
                        <h3>Proyectos</h3>
                    </div>
                </div>
            </div>
            <div className="row flex-fill">
            <div className="col-lg-4 col-md-4 d-flex flex-column justify-content-center text-white">
                <ProjectCard
                    title="Informacion de Películas"
                    description="Página creada con React y API de TheMovieDB para ver información de películas."
                    imageUrl={pelicula}
                    projectUrl="https://22-peliculas-reactjs.netlify.app/"
                />
            </div>
            <div className="col-lg-4 col-md-4 d-flex flex-column justify-content-center text-white">
                <ProjectCard
                    title="Gestión de Citas Médicas"
                    description="Sistema CRUD creado con php y boostrap con verificación de usuarios y contraseña."
                    imageUrl={crud}
                    projectUrl="http://citasmedicas.infinityfreeapp.com/"
                />
            </div>
            <div className="col-lg-4 col-md-4 d-flex flex-column justify-content-center text-white">
                <ProjectCard
                    title="Canvas"
                    description="Canvas de solicitud y organizacion de proyectos."
                    imageUrl={canv}
                    projectUrl="https://33-canvaa.netlify.app"
                />
            </div>
        </div>
        </div>

    )
}