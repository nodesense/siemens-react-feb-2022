import React from 'react'

import CartSummary from './CartSummary';
import CartList from './CartList';


class Cart extends React.Component {
    constructor(props) {
        super(props) // if we write cons, mandatory to call super/base class const

        const items = []
        for (let i = 0; i < 1000; i++) {
            const id = i
            const item =  {
                id, // {id: id}
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100 ),
                qty:  Math.ceil(Math.random() * 10 )
            }

            items.push(item)
        }
        // keyword
        // state is owned by component
        // state can be mutated via setState function
        this.state = {
            amount: 0,
            totalItems: 0,
            items : items,
            //items: []
        }
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

        // state can be muted by using setState
        // this will trigger render function
        this.setState({
            // immutable list, clone existing items, add new item to end 
            items: [...this.state.items, item]
        })

    }

    // we need to calcualte derived state
    // if there is state change, there might calculation, to be reperformed
    // add item, remove item, update item, empty cart will have impact on amount, totalItems
    // get called before first render on creation/mouting stage
    // get called during update state, subsequent render
    static getDerivedStateFromProps (props, state) {
        // write a logic that impact derived properites like amount, totalItems
        console.log('Cart getDerivedStateFromProps called')
        let a = 0, count = 0;
        for (let item of state.items) {
            a += item.qty * item.price
            count += item.qty
        }

        // return new derived state data members, this will be merged with this.state
        return {
            amount: a,
            totalItems: count
        }
    }

    emptyCart = () => {
            // after setState, render shall be called
            // before render getDerivedStateFromProps shall be called
            // getDerivedStateFromProps calculate amount, totalItems
            this.setState({
                items: []
            })
    }

    // this function shall be called from CartItem as callback
    // we will send updateItem function as property to CartItem via CartList
    updateItem = (id, qty) => {
        console.log("updateItem ", id, qty)
        // two updates should be updated immutable way
        // the this.state.items is an array to be updated with the actual item which is object {id, price, qty, name}
        // we update the item property, but the item should be immutable
        //we clone item ...item which is {id, price, qty, name} then update qty with latest one

        // item.id == id ? {...item, qty: qty}  we want to update the quantity only if item.id = id
        // otherwise return item as is : item
        const items = this.state.items.map (item =>  item.id == id ? {...item, qty: qty} : item)
        this.setState({items}) // items: items
    }

    // this function shall be called from CartItem as callback
    // we will send removeItem function as property to CartItem via CartList
  
    removeItem = (id) => {
        console.log("removeItem ", id)
        // amount, totalItems are updated by getDerivedStateFromProps
        this.setState({
            items: this.state.items.filter(item => item.id != id)
        })
    }

    refresh = () => {
        // call Cart component render,
        // Cart render shall call cart list, cart summary, cart item renders
        this.forceUpdate()
    }

    render() {
        console.log('Cart render')
        return (
            <div>
                <h2>Cart</h2>
                <p> Items Count {this.state.totalItems}</p> 
                <p> amount {this.state.amount}</p>

                <button onClick={this.addItem} >Add Item</button> 
                <button onClick={this.emptyCart} >Empty Cart</button> 

                <button onClick={this.refresh} >Refresh</button> 

                <CartList items={this.state.items} updateItem={this.updateItem} removeItem={this.removeItem} />

                <CartSummary amount={this.state.amount} totalItems = {this.state.totalItems} />
            </div>
        )
    }
}

export default Cart;