// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// PureComponent class
// PureComponent already has shouldComponentUpdate implemented
// it compare nextpros with this.props, nextstate with this.state, return true or false based on data change
class CartItem extends PureComponent {
    constructor(props) {
        super(props);
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty

    // called ONLY ONCE, after mounting first time
    // making api call, set timer, subscribe data etc
    // access to dom reference
    componentDidMount() {
        console.log("cart item did mount")
    }

    // called after update post render
    componentDidUpdate() {
        console.log("cartItem componentDidUpdate ")
        // to set the scrool bar, set graph position in real dom directly
        // useful when real dom added/removed dynamically
    }

    // called before removing component, called ONCE
    // unsubscribe, stop pending api calls, stop timer
    componentWillUnmount() {
        console.log("cartItem component will unount")
    }
   
    render() {
        //removeItem, updateItem are callback function as passed from Cart component to CartList to CartItem as props
        let {item, removeItem, updateItem} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name} </td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => updateItem(item.id, item.qty + 1) }>
                        +1
                </button>    

                <button onClick={ () => updateItem(item.id, item.qty - 1) }>
                        -1
                </button>    
                <button onClick={ () => removeItem(item.id) }>
                        X
                </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}

export default CartItem;