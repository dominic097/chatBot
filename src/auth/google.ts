/**
 * Created by dominic on 20/6/17.
 */

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
import {config} from '../config';


passport.use(new GoogleStrategy({
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
        callbackURL: "http://localhost:4300/auth/google/callback"
    },
    function (accessToken, refreshToken, profile, done) {
        console.log(arguments);
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //     return done(err, user);
        // });
    }
));