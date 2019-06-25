const passport = require('passport');
const User = require('../models/user');
const githubStrategy = require('./github');
const googleStrategy = require('./google');
const twitterStrategy = require('./twitter');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (error, user) => {
    done(error, user);
  });
});

passport.use(githubStrategy);
passport.use(googleStrategy);
passport.use(twitterStrategy);

module.exports = passport;