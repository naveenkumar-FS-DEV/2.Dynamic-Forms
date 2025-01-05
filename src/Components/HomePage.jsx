import { useContext } from "react"
import { UserContext } from "../Utils/UserContext.jsx"

const HomePage = () => {
    const {username} = useContext(UserContext)
  return (
    <div className="home-container">
      <h2>This is my home page</h2>
      <h4>welcome, {username || 'guest'}</h4>
    </div>
  )
}

export default HomePage
