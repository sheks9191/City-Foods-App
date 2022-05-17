import Input from "../../Shared/Input"
import { useRef } from "react";

const MenuForm = ({onAddToCart}) => {
  const inputRef = useRef()
  const submitHandler = e => {
    e.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredNumber = parseInt(enteredAmount);
    if(enteredAmount.trim().length === 0 || enteredNumber < 1 || enteredNumber > 10){
      return;
    }

    onAddToCart(enteredNumber);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
        <Input  ref={inputRef} label='Qty' input={{
      
          id:'Qty',
          type:'number',
          min:'1',
          max: '10',
          step: '1',
          defaultValue: '1',
          
        }}/>
        <button>+ Add</button>
    </form>
  )
}

export default MenuForm
