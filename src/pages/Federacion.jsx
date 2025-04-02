const Federacion = () => {
    return (
        <div className="federacion-container container py-5 bg-dark text-white">
            <h1 className="text-center text-primary mb-4">La Federación</h1>
            <p className="text-center mb-5">
                La Federación de Disco Volador es fundamental para promover y regular este deporte a nivel mundial. 
                Su objetivo es fomentar el espíritu deportivo, organizar competencias internacionales y garantizar 
                que las reglas sean aplicadas de manera uniforme. Además, apoya el desarrollo del deporte en países 
                emergentes y trabaja para que el disco volador sea reconocido como una disciplina olímpica.
            </p>
            <div className="row text-center">
                {/* Federación Internacional */}
                <div className="col-md-6 mb-4">
                    <a href="https://wfdf.sport/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://wfdf.sport/wp-content/uploads/2020/11/WFDF-Logo-360-Header.png" 
                            alt="Logo Federación Internacional de Disco Volador" 
                            className="img-fluid rounded shadow"
                            style={{ maxWidth: "200px" }}
                        />
                    </a>
                    <p className="mt-3">
                        Haz clic en el logo para visitar la Federación Internacional de Disco Volador (WFDF).
                    </p>
                </div>
                {/* Federación Colombiana */}
                <div className="col-md-6 mb-4">
                    <a href="https://www.fecodv.org/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://d36m266ykvepgv.cloudfront.net/uploads/media/oTqrgRwq5j/s-305-80/logo-fecodv-1-1.png" 
                            alt="Logo Federación Colombiana de Disco Volador" 
                            className="img-fluid rounded shadow"
                            style={{ maxWidth: "200px" }}
                        />
                    </a>
                    <p className="mt-3">
                        Haz clic en el logo para visitar la Federación Colombiana de Disco Volador (FECODV).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Federacion;