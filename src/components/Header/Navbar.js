import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../assets/css/app.css'
import { images } from "../../assets/images";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Container>
                <div className="navbar-start">
                    <a className="logo">
                        <img  src={images.logo} />
                    </a>
                </div>
                <div className="navbar-middle">
                    <div className="nav-links">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/courses" className="nav-link">
                            Courses
                        </Link>
                    </div>
                </div>
                <div className="navbar-end">
                    <a>
                        Login
                    </a>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;