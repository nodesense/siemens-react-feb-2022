import React from 'react'

import CartSummary from './CartSummary';
import CartList from './CartList';

import * as actions from '../state/actions';

// DEMO only code to understand redux usage in react project
// should use react-redux covered tomorrow
import store from '../state/store';

class Cart extends React.Component {
    constructor(props) {
        super(props) // if we write cons, mandatory to call super/base class const
  
    }

    addItem = (e) => {
        console.log("add item called ", e)
        const id = 10000 + Math.ceil(Math.random() * 100000 )
        const item =  {
            id, // {id: id}
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100 ),
            qty:  Math.ceil(Math.random() * 10 )
        }

        const action = actions.addItem(item)
        console.log("Action is ", action)
        store.dispatch(action)
    }
 

    emptyCart = () => {
        const action = actions.emptyCart()
        console.log("Action is ", action)
        store.dispatch(action)
    }

    // this function shall be called from CartItem as callback
    // we will send updateItem function as property to CartItem via CartList
    updateItem = (id, qty) => {
        const action = actions.updateItem(id, qty)
        console.log("Action is ", action)
        store.dispatch(action)
    }

    // this function shall be called from CartItem as callback
    // we will send removeItem function as property to CartItem via CartList
  
    removeItem = (id) => {
        const action = actions.removeItem(id)
        console.log("Action is ", action)
        store.dispatch(action)
    }

    refresh = () => {
        // call Cart component render,
        // Cart render shall call cart list, cart summary, cart item renders
        this.forceUpdate()
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe( () => {
            console.log("got susbcribe called")
            // forceUpdate will not call shouldComponentUpdate
            this.forceUpdate()
        })
    }

    componentWillUnmount() {
        console.log("Unsubscribe from store")
        this.unsubscribe()
        this.unsubscribe =  null
    }

    render() {
        console.log('Cart render')
        
        const state = store.getState()
        const {items, amount, totalItems} = state.cart

        return (
            <div>
                <h2>Cart</h2>
                <p> Items Count {totalItems}</p> 
                <p> amount {amount}</p>

                <button onClick={this.addItem} >Add Item</button> 
                <button onClick={this.emptyCart} >Empty Cart</button> 

                <button onClick={this.refresh} >Refresh</button> 

                <CartList items={items} updateItem={this.updateItem} removeItem={this.removeItem} />

                <CartSummary amount={amount} totalItems = {totalItems} />
            </div>
        )
    }
}

export default Cart;