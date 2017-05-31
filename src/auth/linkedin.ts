/**
 * Created by Dominic on 5/31/2017.
 */
var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin');
import {config} from './../config';

export function authenticateLinkeIn(cb) {
    passport.use(new LinkedInStrategy({
        consumerKey: config.linkedin.clientID,
        consumerSecret: config.linkedin.clientSecret,
        callbackURL: config.linkedin.callbackURL
    }, cb))
}