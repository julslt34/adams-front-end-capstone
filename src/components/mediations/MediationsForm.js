import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const MediationsForm = () => {

    const localMediatonUser = localStorage.getItem("mediation_user")
    const mediationUserObject = JSON.parse(localMediatonUser)

    const [theMediation, update] = useState({
        userId: mediationUserObject.id,
        casenote: "",
        dateOf: "yyyy-mm-dd"        
    })

    const navigate = useNavigate()



    const handleSaveButtonClick = (event) => {
        event.preventDefault()
            
        const eventToSendToApi = {
                clientId: mediationUserObject.id,
                casenote: theMediation.casenote,
                dateOf: theMediation.dateOf,
                
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
                    navigate("/home")
            })

        
    }

    return (<>
        <form className="noteForm">
            <h2 className="noteForm__title">Case Note</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Note:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description"
                        value={theMediation.name}
                        onChange={
                            (evt) => {
                                const copy = {...theMediation}
                                copy.casenote = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date of event in "yyyy-mm-dd" format:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Date"
                        value={theMediation.dateOf}
                        onChange={
                            (evt) => {
                                const copy = {...theMediation}
                                copy.dateOf = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Note
            </button>
        </form>
    </>
    )
}
