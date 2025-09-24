
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
import Video from "./components/app/Video"
import Audio from "./components/app/Audio"
import Chat from "./components/app/Chat"
import NotFound from "./components/NotFound"
import { ToastContainer } from 'react-toastify';
import Context from "./Context"

const App = () => {
  return (
    <Context.Provider value={'a'}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/app" element={<Layout />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="my-post" element={<Posts />} />
            <Route path="friends" element={<Friends />} />
            <Route path="video-chat" element={<Video />} />
            <Route path="audio-chat" element={<Audio />} />
            <Route path="chat" element={<Chat />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App