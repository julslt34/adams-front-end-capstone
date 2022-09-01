import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"


export const Register = (props) => {
    const [client, setClient] = useState({
        // email: "",
        // fullName: "",
        // isStaff: false

       
        fullName1: "",
        fullName2: "",
        email1: "",
        email2: "",
        address1: "",
        address2: "",
        phoneNumber1: "",
        phoneNumber2: "",
        conflict1: "",
        userId: ""
        // conflict2: "",
       
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/clients", {
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
                        // staff: createdUser.isStaff
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
                <h1 className="h3 mb-3 font-weight-normal">Client Registration</h1>
                <fieldset>
                    <label htmlFor="fullName"> Client's Full Name </label>
                    <input onChange={updateClient}
                           type="text" id="fullName1" className="form-control"
                           placeholder="Enter client's full name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateClient}
                        type="email" id="email1" className="form-control"
                        placeholder="Enter client's email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="address"> Address </label>
                    <input onChange={updateClient}
                        type="text" id="address1" className="form-control"
                        placeholder="Enter client's address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="phoneNumber"> Phone number </label>
                    <input onChange={updateClient}
                        type="text" id="phoneNumber1" className="form-control"
                        placeholder="Enter client's Phone Number" required />
                </fieldset>
               
                <fieldset>
                    <label htmlFor="fullName">Opposing Client's Full Name </label>
                    <input onChange={updateClient}
                           type="text" id="fullName2" className="form-control"
                           placeholder="Enter the other party's name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Opposing Party's email address </label>
                    <input onChange={updateClient}
                        type="email" id="email2" className="form-control"
                        placeholder="Enter the other party's email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="address"> Opposing Party's address </label>
                    <input onChange={updateClient}
                        type="text" id="address2" className="form-control"
                        placeholder="Enter the other party's address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="phoneNumber"> Opposing Party's phone number </label>
                    <input onChange={updateClient}
                        type="text" id="phoneNumber2" className="form-control"
                        placeholder="Enter the other party's Phone Number" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="conflict"> Clients description of the dispute </label>
                    <input onChange={updateClient}
                        type="text" id="conflict1" className="form-control"
                        placeholder="Brief summary" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="userId"> Mediator Numbers::     1 - (Elizabeth Bent)   2- (William Darcy)   </label>
                    <input onChange={updateClient}
                        type="number" id="userId" className="form-control"
                        placeholder="Pick a mediator number" required />
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

