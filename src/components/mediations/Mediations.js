import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Mediations.css"

export const Mediations = () => {
    const [mediations, setMediations] = useState([])

    const navigate = useNavigate()

    const localMediationUser = localStorage.getItem("mediation_user")
    const mediationUserObject = JSON.parse(localMediationUser)

    //get all events by associated user for initial view
    useEffect(() => {
        return fetch(`http://localhost:8088/mediations=${mediationUserObject.id}`)
            .then(res => res.json())
            .then((mediationArray) => {
                setMediations(mediationArray)
            })
        },
        []
    )
// test code betweeen

const getAllMediations = () => {
    fetch(`http://localhost:8088/mediations/${mediationUserObject.id}`)
.then(response => response.json())
.then((mediationArray) => {
    setMediations(mediationArray)
})
}
// between comment out markers in simpler version was commented out

// function that updates task with new completed state

// const completeMediation = (mediation) => {
//     const copy = {
//         clientId: mediation.clientId,
//         dateOf: mediation.dateOf,
//         casenote: mediation.casenote
//     }
//     fetch(`http://localhost:8088/mediations/${mediation.id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(copy)
//     })
//         .then(response => response.json())
//         .then(getAllMediations)
// }

// above origionally commented out

return (
    <>
        {
            mediations.map(mediation => 
                <div className="note" key={`note--${mediation.id}`}>
                    <section>Casenote: {mediation.casenote}</section>
                    <section>Event Date: {mediation.dateOf}</section>
                    <section>Casenote: {mediation.amtBilled}</section>
                     <button onClick={() => navigate (`/clients/${mediation.id}/edit`)}>Edit Note</button>
                     {/* <button onClick={() => navigate (`/home/edit/${mediation.id}`)}>Edit Note</button> */}
                </div>
                )
        }
    </>

    )
}




// test code



// original working code

//     return (
//     <>
//         {
//             mediations.map(mediation => 
//                 <div className="note" key={`note--${mediation.id}`}>
//                     <section>Casenote: {mediation.casenote}</section>
//                     <section>Event Date: {mediation.dateOf}</section>
//                      <button onClick={() => navigate (`/home/edit/${mediation.id}`)}>Edit Note</button>
//                 </div>
//                 )
//         }
//     </>

//     )
// }
