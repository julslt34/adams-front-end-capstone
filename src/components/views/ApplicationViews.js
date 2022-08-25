import { ClientViews } from "./ClientViews"
import { MediatorViews } from "./MediatorViews"
// import { ClientList} from "./ClientList"
// import { ClientDetails} from "./ClientDetails"

export const ApplicationViews = () => {
	
    const localMediationUser = localStorage.getItem("mediation_user")
    const mediationUserObject = JSON.parse(localMediationUser)     
    
    if (mediationUserObject.staff) {
//  return mediatior views 
        return <MediatorViews />
    }
else {
    // return client views
        return <ClientViews />
    }
}








//  import { Routes, Route, Outlet } from "react-router-dom"
// // import { DocketList } from "../dockets/DocketList"
 
// // import { ClientViews } from "./ClientViews"
// // import { MediatorViews } from "./MediaatorViews"
// // import { ClientList} from "./ClientList"
// // import { ClientDetails} from "./ClientDetails"

// export const ApplicationViews = () => {
	
//     const localMediationUser = localStorage.getItem("mediation_user")
//     const mediationUserObject = JSON.parse(localMediationUser)     
    

// return(
//     <Routes>
//         <Route path="/" element={
//                 <>
//                     <h1>VC-Resolution</h1>
//                     <div>Your conflict solutions</div>

//                     <Outlet />
//                 </>
//             }/>
// {/* 
//             <Route path="dockets" element={ <DocketList />}  /> */}

//     </Routes>
// )

       
// //     if (mediationUserObject.staff) {
// // //  return mediator views 
// //         return <MediatorViews />
// //     }
// // else {
// //     // return client views
// //         return <ClientViews />
// //     }
// }













