import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "./nav.css"

const Nav = ({ onSearch }) => {
    return(
        <nav className="navi">
            <ul className="ulcss">
             <Link className="cerrarsesion" to="/">Logout</Link>
             <Link to="/about"><button className="about">About</button></Link>
              <Link to="/home"><button className="homi">Home</button></Link>
            </ul>
              <SearchBar onSearch={onSearch} />
        </nav>
    )
}

export default Nav;