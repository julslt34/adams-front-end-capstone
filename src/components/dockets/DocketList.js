import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Docket } from "./Docket"
import "./Dockets.css"

export const DocketList = () => {
    const [dockets, setDockets] = useState([])
    const navigate = useNavigate()

    const localMediationUser = sessionStorage.getItem("mediation_user")
    const mediationUserObject = JSON.parse(localMediationUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/clients`)
            .then(response => response.json())
            .then((docketArray) => {
                setDockets(docketArray)
            })   
        },
        [ ]
    )

    return <>

<h2>Mediation Docket List</h2>

<article className="dockets">
        {
            dockets.map(
                (docket) => {
               return <section clssName="docket">
                <header>{docket.conflict}</header>
               </section>
                }
         )
    }
    
   </article> 
   </>


}