 import { Routes, Route, Outlet } from "react-router-dom"
// import { DocketList } from "../dockets/DocketList"
 
// import { CustomerViews } from "./CustomerViews"
// import { EmployeeViews } from "./EmployeeViews"
// import { CustomerList} from "./CustomerList"
// import { CustomerDetails} from "./CustomerDetails"

export const ApplicationViews = () => {
	
    const localMediationUser = sessionStorage.getItem("mediation_user")
    const mediationUserObject = JSON.parse(localMediationUser)     
    

return(
    <Routes>
        <Route path="/" element={
                <>
                    <h1>VC-Resolution</h1>
                    <div>Your conflict solutions</div>

                    <Outlet />
                </>
            }/>
{/* 
            <Route path="dockets" element={ <DocketList />}  /> */}

    </Routes>
)

       
//     if (mediationUserObject.staff) {
// //  return employee views 
//         return <MediatorViews />
//     }
// else {
//     // return customer views
//         return <ClientViews />
//     }
}














// import { Outlet, Route, Routes } from "react-router-dom"
// import { DocketList } from "../dockets/DocketList"

// export const ApplicationViews = () => {
// 	return (
//         <Routes>
//             <Route path="/" element={
//                 <>
//                     <h1>VC-Resolution</h1>
//                     <div>Your conflict solution</div>

//                     <Outlet />
//                 </>
//             }>

//                 <Route path="dockets" element={ <DocketList /> } />
//             </Route>
//         </Routes>
//     )
// }