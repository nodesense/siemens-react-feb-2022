import React from 'react'

import CartSummary from './CartSummary';
import CartList from './CartList';

// No redux specific code, all redux specific shall be moved to 
// react-redux container higher order component

function  Cart (props) {
        console.log('Cart render', props)
        
        // container component, container component  get items, amount, totalItems and pass
        // as props
        // container shall pass  addItem, emptyCart,  updateItem, removeItem as props
        const {items, amount, totalItems,  // values, object
                addItem, emptyCart, // functions
                updateItem, removeItem     // functions
            } = props

        return (
            <div>
                <h2>Cart</h2>
                <p> Items Count {totalItems}</p> 
                <p> amount {amount}</p>

                <button onClick={addItem} >Add Item</button> 
                <button onClick={emptyCart} >Empty Cart</button> 
 

                <CartList items={items} updateItem={updateItem} removeItem={removeItem} />

                <CartSummary amount={amount} totalItems = {totalItems} />
            </div>
        )
    }

Cart.defaultProps = {
    items: [],
    totalItems: 0,
    amount: 0
}

export default Cart;