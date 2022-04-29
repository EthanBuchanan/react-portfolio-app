import {Link, useLocation} from "react-router-dom"

function Header() {

    const location = useLocation();

    

    return (
        <header>
            <Link to="/">
                <div className="header-left">
                    <h1>
                        Portfolio <span className="header-left-small-text">of</span> <span>Ethan&nbsp;Buchanan</span>
                    </h1>
                </div>
            </Link>
            <div className="header-right">
                <div>
                    <Link to="/" className={location.pathname === "/"?"nav_highlighted shadow":""}>About&nbsp;Me</Link>
                </div>

                <div>
                    <Link to="/resume" className={location.pathname === "/resume"?"nav_highlighted shadow":""}>Resume</Link>
                </div>
                
                <div>
                    <Link to="/projects" className={location.pathname === "/projects"?"nav_highlighted shadow":""}>Projects</Link>
                </div>

                <div>
                    <Link to="/contact" className={location.pathname === "/contact"?"nav_highlighted shadow":""}>Contact</Link>
                </div>
            </div>
        </header>
    )
}

export default Header