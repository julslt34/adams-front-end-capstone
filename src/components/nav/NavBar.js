import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css"

export const NavBar = () => {

    const navigate = useNavigate()

        return (
            
            <ul className="navbar">
                <li className= "navbar_item active">
                <Link className= "navbar_link" to="/Dockets">Dockets</Link>
                </li> 
                                     { 
                sessionStorage.getItem("mediation_user")     
                    ? <li className= "navbar_item navBar_logout">
                <Link className= "navbar_link" to="" onClick={() => {
                    sessionStorage.removeItem("mediation_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
                </li>
                : ""
                }                
            </ul>
        )
    }

