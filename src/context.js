import React, { useState, useContext, useReducer} from "react";
import reducer from './reducer';


const AppContext = React.createContext();

const initialState = {
    items:[],
    totalAmount:0,
    
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [isCartOpen, setIsCartOpen] = useState(false);

    const [isOrder, setIsOrder] = useState(false);


    const openCartHandler = () => {
        setIsCartOpen(true);
    };

    const closeCartHandler = () => {
        setIsCartOpen(false);
    };

    const openOrderHandler = () => {
        setIsOrder(true)
    }

    const addItemToCart = item => {
        dispatch({type: 'ADD_ITEM', payload: item})
    };

    const removeItemFromCart = id => {
        dispatch({type: 'REMOVE_ITEM', payload: id})
    };

    const clearCartItems = () => {
        dispatch({type: 'CLEAR_ITEMS'})
    }

    const cartContext = {
        items:state.items,
        totalAmount:state.totalAmount,
        addItem:addItemToCart,
        removeItem: removeItemFromCart,
        clearItems: clearCartItems,
    }


    return (<AppContext.Provider value={{
        isCartOpen,
        isOrder,
        openCartHandler,
        closeCartHandler,
        openOrderHandler,
        cartContext
    }}>
        {children}
    </AppContext.Provider>)
}

export const useGeneralContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}