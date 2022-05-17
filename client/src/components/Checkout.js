import React from "react";
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderActions";

export default function Checkout({subtotal}) {

const dispatch=useDispatch()
    function tokenHander(token)
    {
        console.log(token);
        dispatch(placeOrder(token,subtotal))

    }

    return (
        <div>

        <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token={tokenHander}
        stripeKey='pk_test_51KzJIkKaYhN5n8ArBNiUa9JbzIhWNPiEmzAKA21Duvcc2nayqklCHZnhBKil4inS1rTEx109MxwzW5jPaNyqFf7O00GTmQUnYF'
        currency='RON'
        
        >
        <button className="btn">
         Pay Now
        </button>

        </StripeCheckout>
        </div>
    )
}
