/**
 * Created by Dominic on 5/11/2017.
 */

var ecolect = require('ecolect');
var en = require('ecolect/language/en');
var any = require('ecolect/values/any');


import {intends} from './intents/index';

export var chatBot = ecolect.intents(en)
intends.forEach((it) => {
    chatBot = chatBot.intent(it.value);
    if(it.hasOwnProperty('intentsValues')) {
        it.intentsValues.forEach((rv)=> {
            chatBot = chatBot.value(rv, any());
        });
    }
    it.intents.forEach((_its)=>{
        chatBot = chatBot.add(_its);
    });
    chatBot =chatBot.done();
});

chatBot = chatBot.build();
