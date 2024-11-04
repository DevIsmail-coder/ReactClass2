import { useState } from "react" 
import { AppContext } from "../App"
import { useContext } from "react"

const Changehomepage = () => {
    const {setUserName} = useContext(AppContext)
    const [newName,setNewName] = useState("")
  return (
    <div>
        <input onChange={(e)=> setNewName(e.target.value)} />
        <button onClick={() => {
            setUserName(newName)
        }}>update</button>
    </div>
  )
}

export default Changehomepage