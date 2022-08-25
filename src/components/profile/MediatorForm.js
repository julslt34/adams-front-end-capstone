import { useEffect, useState } from "react"

export const MediatorForm = () => {
    // TODO: Provide initial state for profile
    const [profile, updateProfile] = useState({
        specialty: "",
        rate: 0,
        userId: 0
    })

    const localMediationUser = localStorage.getItem("mediation_user")
    const mediationUserObject = JSON.parse(localMediationUser)     
// tried adding given code here below

const [feedback, setFeedback] = useState("")

useEffect(() => {
    if (feedback !== "") {
        // Clear feedback to make entire element disappear after 3 seconds
        setTimeout(() => setFeedback(""), 3000);
    }
}, [feedback])



    // TODO: Get mediator profile info from API and update state
    useEffect(() => {
        fetch(`http://localhost:8088/mediators?userId=${mediationUserObject.id}`)
        .then(response => response.json())
        .then((data) => {
            const mediatorObject = data[0]
            updateProfile(mediatorObject)
        })
    }, [])


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        
            return fetch(`http://localhost:8088/mediators/${profile.id}`, {
               method: "PUT",
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify(profile)
            })
                .then(response => response.json())
                .then(() => {
                    setFeedback("Mediator profile successfully saved")
                })

    }

    return (


        <form className="profile">

<div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
    {feedback}
</div>
            
            <h2 className="profile__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={profile.specialty}
                        onChange={
                            (evt) => {
                                const copy = {...profile}
                                 copy.specialty = evt.target.value
                                  updateProfile(copy)
                                
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hourly rate:</label>
                    <input type="number"
                        className="form-control"
                        value={profile.rate}
                        onChange={
                            (evt) => {  
                                const copy = {...profile} 
                                copy.rate = parseFloat(evt.target.value, 2) 
                                updateProfile(copy)
                                
                            }
                         } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Profile
            </button>
        </form>
    )
}