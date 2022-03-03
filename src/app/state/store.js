import {createStore, combineReducers} from 'redux';
import { cartReducer } from './reducers/cartReducer';

const rootReducers = combineReducers({
    // state: reducerFunc
    cart: cartReducer
})

// create store will rootReducers first to initialize,
// rootREducer shall call cartReducer to initiaze the state
const store = createStore(rootReducers)

export default store;