import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return <>
     <ul className="navbar">
        <h3>VC-RESOLUTION</h3> 
        
       
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/dockets">Dockets</Link>
            </li> */}
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
     </>
}












// import { ClientNav } from "./ClientNav"
// import { MediatorNav } from "./MediatorNav"
// import "./NavBar.css"

// export const NavBar = () => {
  	
//     const localMediationUser = localStorage.getItem("mediation_user")
//     const mediationUserObject = JSON.parse(localMediationUser)     
    
//     if (mediationUserObject.staff) {
// //  return mediator views 
//         return <MediatorNav />
//     }
// else {
//     // return lient views
//         return <ClientNav />
//     }

// }












// import { Link, useNavigate } from "react-router-dom";
// import "./NavBar.css"

// export const NavBar = () => {

//     const navigate = useNavigate()

//         return (
            
//             <ul className="navbar">
//                 <li className= "navbar_item active">
//                 <Link className= "navbar_link" to="/Dockets">Dockets</Link>
//                 </li> 
//                                      { 
//                 localStorage.getItem("mediation_user")     
//                     ? <li className= "navbar_item navBar_logout">
//                 <Link className= "navbar_link" to="" onClick={() => {
//                     localStorage.removeItem("mediation_user")
//                     navigate("/", {replace: true})
//                 }}>Logout</Link>
//                 </li>
//                 : ""
//                 }                
//             </ul>
//         )
//     }

