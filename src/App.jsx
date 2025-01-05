import Form from "./Components/Form"
import HomePage from "./Components/HomePage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from "./Utils/UserContext.jsx"

const App = () => {
  return (
    <div>
      <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Form />}/>
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </Router>
      </UserProvider>
    </div>
  )
}

export default App
