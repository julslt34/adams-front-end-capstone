import { useEffect, useState } from "react"
import "./Client.css"
import { Client } from "./Client"


export const ClientList = () => {
    const [clients, setClients] = useState([])

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
    
    

        return (
            <>
            <div className = "clients">
                <h1>Clients</h1>
            {
             clients.map(client =>{
                return (<Client key= {client.id} clientObject={client}/>)
            })
        }
            </div>
            </>
        )
           
        }        


 