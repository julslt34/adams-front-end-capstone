import { useEffect, useState } from "react"
import "./Client.css"
import { Client } from "./Client"
import { useNavigate } from "react-router-dom"


export const ClientList =   ({searchTermState}) => {
    const [clients, setClients] = useState([])
const [filteredClients, setFiltered] = useState([])

    const localMediationUser = localStorage.getItem("mediation_user")
     const mediationUserObject = JSON.parse(localMediationUser)

// added section for searching
useEffect(
    () => {
        const searchedClients = clients.filter(client => {
            return client.fullName1.toLowerCase().startsWith(searchTermState.toLowerCase())
         } )
        setFiltered(searchedClients)
    },
    [ searchTermState, clients ]
)
//  added section for searching

    useEffect(
        () => {
              fetch(`http://localhost:8088/clients?_expand=user&userId=${mediationUserObject.id}`)


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
             filteredClients.map(client =>{
                return (<Client key= {client.id} clientObject={client}/>)
            })
        }
            </div>
            </>
        )
           
        }        


 