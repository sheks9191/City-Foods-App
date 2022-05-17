import MenuForm from "./MenuForm"
import { useGeneralContext } from "../../context"
const MenuItem = ({id,url,text, price}) => {
  const {cartContext} = useGeneralContext();

     const priceAmount = `$${price.toFixed(2)}`
     const addToCartHandler = amount => {
       cartContext.addItem({
         id: id,
         name:text,
         amount:amount,
         price:price,
       })
     }
  return (
    <div className="menu-item">
        <img src={url} alt={text} />
            <div className="menu-info">
                <h4>{text}</h4>
                <span>{priceAmount}</span>
            </div>
            <div>
                <MenuForm onAddToCart ={addToCartHandler}/>
            </div>
    </div>
  )
}

export default MenuItem