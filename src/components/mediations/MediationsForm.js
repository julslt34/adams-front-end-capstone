import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { Client } from "../clients/Client"

// const clientObject = Client
export const MediationsForm = () => {

    const localMediationUser = localStorage.getItem("mediation_user")
    const mediationUserObject = JSON.parse(localMediationUser)

    const [mediation, update] = useState({
        // userId: mediationUserObject.id,
        casenote: "",        
        dateOf: "mm/dd/yyyy",  
        amtBilled: ""      
    })

    const navigate = useNavigate()


    const handleSaveButtonClick = (event) => {
        event.preventDefault()
            console.log("i was clicked")
        const eventToSendToApi = {
            // clientId: mediationUserObject.id,
                clientId: mediation.clientId,
                casenote: mediation.casenote,
                // dateOf: mediation.dateOf,
                dateOf: "",
                amtBilled: mediation.amtBilled,
            }
    
        
            return fetch(`http://localhost:8088/mediations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(eventToSendToApi)
            })
                .then(res => res.json())
                .then(() => {


                    
                navigate("clients/")
                    // navigate("/clients/note/form")
            })

        
    }

    return (<>
        <form className="noteForm">
            <h2 className="noteForm__title">Case Notes</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Note:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description"
                        // value={mediation.name}
                        value={mediation.casenote}
                        onChange={
                            (evt) => {
                                const copy = {...mediation}
                                copy.casenote = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Amount Billed:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="amt billed"
                        // value={mediation.name}
                        value={mediation.amtBilled}
                        onChange={
                            (evt) => {
                                const copy = {...mediation}
                                copy.amtBilled = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date of event in "yyyy-mm-dd" format:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Date"
                        value={mediation.dateOf}
                        onChange={
                            (evt) => {
                                const copy = {...mediation}
                                copy.dateOf = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset> */}

<fieldset>
                <div className="form-group">
                <label for="meeting-time">Choose a time for the appointment:</label>
                    <input
                        required autoFocus
                        type="datetime-local"
                        className="meeting-time"
                        placeholder="Enter Date"
                        value=""
       min="2022-01-07T00:00" max="2023-12-14T00:00"
                        onChange={
                            (evt) => {
                                const copy = {...mediation}
                                copy.dateOf = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

{/* 
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Note
                           
            </button> */}

 <button onClick={() => navigate(`/clients/${localMediationUser.id}`)}>Submit Note</button>
          
          
          
          
        </form>
        
    </>
    )
}
