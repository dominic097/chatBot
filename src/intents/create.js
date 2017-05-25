/**
 * Created by Dominic on 5/11/2017.
 */
"use strict";
exports.createVol = {
    value: 'create:vol',
    intents: [
        'create vol ',
        'create partition ',
        'create volume ',
        'create:vol:disk {disk}',
        '{pointer}, create volume {name}',
        'create vol  {name} from {disk}',
        'create vol  {name}  from {disk}. type {type}',
        'create:vol:name {name}',
        'create:vol:type {type}',
        'create:vol:disk {disk}'
    ],
    intentsValues: ['name', 'type', 'pointer', 'disk'],
    requiredValues: ['type', 'name', 'disk'],
    reply: "alright !!!, Creating volume for you :)"
};
exports.createDataSet = {
    value: 'create:Dataset',
    intents: [
        'create dataset {name}',
        'create dataset',
        'create:dataset:volumeName {volumeName}',
        'create:dataset:name {name}',
        'create dataset  from {volumeName}',
        '{pointer}, create dataset {name}',
        'create dataset {name} from {volumeName}'
    ],
    intentsValues: ['name', 'volumeName', 'pointer'],
    requiredValues: ['volumeName', 'name'],
    reply: "alright !!!, Creating Dataset for you :)"
};
exports.createZVol = {
    value: 'create:zvol',
    intents: [
        'create zvol ',
        'create partition ',
        'create zvolume ',
        'create:zvol:size {size} in {unit}',
        'create:zvol:size {size}',
        'create:zvol:unit {unit}',
        'create:zvol:name {name}',
        'create:zvol:volumeName {volumeName}',
        'create zvol  {name} of {size} in {unit} from {volumeName}',
        'create partition  {name} of {size} in {unit} from {volumeName}',
        'create zvolume  {name} of {size} in {unit} from {volumeName}',
        '{pointer}, create zvolume {name} of {size} {unit} from {volumeName}',
    ],
    intentsValues: ['size', 'unit', 'name', 'pointer', 'volumeName'],
    requiredValues: ['size', 'unit', 'name', 'volumeName'],
    reply: "alright !!!, Creating Zvolume for you :)"
};
