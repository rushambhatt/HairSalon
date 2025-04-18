
import { Link } from "react-router-dom"

function NavBar(){
    return <nav className="nav-bar">
        <div className="navbar-brand">
            <Link to="/">HomePage</Link>
        </div>
        <div className="navbar-title">
            <h1>Sushma's Hair and Beauty Portfolio</h1>
        </div>
        <div className="navbar-links">
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
        </div>
    </nav>
}

export default NavBar