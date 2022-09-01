import { useState} from "react"
import { ClientDetails } from "./ClientDetails"
 import { ClientList } from "./ClientList"
 import { ClientSearch } from "./ClientSearch"

export const ClientContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

return <>
    <ClientSearch setterfunction={setSearchTerms}/>
    {/* <ClientDetails searchTermState={searchTerms}/> */}
    <ClientList searchTermState={searchTerms}/>
</>

}