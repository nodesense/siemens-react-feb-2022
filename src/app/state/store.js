import {createStore, combineReducers, applyMiddleware} from 'redux';
import { loggerMiddleware } from './middlewares/loggerMiddleware';
import { cartReducer } from './reducers/cartReducer';
import thunk from 'redux-thunk';

 
const rootReducers = combineReducers({
    // state: reducerFunc
    cart: cartReducer
})

// Thunk middleware helpful to implement async code in react-redux application
// redux is sync framework
// redux-thunk adds middleware, that can do async code, ie API calls


// create store will rootReducers first to initialize,
// rootREducer shall call cartReducer to initiaze the state
const store = createStore(rootReducers, 
                            applyMiddleware(loggerMiddleware, thunk))

export default store;