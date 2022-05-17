import { useState } from "react";
import {useGeneralContext } from "../../context";
import CartModal from "./CartModal";
import SingleCart from "./SingleCart";
import OrderForm from "./OrderForm";
import Loading from "../Loading";



const CartItem = () => {
    const {closeCartHandler, isOrder, openOrderHandler, cartContext} = useGeneralContext();
     const [loading, setLoading] = useState(false)
    const [submitConfirmation, setSubmitConfirmation] = useState(false);
    
    const total = `$${cartContext.totalAmount.toFixed(2)}`;
    const availableMeals = cartContext.items.length > 0;

    const removeItemHandler = id => {
      cartContext.removeItem(id)
    };
    const addItemHandler = item => {
      cartContext.addItem({...item, amount: 1})
    };

    const addOrderHandler = async (userData) => {
     
      setLoading(true)
    await fetch('https://city-foods-c4c09-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems:cartContext.items
        }), 
        headers: {
          'Content-Type': 'application/json'
        }
      })

        setLoading(false);
        setSubmitConfirmation(true);
        cartContext.clearItems();
    }  

   
    const cartItems = ( <ul className="cart-items">
        
        {cartContext.items.map((item) => (
        <SingleCart key={item.id} {...item} onRemove={removeItemHandler.bind(null, item.id)} onAdd={addItemHandler.bind(null, item)}/>
    ))}
    </ul>
    
    );

    const modalContent = <>

          {cartItems}
        <div className="total">
            <span>Total Amount</span>
            <span>{total}</span>
        </div>
        {isOrder && <OrderForm onConfirm={addOrderHandler} onCancel={closeCartHandler}/>}
        {!isOrder && 
        <div className="controls">
            <button className="close-btn" onClick={closeCartHandler}>Close</button>
            {availableMeals && <button className="order-btn" onClick={openOrderHandler}>Order</button>}
        </div>}
   
    </>

  
    const confirmationMessages = <div>
      <p className="confirmation">Your order has been sent sucessfully !!!. Thanks for your patronage.</p>
      <button className="confirm-btn" onClick={closeCartHandler}>Close</button>
    </div>
      
     
     

  return (
    <CartModal>
      {!loading  && !submitConfirmation && modalContent}
      {loading && <Loading/>}
      {!loading && submitConfirmation && confirmationMessages}   
    </CartModal>    
  )
}

export default CartItem