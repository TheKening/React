import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    {/* Logo */}
                    <div>
                        <Link to="/">
                            <img
                                src="https://watchufa.com/sites/default/files/UFAIcon.png"
                                alt="Ultimate Frisbee Logo"
                                width={180}
                                className="img-fluid"
                            />
                        </Link>
                    </div>

                    {/* Menú de navegación */}
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-white">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Characters" className="nav-link text-white">
                                    Characters
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Moments" className="nav-link text-white">
                                    Moments
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Federacion" className="nav-link text-white">
                                    Federacion
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;