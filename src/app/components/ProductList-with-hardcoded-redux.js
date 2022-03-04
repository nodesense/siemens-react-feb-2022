import React from 'react';

import axios from 'axios';

import store from '../state/store';
import { fetchProducts } from '../state/actions';
// DEMO CODE,we yet to use react-redux bridge

 

class ProductList extends React.Component {
    constructor(props) {
        super(props);

    }

    addToCart = (product) => {

    }

    
    addToFav = (product) => {
        
    }

    componentWillUnmount() {
        this.unsusbcribe()
    }

    componentDidMount() {
        
        this.unsusbcribe = store.subscribe( () => {
            // update retrived products on ui
            this.forceUpdate();
        })

        // this action is function, not an object
        const action = fetchProducts()
        console.log("action is ", action);
        // the action function shall be intercepted and invoked by thunk middleware
        // action function shall not be given to reducers
        store.dispatch(action)
        // axios.get("http://localhost:7070/api/products")
        //      .then (response => {
        //          this.setState({products: response.data})
        //      })

    }

    render() {
        console.log('ProductList render')
        const products = store.getState().cart.products;

        return (
            <div>
                <h2>Product List</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>+Cart</th>
                        <th>+Fav</th>
                    </tr>
                    {
                        products.map (product => (
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => this.addToCart(product)}>
                                      +Cart
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => this.addToFav(product)}>
                                      +Fav
                                    </button>
                                </td>
                                <td></td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        )
    }
}

export default ProductList;