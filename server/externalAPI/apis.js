const keys = require('../config/keys');
const https = require('https');

const getGoogleURL = (key, location) => `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`;
const getDarkSkyURL = (key, {lat, lng}, time) => `https://api.darksky.net/forecast/${key}/${lat},${lng},${time}?exclude=hourly,daily,minutely,flags`;

//https://api.darksky.net/forecast/${key}/${lat},${lng}
//https://api.darksky.net/forecast/${KEY}/${LAT},${LNG},${TIME}?exclude=hourly,daily,flags

const callAPI = (URL) => {
    return new Promise((resolve, reject) => {
        https.get(URL, (response) => {
            let data = '';
            response.on('data', chunk => {
                data += chunk;
            })
            response.on('end', () => {                    
                resolve(JSON.parse(data))
            })
        }).on("error", (err) => {reject(JSON.parse(err))})
    })
}

const callGoogleAPI = (location) => {
    const googleURL = getGoogleURL(keys.GOOGLE_KEY, location);
    console.log(googleURL)
    if (location && googleURL) {
        return callAPI(googleURL);
    }
}
const callDarkSkyAPI = (coords, time) => {    
    const darkSkyURL = getDarkSkyURL(keys.DARKSKY_KEY, coords, time);
    console.log(darkSkyURL)
    if (coords) {
        return callAPI(darkSkyURL);
    }   
}
 

module.exports = {callGoogleAPI, callDarkSkyAPI}