import Dock from './Dock'; // Asegúrate de tener la ruta correcta
import { motion } from 'framer-motion'; // Asegúrate de tener esta línea
import { VscBriefcase, VscCallOutgoing, VscAccount, VscChecklist } from 'react-icons/vsc';
import { FaPhp, FaDatabase, FaJsSquare, FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from 'react-icons/fa';
import './index.css';

const Home = () => {
  return (
    <div id="home" className="section min-h-screen flex flex-col items-center justify-center bg-black text-[var(--color-mako-50)] text-center">
      <motion.img
        src="https://omarg1011.github.io/Portafolio/imagenes/foto_cv.png"
        alt="Foto de Omar"
        className="w-60 h-60 object-cover rounded-full mb-4 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-4xl font-bold mb-4">
        ¡Hola! Soy Omar
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="text-xl">
        Desarrollador web
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex text-center space-x-4 pt-5">
        <a href="https://github.com/OmarG1011" target="_blank">
          <i className="fa-brands fa-github fa-3x text-white"></i>
        </a>
        <a href="https://www.linkedin.com/in/oscar-omar-ortega-gonzalez-6247b2301" target="_blank">
          <i className="fa-brands fa-linkedin fa-3x text-primary"></i>
        </a>
      </motion.div>
    </div>
  );
};


const About = () => {
  return (
    <div id="about" className="section min-h-screen  flex flex-col items-center  bg-black text-[var(--color-mako-50)] text-justify p-8">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-3xl font-semibold mb-4 ">
        Sobre mí
      </motion.h2>
      <p className="text-xl mb-6 max-w-2xl">
        Soy un desarrollador web apasionado por el desarrollo web, me especializo en crear aplicaciones dinámicas, responsivas y optimizadas. Integro SQL Server para gestionar datos de forma segura y utilizo Bootstrap para mejorar la experiencia de usuario. Tengo experiencia en CRUDs y siempre busco aprender y aportar soluciones innovadoras. Mi especialidad es el desarrollo front-end con React.
      </p>
      <div className="w-full max-w-3xl p-4">
        <h3 className="text-2xl font-semibold mb-4 text-center">Habilidades</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg text-center">
          {[
            { icon: FaPhp, name: "PHP" },
            { icon: FaDatabase, name: "SQL" },
            { icon: FaJsSquare, name: "JavaScript" },
            { icon: FaHtml5, name: "HTML" },
            { icon: FaCss3Alt, name: "CSS" },
            { icon: FaBootstrap, name: "Bootstrap" },
            { icon: FaReact, name: "React" }
          ].map(({ icon: Icon, name }, index) => (
            <li key={index} className="bg-[var(--color-mako-900)] p-4 rounded-lg flex items-center justify-center gap-2 shadow-lg">
              <Icon size={30} />
              <span className="hidden sm:inline text-[var(--color-mako-100)]">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="section min-h-screen flex flex-col items-center justify-center bg-black text-[var(--color-mako-50)] text-center p-10 mb-8">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-3xl font-semibold mb-6">
        Mis Proyectos
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {[
          {
            id: 1,
            title: "Aplicacion Pokemon",
            description: "Este proyecto es una aplicación web desarrollada en React.js que permite visualizar una lista de Pokémon utilizando la Pokémon API.",
            image: "https://omarg1011.github.io/Portafolio/imagenes/5.png",
            link: "https://omarg1011.github.io/Proyecto_Pokemon/"
          },
          // {
          //   id: 2,
          //   title: "Login",
          //   description: "Este proyecto es una implementación de un sistema de autenticación con Firebase Authentication en una aplicación React.js. Permite a los usuarios registrarse, iniciar sesión y cerrar sesión utilizando correo y contraseña.",
          //   image: "https://omarg1011.github.io/Portafolio/imagenes/6.png",
          //   link: "https://omarg1011.github.io/Login_firebase/"
          // },
          {
            id: 3,
            title: "Canva",
            description: "Canvas de solicitud y organizacion de proyectos.",
            image: "https://omarg1011.github.io/Portafolio/imagenes/uu.png",
            link: "https://33-canvaa.netlify.app/"
          },
          {
            id: 4,
            title: "Dashboard Admin",
            description: "Sistema CRUD creado con php y boostrap con verificación de usuarios y contraseña.",
            image: "https://omarg1011.github.io/Portafolio/imagenes/CRUD.jpg",
            link: "http://citasmedicas.infinityfreeapp.com/?i=1"
          },
          {
            id: 5,
            title: "Pelicula",
            description: "Página creada con React y API de TheMovieDB para ver información de películas.",
            image: "https://omarg1011.github.io/Portafolio/imagenes/pelicula.png",
            link: "https://22-peliculas-reactjs.netlify.app/"
          },
          {
            id: 6,
            title: "Hotel Paradise",
            description: "Aplicación web creada con React y Vite para gestionar reservas. Utiliza Firebase Authentication para el login y Firestore para almacenar reservas en tiempo real. Diseño responsivo con Bootstrap y gestión de reservas mediante modales.",
            image: "https://omarg1011.github.io/Portafolio/imagenes/7.png",
            link: "https://hotelpardise.netlify.app/"
          },{
            id: 7,
            title: "InstaClon",
            description: "Instaclón: una red social para compartir fotos, creada con React, Vite, Bootstrap y Supabase. Rápida, moderna y lista para mostrar tus mejores momentos.",
            image: "https://omarg1011.github.io/Portafolio/imagenes/8.png",
            link: "https://omarg1011.github.io/Instaclon/"
          }
        ].map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <motion.div
              className="bg-[var(--color-mako-900)] p-6 rounded-lg shadow-lg cursor-pointer flex flex-col h-full"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-[var(--color-mako-50)]">{project.title}</h3>
              <p className="text-[var(--color-mako-200)] text-justify">{project.description}</p>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};


function App() {
  const items = [
    { icon: <VscAccount size={18} />, label: 'Sobre mí', targetId: 'home' },
    { icon: <VscChecklist size={18} />, label: 'Habilidades', targetId: 'about' },
    { icon: <VscBriefcase size={18} />, label: 'Proyectos', targetId: 'projects' },
  ];

  return (
    <div>
      <Dock items={items} />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;