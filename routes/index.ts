/// <reference path="../typings/tsd.d.ts"/>
import {Request, Response} from "express";
var express = require('express');
var router = express.Router();
import {chatBot} from '../src/chatBot';
import { intendsObj } from '../src/intents/index';

/* GET home page. */
router.get('/', function (req: Request, res: Response, next: Function) {
    res.render('index', {title: 'Express'})
});

router.get('/chat', function (req: Request, res: Response, next: Function) {
    console.log(req.query)
    chatBot.match(req.query.message.replace(/"/g, "").replace(/'/g, ""))
        .then(results => {
            if(results.best && results.best.hasOwnProperty('intent') && intendsObj.hasOwnProperty(results.best.intent)) {
                results['requiredValues'] = intendsObj[results.best.intent].requiredValues;
                results['response'] = intendsObj[results.best.intent].reply || '';
            }
            console.log(JSON.stringify(results));
            res.send(JSON.stringify(results));
        });
});

router.get('/login', function (req: Request, res: Response, next: Function) {
    console.log(req.query)
    res.sendFile('login_success.html', {root: __dirname });
});

module.exports = router;
