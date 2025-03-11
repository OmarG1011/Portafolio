import "./home.css"
import { Projects } from "./projects";
import { SKILL } from "./skill";
import cv from "../assets/1.png";
import Dock from './Dock'; // Importar el componente Dock
import { VscBriefcase, VscCallOutgoing, VscAccount, VscChecklist } from 'react-icons/vsc'; // Importar los iconos de React Icons


export function HOME() {
    const items = [
        { icon: <VscAccount size={18} />, label: 'Sobre mi', targetId: "Home" },
        { icon: <VscChecklist size={18} />, label: 'Habilidades', targetId: "skill" },
        { icon: <VscBriefcase size={18} />, label: 'Proyectos', targetId: "projects" },
        { icon: <VscCallOutgoing size={18} />, label: 'Contacto', targetId: "contact" },
    ];

    return (
        <>
            <Dock
                items={items}
                panelHeight={80}
                baseItemSize={60}
                magnification={90}
                distance={250}
            />
            <div className="container-fluid min-vh-100 d-flex flex-column mibg " id="Home">
                <div className="row flex-grow-1 slide-in">

                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                        <div className="text-white p-3">
                            <h1>Oscar Ortega</h1>
                            <h2>Desarrollador Web Junior</h2>
                            <p>
                                Apasionado por la creación de aplicaciones web dinámicas y eficientes, con un enfoque en el diseño responsivo y la optimización del rendimiento. Me especializo en el desarrollo de sitios y sistemas interactivos, integrando bases de datos con SQL Server para manejar información de manera estructurada y segura. Tengo conocimientos en Bootstrap para mejorar la experiencia de usuario y en la implementación de CRUDs para la gestión de datos. Siempre estoy en constante aprendizaje y en búsqueda de nuevos desafíos que me permitan mejorar mis habilidades y aportar soluciones innovadoras.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                        <div className="text-white p-3 ">
                            <img src={cv} alt="Oscar Ortega" className="img-fluid h-50 rounded-circle mirrored-image " />
                        </div>
                    </div>
                </div>
            </div>

            <SKILL />
            <Projects />
            <div className="container-fluid min-vh-100 d-flex flex-column mibg" id="contact">

                <div className="row flex-fill">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="text-white ">
                            <h3>Contacto</h3>
                        </div>
                    </div>
                </div>
                <div className="row flex-fill">
                    <div className="col-12 d-flex justify-content-center align-items-start">
                        <div className="text-white ">
                            <a href="https://github.com/OmarG1011" target="_blank">
                                <i className="fa-brands mx-3 fa-github fa-3x text-white"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/oscar-omar-ortega-gonzalez-6247b2301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                <i className="fa-brands mx-3 fa-linkedin fa-3x text-primary"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}