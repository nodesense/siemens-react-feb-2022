import {connect} from 'react-redux';

// bindActionCreators shall bind dispatch method with action creator create a bound method
// so that calling the bound method, it will call action creator automatically
// and also dispatch the action automatically
import {bindActionCreators} from 'redux';

import Cart from '../components/Cart'; 

import * as actions from '../state/actions';
// Bridge code, involve react and redux

// we need to get items, amount, totalItems from store/state and 
// pass to Cart component as props
// state = store.getState()
// this function is invoked by container componnet on every subscribe
// return the props needed for Cart Component
// whatever we return here, passed as props to component
const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
        amount: state.cart.amount, 
        totalItems: state.cart.totalItems
    }
}

// we need to get addItem, updateItem, removeItem, emptyCart functions to
// Cart component properties
// dispatch is passed this function from container
const mapDispatchToProps = (dispatch, getState) => {
    return {
        // addItem is called from Cart component on Add Item button click
        // custom logic, bindActionCreators won't be suitable
        addItem: () => {
            const id = 10000 + Math.ceil(Math.random() * 100000 )
            const item =  {
                id, // {id: id}
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100 ),
                qty:  Math.ceil(Math.random() * 10 )
            }

            // from container component we will dispatch to store
            const action = actions.addItem(item)
            dispatch(action)
        },
        
        // by calling updateItem/bound method, it automatically display action to store
        updateItem: bindActionCreators(actions.updateItem, dispatch),
        removeItem: bindActionCreators(actions.removeItem, dispatch),
        emptyCart: bindActionCreators(actions.emptyCart, dispatch)
    }
}

// let us create container component that 
// put together, Cart, mapStateToProps, mapDispatchToPRops and store
// store shall be passed from react context by a component called Provider
// Provider shall passs store to Container component as react context
// wraps our Cart component as parent
const CartContainer = connect(mapStateToProps, mapDispatchToProps) (Cart)
// in App component, we should use CartContainer not Cart
// export default, mean while importing we can use any alias name
export default CartContainer;