"use strict";
var express = require('express');
var router = express.Router();
var chatBot_1 = require('../src/chatBot');
var index_1 = require('../src/intents/index');
var config_1 = require('../src/config');
var CryptoJS = require("crypto-js");
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/chat', function (req, res, next) {
    console.log(req.query);
    chatBot_1.chatBot.match(req.query.message.replace(/"/g, "").replace(/'/g, ""))
        .then(function (results) {
        if (results.best && results.best.hasOwnProperty('intent') && index_1.intendsObj.hasOwnProperty(results.best.intent)) {
            results['requiredValues'] = index_1.intendsObj[results.best.intent].requiredValues;
            results['response'] = index_1.intendsObj[results.best.intent].reply || '';
        }
        console.log(JSON.stringify(results));
        res.send(JSON.stringify(results));
    });
});
router.get('/login', function (req, res, next) {
    console.log("Asdjhdsfj jhfjsdlfjei");
    console.log(req.query.email);
    if (config_1.config.userDB.hasOwnProperty(req.query.email) && config_1.config.userDB[req.query.email] === req.query.pwd) {
        res.send(JSON.stringify({ status: true, userProfile: req.query.email }));
    }
    else {
        res.send(JSON.stringify({ status: false, userProfile: req.query.email }));
    }
});
module.exports = router;
