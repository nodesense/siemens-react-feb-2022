import * as ActionTypes from '../action-types';

const INITIAL_STATE = {
    amount: 0,
    totalItems: 0,
    items: []
}

// TODO: memorized function
const getAmountAndTotalItems = (items) => {
    let a = 0, count = 0;
    for (let item of items) {
        a += item.qty * item.price
        count += item.qty
    }

    // return new derived state data members, this will be merged with this.state
    return {
        amount: a,
        totalItems: count
    }
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    console.log('cartReducer called ', state, action)

    switch (action.type) {
        case ActionTypes.ADD_ITEM_TO_CART: {
            const items = [...state.items, action.payload.item]
            const {amount, totalItems} = getAmountAndTotalItems(items)
            return {
                ...state,
                // new state
                items, 
                amount, 
                totalItems
            }
        }
        case ActionTypes.UPDATE_ITEM_IN_CART: {
            const items =  state.items.map (item =>  item.id == action.payload.id ? {...item, qty: action.payload.qty} : item)
            const {amount, totalItems} = getAmountAndTotalItems(items)
            return {
                ...state,
                // new state
                items, 
                amount, 
                totalItems
            }
        }
        case ActionTypes.REMOVE_ITEM_FROM_CART: {
            const items =  state.items.filter(item => item.id != action.payload.id)
            const {amount, totalItems} = getAmountAndTotalItems(items)
            return {
                ...state,
                // new state
                items, 
                amount, 
                totalItems
            }
        }
        case ActionTypes.EMPTY_CART: {
            const items =  []
            const {amount, totalItems} = getAmountAndTotalItems(items)
            return {
                ...state,
                // new state
                items, 
                amount, 
                totalItems
            }
        }
        default: 
            return state
    }
}