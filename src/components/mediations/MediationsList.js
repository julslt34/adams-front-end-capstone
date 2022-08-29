// import { useNavigate } from "react-router-dom"
// import { Mediations } from "./Mediations"
// import "./Mediations.css"

// export const MediationsList = () => {

//     const navigate = useNavigate()

//     return(
//         <>
//         <article className="notes">
//             <header>
//                 <h2>Mediations</h2>
//             </header>
//             <section>
//                 <Mediations />
//             </section>
//             <section>
//                 <button onClick={() => navigate ("/clients/:clientId")}>Create New Note</button>
//             </section>

//         </article>
//         </>
//     )
// }



import { useEffect, useState } from "react"
import { MediationsEdit } from "./MediationsEdit"

export const MediationsList = () => {
    const [mediations, setMediations] = useState([])
    
     useEffect(
        () => {           
    fetch(`http://localhost:8088/mediations`)
                .then(response => response.json())
                .then((mediationArray) => {
                    setMediations(mediationArray)
                })
},
[]
     )

    return <>
   

    <h2>Scheduled Date for Mediation & Notes</h2>

    <article className="notes">
        {
            mediations.map(
                (mediation) => {
                    return <section className="note">
                        <header>NOTES: {mediation.casenote}</header><br></br>
                        <header>MEDIATION DATE & TIME: {mediation.dateOf}</header><br></br>
                        <header>AMOUNT BILLED: ${mediation.amtBilled}</header>
                    </section>
                    
                }
         )
    }
    

   </article> 
   </>

}



{/* <header>{ticket.description}</header>
<footer>Emergency: {ticket.emergency ? "YES" : "No"}</footer> */}
