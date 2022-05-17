import MenuItems from "../components/Menu/MenuItems";
import CartItem from "../components/Cart/CartItem"
import {useGeneralContext } from "../context"

const Menus = () => {
  const {isCartOpen} = useGeneralContext();
  return (
    <>
    {isCartOpen && <CartItem/>}   
    <MenuItems/>
    </>
  )
}

export default Menus