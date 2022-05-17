import CartIcon from "../data/CartIcon"
import { useGeneralContext } from "../context" 

const CartButton = () => {

  const {openCartHandler, cartContext} = useGeneralContext();

  const numberOfCartItems = cartContext.items.reduce((initialValue, item) => {
        return initialValue + item.amount
  },0)
  return (
    <button className="cart-button" onClick={openCartHandler}>
        <span className="cart-icon"><CartIcon/></span>
        <span>Cart</span>
        <span className="cart-badge">{numberOfCartItems}</span>
    </button>
  )
}

export default CartButton