import { ClientNav } from "./ClientNav"
import { MediatorNav } from "./MediatorNav"
import "./NavBar.css"

export const NavBar = () => {
  	
    const localMediationUser = localStorage.getItem("mediation_user")
    const mediationUserObject = JSON.parse(localMediationUser)     
    
    if (mediationUserObject.staff) {
//  return mediator views 
        return <MediatorNav />
    }
else {
    // return lient views
        return <ClientNav />
    }

}












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

