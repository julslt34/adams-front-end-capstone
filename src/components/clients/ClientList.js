import { useEffect, useState } from "react"
import "./Client.css"
import { Client } from "./Client"


export const ClientList = () => {
    const [clients, setClients] = useState([])
const [filteredClients, setFiltered] = useState([])

    const localMediationUser = localStorage.getItem("mediation_user")
     const mediationUserObject = JSON.parse(localMediationUser)

    useEffect(
        () => {
              fetch("http://localhost:8088/clients?_expand=user")


            // fetch('http://localhost:8088/users?isStaff=false')   
            .then(response => response.json())
                // .then(setClients)
             .then((clientArray) =>{
                setClients(clientArray)
             })  
            },
        [])
    
//     useEffect(() => {
//    const myClients = clients.filter(client => client.userId === mediationUserObject.id)
//    setFiltered(myClients)
//     },
//     [clients]
// )

        return (
            <>
            <div className = "clients">
                <h2>Clients</h2>
            {
             clients.map(client =>{
                return (<Client key= {client.id} clientObject={client}/>)
            })
        }
            </div>
            </>
        )
           
        }        


 