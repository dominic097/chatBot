/**
 * Created by Dominic on 5/11/2017.
 */
"use strict";
var ecolect = require('ecolect');
var en = require('ecolect/language/en');
var any = require('ecolect/values/any');
var index_1 = require('./intents/index');
exports.chatBot = ecolect.intents(en);
index_1.intends.forEach(function (it) {
    exports.chatBot = exports.chatBot.intent(it.value);
    if (it.hasOwnProperty('intentsValues')) {
        it.intentsValues.forEach(function (rv) {
            exports.chatBot = exports.chatBot.value(rv, any());
        });
    }
    it.intents.forEach(function (_its) {
        exports.chatBot = exports.chatBot.add(_its);
    });
    exports.chatBot = exports.chatBot.done();
});
exports.chatBot = exports.chatBot.build();
