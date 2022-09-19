import axios from 'axios';
import React, { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51LjX9KIC4Kbvlo6w1gGwitRXa7FJ1B4XO7HmfGpDc3wVmEJgNJN7kmVn3ax2x2YfLDS5hIqIVWzXfzBq3Wa3we1E00y3lzRcI1";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000
                    }
                );
                console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        if (stripeToken) {
            makeRequest()
        }
    }, [stripeToken]);

  return (
      <div
          style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
          }}
      >
          <StripeCheckout
              name="Neel Store"
              image="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/travis-scott-album-cover-2016_omwibv/travis-scott-album-cover-2016"
              billingAddress
              shippingAddress
              description="Your total is $20"
              amount = {2000}
              token = {onToken}
              stripeKey={KEY}
            >
            <button
                style={{
                    border: "none",
                    width: 120,
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                }}
            >
                Pay Now
              </button>
          </StripeCheckout>
          
    </div>
  )
}

export default Pay
