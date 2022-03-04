// action creators/helpers
// which create actions 

import * as ActionTypes from './action-types';
import axios from 'axios';

const API_END_POINT = process.env.REACT_APP_END_POINT
console.log("API_END_POINT", API_END_POINT)

// add item
// return a action object
// {type: '[cart addItem]', payload: {item: {id: 1, price: 100, qty: 1}}}
export const addItem = (item) => ({type: ActionTypes.ADD_ITEM_TO_CART, payload: {item}})
// remove item

//return // {type: '[cart removeItem]', payload: { id: 1} }
export const removeItem = (id) => ({type: ActionTypes.REMOVE_ITEM_FROM_CART, payload: {id}})

// update item 
export const updateItem = (id, qty) => ({type: ActionTypes.UPDATE_ITEM_IN_CART, payload: {id, qty}})

// emptyCart
export const emptyCart = () => ({type: ActionTypes.EMPTY_CART})


// initProducts
export const initProducts = (products) => ({type: ActionTypes.INIT_PRODUCTS, 
                                            payload: {products}})


// thunk
// thunk is useful to implement api calls/async code 
// in every other aspects, an action function, returns object for ex add item to cart, emptycart

// Thunk shall return a function instead of action object
// the returned function can implement async code
// we will be dispatching the action function to redux
// the thunk middleware shall check action type
// if the action is function, thunk middleware, call the function,
//  does not forward function to reducers

// to implement async in redux project

// es5
// action method, shall return a function instead of object
export function fetchProducts() {
    // this function below called by thunk middleware,
    return function(dispatch, getState) {
        console.log("async function called, get products api")

        axios.get( API_END_POINT + "/api/products")
            .then (response => {
                const products = response.data;
                console.log(products)
                // put the products into store
                // initProducts action is OBJECT
                const action = initProducts(products)
                dispatch(action)
            })
    }
}