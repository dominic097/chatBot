/// <reference path="../typings/tsd.d.ts"/>
import {Request, Response} from "express";
var express = require('express');
var router = express.Router();
import {chatBot} from '../src/chatBot';
import {intendsObj} from '../src/intents/index';
import {config} from '../src/config';
var CryptoJS = require("crypto-js");

/* GET home page. */
router.get('/', function (req: Request, res: Response, next: Function) {
    res.render('index', {title: 'Express'})
});

router.get('/chat', function (req: Request, res: Response, next: Function) {
    console.log(req.query)
    chatBot.match(req.query.message.replace(/"/g, "").replace(/'/g, ""))
        .then(results => {
            if (results.best && results.best.hasOwnProperty('intent') && intendsObj.hasOwnProperty(results.best.intent)) {
                results['requiredValues'] = intendsObj[results.best.intent].requiredValues;
                results['response'] = intendsObj[results.best.intent].reply || '';
            }
            console.log(JSON.stringify(results));
            res.send(JSON.stringify(results));
        });
});

router.get('/login', function (req: Request, res: Response, next: Function) {
    console.log("Asdjhdsfj jhfjsdlfjei");
    console.log(req.query.email);
    if (config.userDB.hasOwnProperty(req.query.email) && config.userDB[req.query.email] === req.query.pwd) {
        res.send(JSON.stringify({status: true, userProfile: req.query.email}));
    }
    else {
        res.send(JSON.stringify({status: false, userProfile: req.query.email}));
    }
});

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
router.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));


// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });


module.exports = router;
