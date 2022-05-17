

const SingleCart = ({id, name, amount, price, onRemove, onAdd}) => {

    const singlePrice = `$${price.toFixed(2)}`;
  return (
     <li className='cart-item'>
      <div>
        <h4>{name}</h4>
        <div className='summary'>
          <span className='price'>{singlePrice}</span>
          <span className='amount'>x {amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
  
}

export default SingleCart