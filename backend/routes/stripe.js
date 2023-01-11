const express = require("express");
const Stripe = require("stripe");

require('dotenv').config();

const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post('/create-checkout-session', async (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    const session = await stripe.checkout.session.create({
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'T-shirt',
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            }
        ],
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/checkout-success`,
        cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    router.get("/create-checkout-session", (req, res) => {
        res.send("Welcome to our online shop API..."); 
      });

    res.send({url: session.url});
});

module.exports = router;