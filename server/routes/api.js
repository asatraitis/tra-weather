const {callGoogleAPI, callDarkSkyAPI} = require('../externalAPI/apis');

//const getGoogleURL = (key, location) => `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`

const initAPIRoutes = app => {    
    app.post('/API', (req, res) => {        
        const {location, date} = req.body
        let finalResponse = {};
        callGoogleAPI(location).then(googleResponse => {            
            if ((googleResponse || {}).status === 'OK') {
                const coords = googleResponse.results[0].geometry.location;
                finalResponse.location = googleResponse.results[0].formatted_address;                
                callDarkSkyAPI(coords, date).then(darkskyResponse => {
                    if (darkskyResponse && darkskyResponse.currently) {
                        const {icon, temperature} = darkskyResponse.currently;
                        finalResponse = {icon, temperature, date, ...finalResponse, status:"success"}
                        res.send(finalResponse); 
                    } else {
                        res.send({status: 'error', msg: 'Failed to get weather for location :('})
                    }
                }).catch(() => {
                    //handle fail darksky api call
                    res.send({status: 'error', msg: 'Failed to get weather for location :('})                    
                })
            } else {
                //handle failed google api search
                res.send({status: 'error', msg: 'Failed to google the location :('})
            }            
        }).catch(() => {
            res.send({status: 'error', msg: 'Failed to google the location :('})
            //handle fail from google api call
        })
        //res.send({msg: 'Pending auth route logic..'})
    })
}


module.exports = initAPIRoutes;