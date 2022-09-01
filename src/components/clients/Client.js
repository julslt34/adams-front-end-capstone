import { useState } from "react"
import { Link } from "react-router-dom"

export const Client = ({clientObject}) => {

    const [clientInfo, setClientInfo] = useState(false)

    const linkInfo = (clientInfo) => {
        if (clientInfo) {
            setClientInfo(false)
          } 
        else {
            setClientInfo(true)
        }
    }

return(
    <section className="client" key={`client--${clientObject.id}`}>
        <div onClick={() => linkInfo(clientInfo)}>
        {/* <div> Name: {clientObject.fullName}</div>  */}
        <Link className="navbar__link" to={`/clients/${clientObject.id}`}> {clientObject.fullName1} / {clientObject.fullName2}</Link>
        
        <div> Phone: {clientObject.phoneNumber1} / {clientObject.phoneNumber2}</div>
        {/* {clientInfo ? <ClientDetails clientObject={clientObject} /> : null} */}
        
        </div>
    </section>
    )
}
