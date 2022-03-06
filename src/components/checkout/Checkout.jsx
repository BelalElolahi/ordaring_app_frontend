import React from 'react';
import './checkout.css';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../../actions/orderAction';

const stripeKey = process.env.STRIPE_KEY;

export default function Checkout({ subTotal }) {
    const dispatch = useDispatch()

    function tokenHandler(token){
        console.log(token)
        dispatch(placeOrder(token,subTotal));
    }
    return (
        <StripeCheckout
        amount={subTotal*100}
        shippingAddress
        token={tokenHandler}
        stripeKey={stripeKey}
        currency="USD"
        >
            <button className='btn'>Pay Now</button>
        </StripeCheckout>
    )
}

