import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const MediationsEdit = () => {
    const [mediation, update] = useState({
        casenote: "",
    });
    
    const navigate = useNavigate()
    const { mediationId } = useParams()
    

    useEffect(() => {
        fetch(`http://localhost:8088/mediations/${mediationId}`)
            .then(response => response.json())
            .then((data) => {
                update(data)
            })
    }, [mediationId]);

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/mediations/${mediation.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/")
            });
    };


    return <form className="noteEditForm">
        <h2 className="noteEditForm__title"></h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="note"></label>
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
        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Save
        </button>
    </form>
}