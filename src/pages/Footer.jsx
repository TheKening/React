const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    {/* Sección de información */}
                    <div className="col-md-6">
                        <h5>Sobre Ultimate Frisbee</h5>
                        <p>
                            Ultimate Frisbee es un deporte emocionante que combina habilidades atléticas, trabajo en equipo y espíritu deportivo. 
                            Es reconocido por su enfoque en el "Espíritu de Juego", promoviendo el respeto mutuo entre los jugadores.
                        </p>
                    </div>
                    {/* Sección de enlaces */}
                    <div className="col-md-3">
                        <h5>Enlaces útiles</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://wfdf.sport/" target="_blank" rel="noopener noreferrer" className="text-white">
                                    Federación Internacional (WFDF)
                                </a>
                            </li>
                            <li>
                                <a href="https://www.fecodv.org/" target="_blank" rel="noopener noreferrer" className="text-white">
                                    Federación Colombiana (FECODV)
                                </a>
                            </li>
                            <li>
                                <a href="https://en.wikipedia.org/wiki/Ultimate_(sport)" target="_blank" rel="noopener noreferrer" className="text-white">
                                    Wikipedia: Ultimate Frisbee
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Sección de contacto */}
                    <div className="col-md-3">
                        <h5>Contacto</h5>
                        <p>Email: <a href="mailto:info@ultimatefrisbee.org" className="text-white">info@ultimatefrisbee.org</a></p>
                        <p>Teléfono: +1 (555) 123-4567</p>
                        <p>Síguenos en redes sociales:</p>
                        <div>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                                Facebook
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="mb-0">© 2025 Ultimate Frisbee Community. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;