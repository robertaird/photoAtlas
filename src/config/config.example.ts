export const GOOGLE_MAP_KEY = 'YOUR_GOOGLE_MAP_API_KEY';
export const INSTAGRAM_ID = 'YOUR_INSTAGRAM_APP_ID';
export const REDIRECT_URI = 'http://localhost:4200/map/'; // ! You should change this
export const INSTAGRAM_URI =
  `https://api.instagram.com/oauth/authorize/?client_id=${INSTAGRAM_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const GOOGLE_MAPS_URI = `https://maps.google.com/maps/api/js?key=${GOOGLE_MAP_KEY}`;
