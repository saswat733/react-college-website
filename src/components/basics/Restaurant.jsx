import React, { useState } from 'react'
import "./Style.css"
import Menu from './menuapi'
import MenuCard from './MenuCard';
import Navbar from './Navbar';
// import { useState } from 'react'

const categoryele=[...new Set(
  Menu.map((ele)=>{
    return ele.country;
  })
),"All",
]
// console.log(categoryele)
const Restaurant = () => {
    const [menudata, setmenudata] = useState(Menu);
    const [menu, setmenu] = useState(categoryele)
    
    const filteritem=(country)=>{
      if(country==="All"){
        setmenudata(Menu)
        return;
      }
      const updatedlist=Menu.filter((ele)=>{
        return ele.country===country;
      });
      setmenudata(updatedlist);
    }
  return (
    <>
    <Navbar filteritem={filteritem} menu={menu}/>
    <MenuCard menudata={menudata}/>
    
    </>
  )
}

export default Restaurant