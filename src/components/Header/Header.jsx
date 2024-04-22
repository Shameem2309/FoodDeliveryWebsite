import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Order your favourite food here.</h2>
            <p>Embark on a culinary adventure curated by our expert chefs, featuring a tantalizing array of dishes sure to delight your senses. From savory starters to decadent desserts, each bite promises to transport you to a world of flavor.</p>
           <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header