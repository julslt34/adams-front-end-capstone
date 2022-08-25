import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const DocketForm = () => {
   
    const [docket, update] = useState({
        description: ""
       
    })
    /*
         Use the useNavigation() hook so you can redirect
        the user to the docket list
    */
    const navigate = useNavigate()

    const localMediationUser = localStorage.getItem("mediation_user")
    const mediationUserObject = JSON.parse(localMediationUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // Create the object to be saved to the API
    const docketToSendToAPI = {
        userId: mediationUserObject.id,
        description: docket.description,
        dateCompleted: ""
    }

        //  Perform the fetch() to POST the object to the API
    
        return fetch(`http://localhost:8088/docketTickets`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"            
        },
        body: JSON.stringify(docketToSendToAPI)
    })
            .then(response => response.json())
            .then(() => {
                navigate("/dockets")
            })
    }

    return (
        <form className="docketForm">
            <h2 className="docketForm__title">New Docket Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        value={docket.description}
                        onChange={
                            (evt) => {
                                const copy = {...docket}
                                copy.description = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        value={docket.emergency}
                        onChange={
                            (evt) => {
                                const copy = {...docket}
                                copy.emergency = evt.target.checked
                                update(copy)
                            }       
                         } />
                </div>
            </fieldset>            
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Docket
            </button>
        </form>
    )
}