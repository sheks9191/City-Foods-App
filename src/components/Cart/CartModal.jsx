import  ReactDOM from "react-dom";
import { useGeneralContext } from "../../context";

const Backdrop = () => {
  const {closeCartHandler} = useGeneralContext()
    return <div className="backdrop" onClick={closeCartHandler}/>
};

const ModalOverlay = ({children}) => {
    return (<div className="modal">
        <div className="content">
            {children}
        </div>
    </div>)
}

const portalModal = document.getElementById('modal');

const CartModal = ({children}) => {
  return (
      <>
      {ReactDOM.createPortal(<Backdrop/>, portalModal)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalModal)}  
      </>
    
  )
}

export default CartModal