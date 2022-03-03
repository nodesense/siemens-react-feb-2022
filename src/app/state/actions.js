// action creators/helpers
// which create actions 

import * as ActionTypes from './action-types';

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
