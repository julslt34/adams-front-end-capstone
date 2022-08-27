import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const ClientNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
{/* shows Docket link in the client nav bar */}

            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/dockets">Dockets</Link>
            </li> */}
            <li className="navbar__item logout">
                <Link className="navbar__link" to="/profile">Profile</Link>
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

