export function ProjectCard({ title, description, imageUrl, projectUrl }) {
    return (
          <div className="col-12 mb-3 d-flex justify-content-center">
      <a href={projectUrl} className="card-link shadow-none text-decoration-none" target="_blank" rel="noopener noreferrer">
        <div className="card" style={{ width: "100%", maxWidth: "400px", minHeight: "350px" }}>
          <img src={imageUrl} className="card-img-top" alt={`Imagen de ${title}`} style={{ objectFit: "cover", height: "200px" }} />
          <div className="card-body d-flex flex-column justify-content-center">
            <h3 className="card-title text-center">{title}</h3>
            <p className="card-text text-center">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};