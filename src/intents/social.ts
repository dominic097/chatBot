/**
 * Created by Dominic on 5/18/2017.
 */

export const socHow = {
    value: 'social:how',
    intents: [
        'Hi, how are you',
        'Hi, how are u'
    ],
    reply: "I'am Fine :)",
    intentsValues: [],
    requiredValues: []
};

export const socHi = {
    value: 'social:hi',
    intents: [
        'Hi',
        'Hi, '
    ],
    reply: "Hi, I'm Chuck :). How may I help you",
    intentsValues: [],
    requiredValues: []
};

export const socName = {
    value: 'social:name',
    intents: [
        'what your name ?',
        ' name ?',
        'ur name ?',
        'Hi, i am {name}',
        'Hi, i\'am {name}',
        'Hi, i\'m {name}'
    ],
    reply: "I'm Chuck",
    intentsValues: ['name'],
    requiredValues: []
};
