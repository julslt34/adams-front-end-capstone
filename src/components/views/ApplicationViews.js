// import { ClientViews } from "./ClientViews"
// import { MediatorViews } from "./MediatorViews"

import { Outlet, Route, Routes } from "react-router-dom"
import { DocketForm } from "../dockets/DocketForm"
import { DocketList } from "../dockets/DocketList"
import { Profile } from "../profile/Profile"

import { ClientList } from "../clients/ClientList"
import { ClientDetails } from "../clients/ClientDetails"
import { DocketEdit } from "../dockets/DocketEdit"
import { MediationsList } from "../mediations/MediationsList"
import { MediationsForm } from "../mediations/MediationsForm"
import { MediationsEdit } from "../mediations/MediationsEdit"
import { ClientContainer } from "../clients/ClientContainer"
import { ClientSearch } from "../clients/ClientSearch"
import { MediatorList } from "../mediators/MediatorList"



export const ApplicationViews = () => {
	
    const localMediationUser = localStorage.getItem("mediation_user")
    const mediationUserObject = JSON.parse(localMediationUser)     
    
    return (
        <Routes>
            <Route path="/" element={
                <>
                    {/* <h1>VC-Resolution</h1>
                    <div>Your conflict solutions</div> */}

                    <Outlet />
                </>
            }>
<Route path="casenotess/edit/:docketId" element={ <DocketEdit/> } />
                
                <Route path="dockets/edit/:docketId" element={ <DocketEdit/> } />
                <Route path="clients/:clientId/edit" element={ <MediationsEdit/> } />
               <Route path="mediations" element={ <DocketList />}  />
               <Route path="profile" element={ <Profile />}  />
               <Route path="docket/create" element={ <DocketForm /> } />
               <Route path="clients/:clientId/" element={ <ClientDetails />}  />
               {/* <Route path="clients" element={ <ClientList />}  /> */}
               
               <Route path="clients/:clientId/" element={ <MediationsList />}  />  
               <Route path="clients/:clientId/schedule" element={ <MediationsForm />}  /> 
<Route path="/" element={ <ClientContainer/> }  />
<Route path="/mediatorList" element={ <MediatorList />}  /> 
               {/* <Route path="/clients/:clientId/form" element={ <MediationsForm />}  />  */}


               {/* <Route path="/clients" element={ <MediationsForm />}  />  */}
               
            </Route>
        </Routes>
    )
 
}







//  import { Routes, Route, Outlet } from "react-router-dom"
// // import { DocketList } from "../dockets/DocketList"
 
// // import { CustomerViews } from "./CustomerViews"
// // import { EmployeeViews } from "./EmployeeViews"
// // import { CustomerList} from "./CustomerList"
// // import { CustomerDetails} from "./CustomerDetails"

// export const ApplicationViews = () => {
	
//     const localMediationUser = sessionStorage.getItem("mediation_user")
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
// // //  return employee views 
// //         return <MediatorViews />
// //     }
// // else {
// //     // return customer views
// //         return <ClientViews />
// //     }
// }













