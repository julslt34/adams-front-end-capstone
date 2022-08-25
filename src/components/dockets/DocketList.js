import React, {useState, useEffect} from "react"
import { DocketCard } from "./DocketCard"




export const DocketList = () => {

    const [dockets, setDockets] = useState([])


    useEffect(() => {
        fetch(`http://localhost:8088/users?_embed=clients`)
        .then(response=>response.json())
        .then(setDockets)

    }, [])





    return(
        <>
        <div className="ms-3">
        <h1>Clients</h1>
        {
            dockets.map( client => <DocketCard key={client.id} singleDocket={client}/>)
        }
        </div>

        </>
    )
}