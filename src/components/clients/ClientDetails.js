import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ClientDetails = ({ clientObject}) => {  
    const [clientDetails, setClientDetails ] = useState({})

    const {clientId} = useParams()



    useEffect (
        () => {
            
            fetch(`http://localhost:8088/clients?_expand=user&userId=${clientId}`)           
            .then(response => response.json())
            .then((data) => {
                console.log("this is data", data)
                const singleClient = data[0]
                console.log(singleClient)
                console.log(clientId)
                setClientDetails(singleClient)
            })
        },
        []
    )

    return <section className="client">
               <header className="client__header"> {clientDetails?.user?.fullName}</header>
               <div>Phone: {clientDetails?.phoneNumber}</div>
                <div>Address: {clientDetails?.address}</div>
                <div>Email: {clientDetails?.user?.email}</div>
              
           
    </section>
    
    
}

//     useEffect(() => {
//         fetch("http://localhost:8088/clients?_expand=user")
//             .then(response => response.json())
//             .then(clientArray => setClientDetails(clientArray))
//     },
//    [])  

// return ClientDetails.map((clientDetail => {
//     if (clientObject.id === clientDetail.userId) {
//         return (
//            <React.Fragment key={`client--details${clientObject.id}`}>
       
//             <div>Address: {clientDetail.address}</div>
//             <div>Phone: {clientDetail.phoneNumber}</div>
//            </React.Fragment> 
//         )
//     }
//    }))

// }


