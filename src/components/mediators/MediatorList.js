import { useEffect, useState } from "react"
import "./Mediators.css"

export const MediatorList = () => {
    const [mediators, setMediators] = useState([])

    useEffect(
        () => {
            fetch (`http://localhost:8088/users?`)
                .then(response => response.json())
                .then((mediatorArray) => {
                    setMediators(mediatorArray)
                })
        },
        []
    )

    return <article className= "mediators">
        {
            mediators.map(mediator => {
                return <section className= "mediator" jet={`mediator--${mediator.id}`}>
                    <div>Name: {mediator.fullName}</div>
                    <div>Email: {mediator.email}</div>
                    <div>Address: {mediator.address}</div>
                    <div>Phone Number: {mediator.phoneNumber}</div>
                    <div>Specialty: {mediator.specialty}</div>
                    <div>Hourly Rate: ${mediator.rate}</div>
                </section>
            })    
        }
    </article>
}

