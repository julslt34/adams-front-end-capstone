import { ClientForm } from "./ClientForm"
import { MediatorForm } from "./MediatorForm"


export const Profile = () => {
  	
    const localMediationUser = localStorage.getItem("mediation_user")
    const mediationUserObject = JSON.parse(localMediationUser)     
    
    if (mediationUserObject.staff) {
        return <MediatorForm />
    }
else {
   return <ClientForm />
    }

}

