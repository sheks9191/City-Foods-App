
const reducer = (state, action) => {
    if(action.type === 'ADD_ITEM') {
       
        const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
        const existingCartIndex = state.items.findIndex(item => item.id === action.payload.id);
        const existingCartItem = state.items[existingCartIndex]

        let updatedItems;

        if(existingCartItem) {
         const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.payload.amount
          };
          updatedItems = [...state.items];
          updatedItems[existingCartIndex] = updatedItem;
        } else {
          updatedItems =  state.items.concat(action.payload); 
        }
        
        return {
            
            items:updatedItems,
            totalAmount:updatedTotalAmount
        
            }
    }

    if(action.type === 'REMOVE_ITEM') {
       const existingCartIndex = state.items.findIndex(item => item.id === action.payload);
       const existingCartItem = state.items[existingCartIndex]
       const updatedTotalAmount = state.totalAmount - existingCartItem.price
       let updatedItems
       if(existingCartItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.payload)
       }else {
        const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
        updatedItems = [...state.items];
        updatedItems[existingCartIndex] = updatedItem;
       }

       return {
         items: updatedItems,
         totalAmount: updatedTotalAmount
       }
    }

    if(action.type === 'CLEAR_ITEMS') {
        return {
          items:[],
    totalAmount:0,
        }
    }

  return (
    state
  )
}

export default reducer