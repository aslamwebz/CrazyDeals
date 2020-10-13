import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useHistory } from "react-router-dom";

import CardSection from './CardSection';
import Axios from 'axios';
import Swal from 'sweetalert2';

export default function CheckoutForm({ total }) {
    const history = useHistory()

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make  sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);

        if (result.error) {
            // Show error to your customer.
            console.log(result.error.message);
        } else {
            // Send the token to your server.
            // This function does not exist yet; we will define it in the next step.
            stripeTokenHandler(result.token);
        }
    };

    function stripeTokenHandler(token) {
        const paymentData = { token: token.id };

        // Use fetch to send the token ID and any other payment data to your server.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        // const response = await fetch('/api/charge', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(paymentData),
        // });

        // // Return and display the result of the charge.
        // return response.json();

        Axios.post('/api/payment', { token: token.id, amount: total })
            .then(res => {
                console.log(res.data);

            })

        Swal.fire({
            title: 'Payment Completed Succesfully.',
            width: 600,
            padding: '3em',
            background: '#fff url(/images/trees.png)',
            backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
        })
        const cart = []
        localStorage.setItem('cart', JSON.stringify(cart))
        history.push('/')



    }

    return (
        <form onSubmit={handleSubmit}>
            <CardSection />
            <button disabled={!stripe}>Confirm order</button>
        </form>
    );
}