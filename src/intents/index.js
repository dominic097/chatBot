/**
 * Created by Dominic on 5/11/2017.
 */
"use strict";
var create_1 = require('./create');
var delete_1 = require('./delete');
var social_1 = require('./social');
var edit_1 = require('./edit');
exports.intends = [create_1.createVol, create_1.createZVol, create_1.createDataSet, delete_1.deleteDataSet, delete_1.deleteVol, social_1.socHi, social_1.socName, social_1.socHow, edit_1.editDataSetSize, edit_1.editZVolSize];
exports.intendsObj = {
    'create:zvol': create_1.createZVol,
    'create:vol': create_1.createVol,
    'create:Dataset': create_1.createDataSet,
    'delete:zvol': delete_1.deleteDataSet,
    'delete:dataset': delete_1.deleteVol,
    'social:hi': social_1.socHi,
    'social:name': social_1.socName,
    'social:how': social_1.socHow,
    'edit:DSSize': edit_1.editDataSetSize,
    'edit:ZvolSize': edit_1.editZVolSize
};
