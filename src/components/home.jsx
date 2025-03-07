import "./home.css"
import { Projects } from "./projects";
import { SKILL } from "./skill";

function Navbar() {
    return (
        <nav className="navbar bg-dark fixed-top">
            <div className="container">
                <ul className="navbar-nav d-flex flex-row justify-content-center w-100">
                    <li className="nav-item mx-3">
                        <a className="nav-link text-white" href="#Home">Sobre Mi</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link text-white" href="#skill">Habilidades</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link text-white" href="#projects">Proyectos</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link text-white" href="#contact">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export function HOME() {
    return (
        <>
            <Navbar />
            <div className="container-fluid d-flex align-items-center vh-100  mibg " id="Home">
                <div className="row w-100 h-100">
                    <div className="col-md-6 d-flex flex-column justify-content-center p-5 text-white">
                        <h1>Oscar Ortega</h1>
                        <h2>Desarrollador Web Junior</h2>
                        <p>
                            Apasionado por la creación de aplicaciones web dinámicas y eficientes, con un enfoque en el diseño responsivo y la optimización del rendimiento. Me especializo en el desarrollo de sitios y sistemas interactivos, integrando bases de datos con SQL Server para manejar información de manera estructurada y segura. Tengo conocimientos en Bootstrap para mejorar la experiencia de usuario y en la implementación de CRUDs para la gestión de datos. Siempre estoy en constante aprendizaje y en búsqueda de nuevos desafíos que me permitan mejorar mis habilidades y aportar soluciones innovadoras.
                        </p>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="URL_DE_TU_IMAGEN" alt="Oscar Ortega" className="img-fluid rounded-circle" style={{ maxWidth: "80%" }} />
                    </div>
                </div>
            </div>  
            <SKILL />
            <Projects />
        </>
    )
}