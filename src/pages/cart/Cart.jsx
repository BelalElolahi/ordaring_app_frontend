import React from 'react'
import './cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, deleteFromCarte } from '../../actions/cartActions';
import Checkout from '../../components/checkout/Checkout';


export default function Cart() {
  const cartState = useSelector(state => state.cartReducer);
  const cartItems = cartState.cartItems
  const subTotal = cartItems.reduce((price,item)=> price + item.price , 0)
   const dispatch = useDispatch();

  return (
    <div>
      <div className='row justify-content-center'>
        <div className="col-md-6">
          <h2 className='cartTitle'>My Cart</h2>

          {cartItems.map(item => {
            return <div className="flex-container">
              <div className="text-left m-1 w-100">
                <h1>{item.name} [{item.varient}]</h1>
                <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                <h1 className='cartQuantity'>Quantity  </h1> 
                <i className="fas fa-plus" onClick={()=>{dispatch(addToCart(item , item.quantity+1 , item.varient))}}></i>
                 <b>{item.quantity}</b>
                <i className="fas fa-minus" onClick={()=>{dispatch(addToCart(item , item.quantity-1,item.varient))}} ></i>
                <hr />
              </div>
              <div className="cartImageContainer m-1 w-100">
                <img className='cartImage' src={item.image} alt="" />
              </div>
              <div className="cartTrash m-1 w-100 mt-5">
              <i className="fas fa-trash" onClick={()=>{dispatch(deleteFromCarte(item))}}></i>
              </div>
            </div>
          })}
        </div>
        
        <div className="col-md-4">
        <h2 className='cartTitle'>subTotal = {subTotal} /-</h2>
         <Checkout subTotal={subTotal}/>          
        </div>
      </div>
    </div>
  )
}
