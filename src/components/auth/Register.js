import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [client, setClient] = useState({
        email: "",
        fullName: "",
        isStaff: false
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(client)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("mediation_user", JSON.stringify({
                        id: createdUser.id,
                        staff: createdUser.isStaff
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${client.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                                        
                    window.alert("Account with that email address already exists")
                }
                else {
                                        
                    registerNewUser()
                }
            })
    }

    const updateClient = (evt) => {
        const copy = {...client}
        copy[evt.target.id] = evt.target.value
        setClient(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for VC-Resolution</h1>
                <fieldset>
                    <label htmlFor="fullName"> Full Name </label>
                    <input onChange={updateClient}
                           type="text" id="fullName" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateClient}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="address"> Address </label>
                    <input onChange={updateClient}
                        type="text" id="address" className="form-control"
                        placeholder="Address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="phoneNumber"> Phone number </label>
                    <input onChange={updateClient}
                        type="text" id="phoneNumber" className="form-control"
                        placeholder="Phone Number" required />
                </fieldset>





                {/* <fieldset>
                    <input onChange={(evt) => {
                        const copy = {...client}
                        copy.isStaff = evt.target.checked
                        setClient(copy)
                    }}
                        type="checkbox" id="isStaff" />
                    <label htmlFor="email"> I am a user </label>
                </fieldset> */}
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}

