import React from 'react'
import logoDelivery from '../../assets/aprlogo.jpeg'

function DeliveryAddress() {
  return (
    <div className='delivery-container'>
        <h2>enter your address to find the closest restaurent near you!</h2>
        <img src={logoDelivery} alt=''/>
    </div>
  )
}

export default DeliveryAddress