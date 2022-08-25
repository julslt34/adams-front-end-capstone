import { useState} from "react"
import { DocketList } from "./DocketList"
import { DocketSearch } from "./DocketSearch"

export const DocketContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return<>
       <DocketSearch setterFunction={setSearchTerms}/> 
       <DocketList searchTermState={searchTerms} /> 
</>
}