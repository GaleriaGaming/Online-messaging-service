const express = require('express')
const router = express.Router();

const home = require('../controllers/home');
const oauth = require('../controllers/oauth');
const messages = require('../controllers/messages');

const { isAuthenticated } = require('../helpers/auth');


module.exports = app => {

    router.get('/', home.index);
    
    router.get('/about', home.about);

    router.get('/oauth/signup', oauth.signup);

    router.post('/oauth/signup', oauth.signupdata);

    router.get('/oauth/signin', oauth.signin);
    
    router.post('/oauth/signin', oauth.signindata);

    router.get('/oauth/logout', isAuthenticated, oauth.logout);

    router.get('/messages/dm', isAuthenticated, messages.dm);

    router.post('/messages/dm', isAuthenticated, messages.dmmessage);

    app.use(router);

};