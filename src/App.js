import { BrowserRouter, Route, Routes } from "react-router-dom"

import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"
import UserList from "./pages/userList/UserList"
import Home from "./pages/home/Home"
import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser"
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product"
import NewProduct from "./pages/newProduct/NewProduct"

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
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productsId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
