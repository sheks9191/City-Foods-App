import { useEffect, useState } from "react"
import MenuItem from "./MenuItem"
import Loading from "../Loading"
const url = 'https://city-foods-c4c09-default-rtdb.firebaseio.com/menus.json'

const MenuItems = () => {

  const [loading, setLoading] = useState(true)
  const [availableMenus, setAvailableMenus] = useState([])
  

  const fetchMenu = async () => {

    setLoading(true);

    try {

    const res = await fetch(url);
    const menuData = await res.json();
    

    const menus = [];

    for (const key in menuData) {

      menus.push({
        id:key,
        url: menuData[key].url,
        text:menuData[key].text,
        price: menuData[key].price,
      }) 
      
    }
    setLoading(false)
    setAvailableMenus(menus)
      
    } catch (error) {
      setLoading(false)
      console.log(error)
    }    
  }


  useEffect(() => {
    fetchMenu();
  }, [])

if(loading) {
  return (
    <Loading/>
  )
}

  return (
     <div className="menu-items">
         {availableMenus.map((menu)=> {
             return <MenuItem key={menu.id} {...menu}/>
         })}
     </div>
  )
}

export default MenuItems