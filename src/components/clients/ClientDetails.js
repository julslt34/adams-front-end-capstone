import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Mediations } from "../mediations/Mediations"
import { MediationsForm } from "../mediations/MediationsForm"
import { MediationsList } from "../mediations/MediationsList"


export const ClientDetails = ({ clientObject}) => {  
    const [clientDetails, setClientDetails ] = useState({})
   
    const {clientId} = useParams()

  const navigate = useNavigate()  

// 

// 
    useEffect (
        () => {
            
            fetch(`http://localhost:8088/clients/${clientId}?/_expand=user`)    
                   
            .then(response => response.json())
            .then((data) => {
                console.log("this is data", data)
                const singleClient = data
                console.log(singleClient)
                console.log(clientId)
                setClientDetails(singleClient)
            })
        },
        []
    )

    return <>
    <h4>CLIENTS INFORMATION</h4>
    { <section className="client">
    
               <header className="client__header"> {clientDetails?.fullName1}</header>
               <div>Phone: {clientDetails?.phoneNumber1}</div>
                <div>Address: {clientDetails?.address1}</div>
                <div>Email: {clientDetails?.email1}</div>            
           
    </section>}
    { <section className="client">
    
               <header className="client__header"> {clientDetails?.fullName2}</header>
               <div>Phone: {clientDetails?.phoneNumber2}</div>
                <div>Address: {clientDetails?.address2}</div>
                <div>Email: {clientDetails?.email2}</div>            
           
    </section>}
    <br></br>
    <h4>CLIENTS STATEMENTS ABOUT DISAGREEMENT</h4>
    { <section className="client">
               
                <div>{clientDetails?.fullName1} -  {clientDetails?.conflict1}</div>       

                <div>{clientDetails?.fullName2} -  {clientDetails?.conflict2}</div>                   
           
    </section>}
    <br></br>
    {/* <h4>MEDIATION NOTES</h4> */}
    {/* added to test after simple page */}

    
    {/* <article className="taskDisplay">

<header>
    <h2>Mediations</h2>
</header>
<section>
    <Mediations />
</section>
<section>
    <button onClick={() => navigate ("/clients/clientsId")}>Create New Task</button>
</section>

</article> */}


   {/*added above after simple page  */}

               {/* <div><MediationsForm /></div>      
         */}
                   
         {/* this is done after simple form */}
         
         
         <div><MediationsList /></div>  
         
         <button onClick={() => navigate(`/clients/${clientId}/schedule`)}>Create Note</button>

           {/* <button onClick={() => navigate("note/create")}>Create Note</button> */}

         {/* <button onClick={() => navigate("/clients/:clientId.id/note/create")}>Create Note</button> */}

         {/* <button onClick={() => navigate("/note/create")}>Edit Note</button> */}

{/* above is done after simple form */}        
   
    </>
    
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


