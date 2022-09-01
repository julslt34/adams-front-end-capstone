// import { useEffect, useState } from "react"

// export const ClientForm = () => {
//     //Provide initial state for profile
//     const [profile, updateProfile] = useState({
//         address: "",
//         phoneNumber: "",
//         userId: 0
//     })

//     const localMediationUser = localStorage.getItem("mediation_user")
//     const mediationUserObject = JSON.parse(localMediationUser)     


// const [feedback, setFeedback] = useState("")

// useEffect(() => {
//     if (feedback !== "") {
//         // Clear feedback to make entire element disappear after 3 seconds
//         setTimeout(() => setFeedback(""), 3000);
//     }
// }, [feedback])



//     // TODO: Get mediator profile info from API and update state
//     useEffect(() => {
//         fetch(`http://localhost:8088/clients?userId=${mediationUserObject.id}`)
//         .then(response => response.json())
//         .then((data) => {
//             const clientObject = data[0]
//             updateProfile(clientObject)
//         })
//     }, [])


//     const handleSaveButtonClick = (event) => {
//         event.preventDefault()

        
//             return fetch(`http://localhost:8088/clients/${profile.id}`, {
//                method: "PUT",
//                headers: {
//                     "Content-Type": "application/json"
//                },
//                body: JSON.stringify(profile)
//             })
//                 .then(response => response.json())
//                 .then(() => {
//                     setFeedback("Client profile successfully saved")
//                 })

//     }

//     return (


//         <form className="profile">

// <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
//     {feedback}
// </div>
            
//             <h2 className="profile__title">Client Profile</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="address">Address:</label>
//                     <input
//                         required autoFocus
//                         type="text"
//                         className="form-control"
//                         value={profile.addresss}
//                         onChange={
//                             (evt) => {
//                                 const copy = {...profile}
//                                  copy.address = evt.target.value
//                                   updateProfile(copy)
                                
//                             }
//                         } />
//                 </div>
//             </fieldset>
//             <fieldset>
//             <div className="form-group">
//                     <label htmlFor="number">Phone Number:</label>
//                     <input
//                         required autoFocus
//                         type="text"
//                         className="form-control"
//                         value={profile.phoneNumber}
//                         onChange={
//                             (evt) => {
//                                 const copy = {...profile}
//                                  copy.phoneNumber = evt.target.value
//                                   updateProfile(copy)
                                
//                             }
//                         } />
//                 </div>
//             </fieldset>
//             <button
//                 onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
//                 className="btn btn-primary">
//                 Save Profile
//             </button>
//         </form>
//     )
// }