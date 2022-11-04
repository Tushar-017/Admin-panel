import { BrowserRouter, Route, Routes } from "react-router-dom"

import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"
import UserList from "./pages/userList/UserList"
import Home from "./pages/home/Home"
import User from "./pages/user/User"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
