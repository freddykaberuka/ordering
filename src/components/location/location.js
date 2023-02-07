import React from 'react'
import './location.css'

const Location = ()=> {
  return (
    <div>
        <div className='sidebar'>
            <div className='sidebar-header'>
            <div className='side-header'>
                <h1>Welcome to Our Restaurent</h1>
                <img src='' alt='' />
            </div>
            <div className="side-buttons">
                <button id='b-pickup'>Pickup</button>
                <button id='b-delivery'>Delivery</button>
            </div>
            <div className='side-inputs'>
                <label>Find Your Closest Restaurent</label>
                <input type="text" placeholder="Enter your address"/>
            </div>
            </div>

            <div>
                <div>
                    <div>
                        <label>Fort Launderdale</label>
                        <span>3.75 miles away</span>
                    </div>
                    <div>
                        <span>0781 964 133</span>
                        <span>1890 S.Pearl St. Denver, Co 80210</span>
                        <span>Pickuo Time: 10minutes</span>
                    </div>
                    <div>
                        <label>Pickup Hours</label>
                        <div>
                            <span>Mon - Sun 11:30 AM - 10:00 PM</span>
                        </div>
                    </div>
                    <div>
                        <label>Store Hours</label>
                        <div>
                            <span>Mon - Sun 11:30 AM - 10:00 PM</span>
                        </div>
                    </div>
                    <div>
                        <button>schedule it</button>
                        <button>order now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location