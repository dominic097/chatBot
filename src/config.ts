/**
 * Created by Dominic on 5/31/2017.
 */

export const config = {
    github: {
        clientID: 'get_your_own',
        clientSecret: 'get_your_own',
        callbackURL: "http://127.0.0.1:3000/auth/github/callback"
    },
    linkedin: {
        clientID: '81b04j6ndos3l6',
        clientSecret: 'PH2r0K7X8f7s4zs1',
        callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
    },
    google: {
        clientID: '54653359392-mvlo1o9d1gdimj1n1lerbke805jmuptu.apps.googleusercontent.com',
        clientSecret: 'GW2OLFE_g8LekReTHFLNLCNz',
        callbackURL: "http://127.0.0.1:3000/auth/google/callback"
    },
    twitter: {
        consumerKey: 'get_your_own',
        consumerSecret: 'get_your_own',
        callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
    },
    userDB: {
        'dominic@gmail.com': '160f817935b4dd9f72c1e88c699e5eded293bfb00c4febf5cf60f63956545ad7'
    },
    key: 'd4DQ%@^FDHWEZ5ZXCUWcg43za==-3'
};

export const mongoDb = {
    uri: "mongodb://localhost:27017/myPal"
}


