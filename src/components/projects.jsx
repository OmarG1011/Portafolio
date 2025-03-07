import "./home.css"
import pelicula from "../assets/pelicula.png"
import crud from "../assets/CRUD.jpg"
import canv from "../assets/uu.png"

import { ProjectCard } from "./tarjeta"
export function Projects() {
    return (
        <div className="container-fluid d-flex align-items-center mibg pt-5" id="projects">
            <div className="row w-100 h-100 d-flex justify-content-center">
                <div className="text-center d-flex align-items-center justify-content-center text-white p-5">
                    <h2>Proyectos</h2>
                </div>
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