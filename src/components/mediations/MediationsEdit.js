import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const MediationsEdit = () => {
    const [mediation, update] = useState({
        // clientId: 0,
        casenote: "",
        dateOf: "mm/dd/yyyy",
        amtbilled: ""
    })
    
    const navigate = useNavigate()
    const { clientId } = useParams()
    

    useEffect(() => {
        fetch(`http://localhost:8088/mediations/${clientId}`)
            .then(response => response.json())
            .then((data) => {
                update(data)
            })
    }, [ clientId ]);

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/mediations/${clientId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mediation)
        })
            .then(response => response.json())
            .then(() => {
              
                navigate(`/clients/${clientId}`)

                // navigate(`/clients/${clientId}/edit`)
                // navigate("/clients")
            });
    };


    return <form className="noteForm">
        <h2 className="noteForm__title"></h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Edit Note</label>
                <textarea
                    required autoFocus
                    type="text"
                    className="form-control"
                    value={mediation.casenote}
                    onChange={
                        (evt) => {
                            const copy = { ...mediation }
                            copy.casenote = evt.target.value
                           update(copy)
                        }
                    }>{mediation.casenote}</textarea>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Amount Billed</label>
                <textarea
                    required autoFocus
                    type="text"
                    className="form-control"
                    value={mediation.amtBilled}
                    onChange={
                        (evt) => {
                            const copy = { ...mediation }
                            copy.amtBilled = evt.target.value
                           update(copy)
                        }
                    }>{mediation.amtBilled}</textarea>
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Choose a time for the appointment:</label>
                <textarea
                    required autoFocus
                    type="datetime-local"
                    className="meeting-time"
                    placeholder="Enter Date"
                    value={mediation.dateOf}
   min="2022-01-07T00:00" max="2023-12-14T00:00"
                    onChange={
                        (evt) => {
                            const copy = { ...mediation }
                            copy.dateOf = evt.target.value
                           update(copy)
                        }
                    }>{mediation.dateOf}</textarea>
            </div>
        </fieldset>


        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Save
        </button>
    </form>
}