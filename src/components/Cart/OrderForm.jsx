
import { useRef, useState } from "react";

const emptyInput = input => input.trim() === '';
const elevenDigits = input => input.trim().length === 11;
const isValidEmail = input => {
    var re =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(input.toString().toLowerCase());
}

const OrderForm = ({onConfirm, onCancel}) => {

    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const phoneInputRef = useRef();
    const emailInputRef = useRef();

    const [validInput, setValidInput] = useState({
         names:true,
         address: true,
         phone: true,
         email:true,
    })

    


    const submitOrderHandler = e => {
        e.preventDefault();

    const inputName = nameInputRef.current.value;
    const inputAddress = addressInputRef.current.value;
     const inputEmail = emailInputRef.current.value;
    const inputPhone = phoneInputRef.current.value; 
   
 

    const validName = !emptyInput(inputName);
    const validAddress = !emptyInput(inputAddress);
    const validEmail = isValidEmail(inputEmail);
    const validPhone = elevenDigits(inputPhone);


    setValidInput({
        names:validName,
        address:validAddress,
        email:validEmail,
        phone:validPhone,
    })

    if(!validName && !validAddress && !validEmail && !validPhone) {
      return;
    }
      onConfirm({
         name:inputName,
         address: inputAddress,
         phone: inputPhone,
         email: inputEmail,
       })
    };

  return (
    <form onSubmit={submitOrderHandler} className="order-form">
        <div className="control">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef}/>
            {!validInput.names && <p className="form-error">Please enter a valid Name !</p>}
        </div>

         <div className="control">
            <label htmlFor="address">Full Address</label>
            <input type="text" id="address" ref={addressInputRef}/>
            {!validInput.address && <p className="form-error">Please enter a valid Address !</p>}
        </div>

        <div className="control">
            <label htmlFor="phone">Phone (+234)</label>
            <input type="text" id="phone" ref={phoneInputRef}/>
            {!validInput.phone && <p className="form-error">Please enter a valid Phone Number !</p>}
        </div>

        <div className="control">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" ref={emailInputRef}/>
            {!validInput.email && <p className="form-error">Please enter a valid Email !</p>}
        </div>

        <div className="controls">  
        <button type='button' className="cancel-btn" onClick={onCancel}>Cancel</button>    
        <button className="confirm-btn">Confirm</button>
        
        </div>
    </form>
  )
}

export default OrderForm