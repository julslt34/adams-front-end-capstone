import { useNavigate } from "react-router-dom"
import { Mediations } from "./Mediations"
import "./Mediations.css"

export const MediationsList = () => {

    const navigate = useNavigate()

    return(
        <>
        <article className="notes">
            <header>
                <h2>Mediations</h2>
            </header>
            <section>
                <Mediations />
            </section>
            <section>
                <button onClick={() => navigate ("/home/create/event")}>Create New Event</button>
            </section>

        </article>
        </>
    )
}