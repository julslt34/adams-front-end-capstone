import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"



export const DocketEdit = () => {
    const [docket, assignDocket] = useState({
        description: "",
        
    })
    
    const navigate = useNavigate()

    // TODO: What is the variable in which you stored the route parameter?
    const { docketId } = useParams()

    // TODO: Get the ticket state from the API.
    useEffect(() => {
        fetch(`http://localhost:8088/docketTickets/${docketId}`)
            .then(response => response.json())
           .then((data) => {
                assignDocket(data)
            })
    }, [docketId])


    const handleSaveButtonClick = (event) => {
        // event.preventDefault()

        //  fetch for the PUT request to replace the object being edited

        return fetch(`http://localhost:8088/docketTickets/${docketId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(docket)
        })
            .then(response => response.json())
            .then(() => 
                navigate("/dockets")
            )
    
    }


    return (
        <>
    
        <h2 className="docketForm__title">Docket Ticket</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={docket.description}
                    onChange={
                        (evt) => {
                            // this updates state with a modified copy
                            const copy = { ...docket }
                            copy.description = evt.target.value
                            assignDocket(copy)
                        }
                    }>{docket.description}</textarea>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Emergency:</label>
                <input type="checkbox"
                    onChange={
                        (evt) => {
                            // this updates state with a modified copy
                            const copy = { ...docket }
                            copy.emergency = evt.target.checked
                            assignDocket(copy)
                        }
                    } />
            </div>
        </fieldset>
        <button
            onClick={() => handleSaveButtonClick()}
            className="btn btn-primary">
            Save Edits
        </button>
    {/* </form> */}
    </>
    )
}