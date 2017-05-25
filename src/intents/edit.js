/**
 * Created by Dominic on 5/18/2017.
 */
"use strict";
exports.editZVolSize = {
    value: 'edit:ZvolSize',
    intents: [
        'edit:volSize increase size {size} in {unit} for {name} from {volumeName}',
        'increase zvolume size {size} in {unit} for {name} from {volumeName}',
        'increase zvol size {size} in {unit} for {name} from {volumeName}',
        'increase zvol {name} size {size} in {unit} from {volumeName}',
        'increase zvol {name} size {size}',
        'increase zvol {name} size {size} in {unit}',
        'edit:zvolSize increase {size} in {unit}',
        'increase zvolume {name} of size {size} in {unit}',
        'edit:zvolSize increase {name} of size {size} in {unit}',
        'edit:ZvolSize:size {size}',
        'edit:ZvolSize:unit {unit}',
        'edit:ZvolSize:size {size} in {unit}',
        'less space {name} from {volumeName}'
    ],
    reply: "Okies, changing size of zvolume for you",
    intentsValues: ['name', 'size', 'unit', 'volumeName'],
    requiredValues: ['name', 'size', 'unit', 'volumeName']
};
exports.editDataSetSize = {
    value: 'edit:DSSize',
    intents: [
        'edit:DSSize increase size {size} in {unit} for {name}',
        'increase size {size} in {unit} for DataSet {name}',
        'edit:DSSize increase {size} in {unit}',
        'increase DataSet {name} size {size} in {unit}',
        'edit:DSSize increase {name} size {size} in {unit}',
    ],
    reply: "Okies, changing size of DataSet for you",
    intentsValues: ['name', 'size', 'unit'],
    requiredValues: ['name', 'size', 'unit']
};
