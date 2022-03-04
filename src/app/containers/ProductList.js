import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ProductList from '../components/ProductList'
import * as actions from '../state/actions';

// ProductList needs 
// 1. products
// 2.  addToCart
// 3. life cycle method, that pull data from backend using thunk

// App component should have ProductList container 
const mapStateToProps = (state) => {
    return {
        products: state.cart.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            const item = {
                id: product.id,
                name: product.name,
                price: product.price,
                qty: 1
            }

            const action = actions.addItem(item)
            dispatch(action)
        },

        // when fetchProducts invoked from product list component, it will automatically dispatch
        // event
        fetchProducts: bindActionCreators(actions.fetchProducts, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);