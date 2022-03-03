// CartList.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent

 class CartList extends Component {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    // control/decide whether render should be called or not based on data comparisons
    // if return value true, then render called, v.doms created, diff performed, and patches(changes) applied to real dom
    // if return value is false, no render called.
    shouldComponentUpdate(nextProps, nextState) {
        // nextNext is upcoming render
        console.log("CartList should component update next props", nextProps)
        // this.props passed for previous render
        console.log("CartList should component update this.props", this.props)

        console.log("nextProps.items != this.props.items", nextProps.items != this.props.items)

        return nextProps.items != this.props.items;
    }
    
    render() {
        console.log("CartList Render");

        let {items, removeItem, updateItem} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }

                    {
                        items.map ( item => <CartItem item={item} key={item.id} removeItem={removeItem} updateItem={updateItem}> </CartItem>)
                    }

                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}

export default CartList;