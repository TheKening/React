const Moments = () => {
    return (
        <div className="moments-container container py-5 bg-dark text-white">
            <h1 className="text-center text-primary mb-5">Momentos del Ultimate Frisbee</h1>
            
            {/* Momentos Históricos */}
            <div className="moment mb-5">
                <h2 className="text-secondary border-bottom pb-2">Momentos Históricos</h2>
                <ul className="list-group bg-dark">
                    <li className="list-group-item bg-dark text-white border-secondary">
                        <strong>1968:</strong> Creación del Ultimate Frisbee en Maplewood, Nueva Jersey.
                    </li>
                    <li className="list-group-item bg-dark text-white border-secondary">
                        <strong>1983:</strong> Primer Campeonato Mundial de Ultimate.
                    </li>
                    <li className="list-group-item bg-dark text-white border-secondary">
                        <strong>2015:</strong> Reconocimiento oficial por el Comité Olímpico Internacional.
                    </li>
                </ul>
            </div>

            {/* Galería */}
            <div className="gallery mb-5">
                <h2 className="text-secondary border-bottom pb-2">Galería de Momentos</h2>
                <div className="row g-3">
                    <div className="col-md-4">
                        <img
                            src="https://aprendeultimatefrisbee.es/wp-content/uploads/2015/12/Frisbee_historia.jpg"
                            alt="Momento 1"
                            className="img-fluid rounded shadow bg-dark"
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            src="https://olimpicocol.co/web/wp-content/uploads/2022/08/descarga-_60_.jpg"
                            alt="Momento 2"
                            className="img-fluid rounded shadow bg-dark"
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            src="https://olimpicocol.co/web/wp-content/uploads/2022/08/298562700_162933706285226_3010816458358382256_n-2-1200x675.jpg"
                            alt="Momento 3"
                            className="img-fluid rounded shadow bg-dark"
                        />
                    </div>
                </div>
            </div>

            {/* Jugadas Memorables */}
            <div className="plays mb-5">
                <h2 className="text-secondary border-bottom pb-2">Jugadas Memorables</h2>
                <ul className="list-group bg-dark">
                    <li className="list-group-item bg-dark text-white border-secondary">
                        <strong>Huck:</strong> Un lanzamiento largo que busca avanzar rápidamente hacia la zona de gol.
                    </li>
                    <li className="list-group-item bg-dark text-white border-secondary">
                        <strong>Layout:</strong> Una atrapada espectacular lanzándose al suelo para alcanzar el disco.
                    </li>
                    <li className="list-group-item bg-dark text-white border-secondary">
                        <strong>Defensa en zona:</strong> Una estrategia defensiva para cubrir áreas específicas del campo.
                    </li>
                </ul>
            </div>

            {/* Videos */}
            <div className="videos">
                <h2 className="text-secondary border-bottom pb-2">Videos Destacados</h2>
                <div className="text-center">
                    <a href="https://youtu.be/6awvdnboEIA" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://i.ytimg.com/vi/6awvdnboEIA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA9wmJ3p7TysAKEof4hQpUlK89quw"
                            alt="Video destacado"
                            className="img-fluid rounded shadow mb-3"
                            style={{ maxWidth: "400px" }}
                        />
                    </a>
                    <p className="text-muted">Haz clic en la imagen para ver algunas de las mejores jugadas del año 2024 (WFDF).</p>
                </div>
            </div>
        </div>
    );
};

export default Moments;