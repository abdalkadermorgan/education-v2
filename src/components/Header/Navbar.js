import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../assets/css/app.css';
import { images } from "../../assets/images";
import { UilShoppingCartAlt } from '@iconscout/react-unicons';
import { useSelector } from "react-redux";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const Navbar = () => {
    const ctx = useContext(AuthContext)

    const { cart } = useSelector((state) => state);
    return (
        <nav className="navbar">
            <Container>
                <div className="navbar-start">
                    <Link to="/" className="logo">
                        <img  src={images.logo} alt="logo"/>
                    </Link>
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
                    <div className="nav-links">
                        {!ctx.isLoggedIn && (
                            <Link to="/login" className="nav-link login">
                                Login
                            </Link>
                        )}

                        {ctx.isLoggedIn && (
                            <Button className="btn btn-primary" onClick={ctx.onLogout}>Logout</Button>
                        )}
                        <Link to="cartpage" className="nav-link shop">
                            <span>{cart.length}</span>
                            <UilShoppingCartAlt />
                        </Link>
                        {ctx.isLoggedIn && (
                            <Link to="/dashboard/courses" className="nav-link dashboard">
                                Dashboard
                            </Link>
                        )}
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;