
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Layout from "./components/app/Layout"
import 'remixicon/fonts/remixicon.css'
import Dashboard from "./components/app/Dashboard"
import Posts from "./components/app/Posts"
import Friends from "./components/app/Friends"
import 'animate.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app" element={<Layout />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="my-post" element={<Posts />} />
          <Route path="friends" element={<Friends />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App