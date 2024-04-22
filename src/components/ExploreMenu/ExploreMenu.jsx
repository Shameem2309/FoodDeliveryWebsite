import './ExploreMenu.css'
import React from 'react'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id="explore-menu">
     <h1>Explore our menu.</h1>
     <p className='explore-menu-text'>Explore from a diverse menu featuring a delectable array of dishes.From savory starters to decadent desserts, each bite promises to transport you to a world of flavor</p>
     <div className='explore-menu-list'>
        {
            menu_list.map((item,index)=>{
                return(
                    <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" :item.menu_name)} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })
        }
     </div>
     <hr/>

    </div>
  )
}

export default ExploreMenu