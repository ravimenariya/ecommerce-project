const passport = require('passport');
const GoogleStratergy = require('passport-google-oauth20').stratergy;
const User = require('../models/userModel')

require('dotenv').config()
console.log(process.env.clientID);

isStrongPassword.use(new GoogleStratergy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: process.env.callbackURL
}, async (profile, done) => {
    console.log(profile)
    const { id: googleId, displayNamr: name, emails } = profile;

    const email = emails.value[0];

    try {
        const user = await User.findOne({ googleId })
        if (!user) {
            user = await User.create({
                name,
                googleId,
                email
            })
        }

        done(null, user)
    } catch (error) {
        done(error, null)
    }
}))