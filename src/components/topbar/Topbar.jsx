import React from "react"
import { NotificationsNone, Language, Settings } from "@mui/icons-material"

import dp from "../../images/dp.jpg"

import "./Topbar.css"

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">FusionAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone sx={{ fontSize: "32px" }} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language sx={{ fontSize: "32px" }} />
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <div className="topbarIconContainer">
            <Settings sx={{ fontSize: "32px" }} />
          </div>
          <img src={dp} alt="dp" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
