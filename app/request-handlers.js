const redirect = require('../config/redirect.js');
const querystring = require('querystring');
const axios = require('axios');
const User = require('./models/user.js');
const Photos = require('./models/photo.js');

const imageRequest = (accessToken) => {
  axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`)
  .then(({ data }) => {
    const hasLocation = data
      .filter(photo => !!photo.location)
      .map((photo) => {
        if (photo.caption === null) {
          photo.caption = { text: undefined };
        }
        return photo;
      });
    Photos.savePhotos(hasLocation);
  })
  .catch(err => console.error(err));;
};

const authRequest = ({ code }, callback) => {
  const data = {
    code,
    client_id: process.env.INSTAGRAM_ID,
    client_secret: process.env.INSTAGRAM_SECRET,
    redirect_uri: redirect.url,
    grant_type: 'authorization_code',
  };
  axios.post('https://api.instagram.com/oauth/access_token', querystring.stringify(data))
    .then(({ data: { access_token, user } }) => {
      imageRequest(access_token);
      User.find({ id: user.id })
        .then((found) => {
          if (found.length === 0) {
            return User.createUser(user);
          }
          return found;
        })
        .then((newUser) => {
          callback(newUser);
        });
    })
    .catch(err => console.error('auth error', err));
};

module.exports.auth = authRequest;
