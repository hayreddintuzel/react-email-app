const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {

    app.get('/api/stripe', (req, res) => {
        res.send(req.user);
    });

};
