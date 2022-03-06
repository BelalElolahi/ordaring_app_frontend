import {combineReducers} from 'redux';

import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import  {getAllPizzasReducer}  from './reducers/pizzaReducers';
import { cartReducer } from './reducers/cartReducer';
import { LoginUserReducer, registerUserReducer } from './reducers/userReducer';
import { placeOrderReducer } from './reducers/orderReducer';
const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    LoginUserReducer:LoginUserReducer,
    placeOrderReducer:placeOrderReducer
})

const cartItems = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
const currentUser = localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null
const initialState = {
    cartReducer:{
        cartItems:cartItems
    },
    LoginUserReducer:{
        currentUser:currentUser
    }
} 

const composedEnhancer= composeWithDevTools({});

const store = createStore(
    finalReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
    );


export default store
