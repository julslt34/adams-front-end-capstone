import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Mediations.css"

export const Mediations = () => {
    const [mediations, setMediations] = useState([])

    const navigate = useNavigate()

    const localMediationUser = localStorage.getItem("activeUser")
    const mediationUserObject = JSON.parse(localMediationUser)

    //get all events by associated user for initial view
    useEffect(() => {
        return fetch(`http://localhost:8088/casenotes=${mediationUserObject.id}`)
            .then(res => res.json())
            .then((mediationArray) => {
                setMediations(mediationArray)
            })
        },
        []
    )


    return (
    <>
        {
            mediations.map(theMediation => 
                <div className="note" key={`note--${theMediation.id}`}>
                    <section>Casenote: {theMediation.casenote}</section>
                    <section>Event Date: {theMediation.dateOf}</section>
                     <button onClick={() => navigate (`/home/edit/${theMediation.id}`)}>Edit Note</button>
                </div>
                )
        }
    </>

    )
}
