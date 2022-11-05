import React from "react"
import { Link } from "react-router-dom"
import {
  LineStyle,
  Timeline,
  TrendingUp,
  AttachMoney,
  StoreOutlined,
  PersonOutlined,
  AssessmentOutlined,
} from "@mui/icons-material"

import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PersonOutlined className="sidebarIcon" />
                User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <StoreOutlined className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <AssessmentOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
