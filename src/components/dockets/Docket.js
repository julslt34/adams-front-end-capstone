import { Link } from "react-router-dom"

export const Docket = ({ docketObject, currentUser, mediators, getAllDockets }) => {
   
//  find the assiged mediator for the current ticket

let assignedMediator = null

if (docketObject.mediatorTickets.length > 0) {
  const docketMediatorRelationship = docketObject.mediatorTickets[0]
  assignedMediator = mediators.find(mediator => mediator.id === docketMediatorRelationship.mediatorId)
    }

    // find the mediator profile object for the current user
const userMediator = mediators.find(mediator => mediator.userId === currentUser.id)



// function that determines if the current user can close the ticket
const canClose = () => {
    if (userMediator?.id === assignedMediator?.id && docketObject.dateCompleted === "" && currentUser.staff) {
        return <button onClick={closeDocket} className="docket__finish">Finish</button>    
        }
    else {
        return ""
    }
}


const deleteButton = () => {   
    if (!currentUser.staff) {
        return <button onClick={() => {
            fetch(`http://localhost:8088/docketTickets/${docketObject.id}` , {
                method: "DELETE"
            })
                 .then(() => {
                    getAllDockets()
                })
        }} className="docket__delete">Delete</button>    
        }
    else {
        return ""
    } 
}

// function that updates the ticket with a new date completed
const closeDocket = () => {
    const copy = {
        userId: docketObject.Id,
        description: docketObject.agreement,
        date: new Date()
    }

return fetch(`http://localhost:8088/docketTickets/${docketObject.id}}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(copy)
})
    .then(response => response.json())
    .then(getAllDockets)
}

const buttonOrNoButton = () => {
    if (currentUser.staff) {
        return <button
                onClick={() => {
                    fetch(`http://localhost:8088/mediatiorTickets`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({    
                            mediatorId: userMediator.id,
                            docketTickets: docketObject.id                        
                        })
                    })
                    .then(response => response.json())
                    .then(() => {
// get the state from the API
                        getAllDockets()
                    })
                }}
                >Claim</button>
    }
    else {
        return ""
    }
}

    // return <section className="ticket" key={`ticket--${ticketObject.id}`}>
    // <header>

{return <section className="docket">
    <header className="docket__header"> 

{
    currentUser.staff 
        ? `Docket ${docketObject.id}`
        : <Link to={`/dockets/edit/${docketObject.id}`}>Docket {docketObject.id}</Link>

}
</header>
<section>{docketObject.description}</section>
<section>Emergency: {docketObject.emergency ? "🧨" : "No"}</section>
<footer className="docket__footer">
    {
        docketObject.mediatorTickets.length
            ? `Assigned to ${assignedMediator !== null ? assignedMediator?.user?.fullName : ""}`
            : buttonOrNoButton()
    }
{
    canClose()
}
{
    deleteButton()
}
    </footer>
</section> 
}
}