import React from 'react'
import logo from "../../assets/aprlogo.jpeg";

function Delivery() {
  return (
    <div>
        <div className="sidebar-header">
          <div className="side-header">
            <h1>Welcome to Our Restaurent</h1>
            <img src={logo} alt="" />
          </div>
          <div className="side-buttons">
            <button id="b-pickup">Pickup</button>
            <button id="b-delivery">Delivery</button>
          </div>
          <div className="side-inputs">
            <label>Find Your Closest Restaurent</label>
            <input type="text" placeholder="Enter your address" />
          </div>
        </div>
    </div>
  )
}

export default Delivery