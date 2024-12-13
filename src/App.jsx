// import image from "./assets/images.jpeg"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Dashboard from "./pages/dashboard/Dashboard"
function App() {

  return (
    <>
      {/* <span className="flex justify-center bg-red-300 border">SAHIL MANE</span>

      <img className="w-10 h-10 rounded-full" src={image} alt="Rounded avatar" />
      <img className="w-10 h-10 rounded" src={image} alt="Default avatar" />
      <h1>sahi hai bhai 2</h1> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </>
  )
}

export default App
