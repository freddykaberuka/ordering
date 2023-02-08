import React from "react";
import "./location.css";
import SidebarCard from "./sidebarCard";
import logo from "../../assets/aprlogo.jpeg";
import Delivery from "./Delivery";
import DeliveryAddress from "./DeliveryAddress";

const Location = () => {
  return (
    <div>
      <div className="sidebar">
        <Delivery/>
        {/* <div className="sidebar-header">
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
        </div> */}

        <div className="sidebar-container">
          {/* <SidebarCard /> */}
          <DeliveryAddress/>
        </div>
      </div>
    </div>
  );
};

export default Location;
