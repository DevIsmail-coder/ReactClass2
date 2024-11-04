
import Changehomepage from './Changehomepage'
import { AppContext } from '../App'
import { useContext } from 'react'
 
const HomePage = () => {
  const {userName,setUserName} = useContext(AppContext)
  return (
    <div>
        <div>
            <h1>Welcome Too Our Home Page</h1>
            <p>to start with you are eligible too access our product</p>
            <h3>Contact {userName} </h3>
        </div>
        <Changehomepage setUserName={setUserName} />
    </div>
  )
}

export default HomePage