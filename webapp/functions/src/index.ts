import * as functions from 'firebase-functions';
var stripe = require("stripe")("sk_test_S7Loq3tAxXM74i4xQjM9z0Cj");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  const token = request.body.stripeToken; // Using Express
  const amount = request.body.amount
  const charge = stripe.charges.create({
    amount: amount,
    currency: 'usd',
    description: 'Example charge',
    source: token,
  }).then((charge)=>{
    response.send(charge);
  });
});
