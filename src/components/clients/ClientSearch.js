export const ClientSearch = ({setterfunction}) => {
    return(
        <div>
            <input 
            onChange={
                (changeEvent) => {
                    setterfunction(changeEvent.target.value)
                }
            }
            type="text" placeholder="Enter search terms" />
        </div>
        
    )
}