var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');

module.exports = {
    development: {
        db: 'mongodb://localhost/mean-stack-local',
        root: rootPath,
        app: {
            name: 'MEAN - A Modern Stack - Development'
        },
        facebook: {
            clientID: "605199206190416",
            clientSecret: "b6634e221259a311ddf24ce4eb967c5f",
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },
        twitter: {
            clientID: "CONSUMER_KEY",
            clientSecret: "CONSUMER_SECRET",
            callbackURL: "http://localhost:3000/auth/twitter/callback"
        },
        github: {
            clientID: 'APP_ID',
            clientSecret: 'APP_SECRET',
            callbackURL: 'http://localhost:3000/auth/github/callback'
        },
        google: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/google/callback"
        }
    },
    test: {
        db: 'mongodb://meanadmin:21082013@paulo.mongohq.com:10040/app18023826',
        root: rootPath,
        app: {
            name: 'MEAN - A Modern Stack - Test'
        },
        facebook: {
            clientID: "222594327896286",
            clientSecret: "6561fb91f258fc737009d442b75a4337",
            callbackURL: "http://serene-thicket-8634.herokuapp.com/auth/facebook/callback"
        },
        twitter: {
            clientID: "CONSUMER_KEY",
            clientSecret: "CONSUMER_SECRET",
            callbackURL: "http://localhost:3000/auth/twitter/callback"
        },
        github: {
            clientID: 'APP_ID',
            clientSecret: 'APP_SECRET',
            callbackURL: 'http://localhost:3000/auth/github/callback'
        },
        google: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/google/callback"
        }
    },
    production: {
        db: 'mongodb://localhost/mean',
        root: rootPath,
        app: {
            name: 'MEAN - A Modern Stack - Production'
        },
        facebook: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },
        twitter: {
            clientID: "CONSUMER_KEY",
            clientSecret: "CONSUMER_SECRET",
            callbackURL: "http://localhost:3000/auth/twitter/callback"
        },
        github: {
            clientID: 'APP_ID',
            clientSecret: 'APP_SECRET',
            callbackURL: 'http://localhost:3000/auth/github/callback'
        },
        google: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/google/callback"
        }
    }
};