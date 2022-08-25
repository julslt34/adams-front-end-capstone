import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const MediatorNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/tickets">Dockets</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/mediators">Mediators</Link>
            </li>
            <li className="navbar__item logout">
                <Link className="navbar__link" to="/profile">Profile</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/clients">Clients</Link>
            </li>
            {
                localStorage.getItem("mediation_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("mediation_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}

