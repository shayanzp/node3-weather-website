const request = require('request')

const getWeather = ( address, callback )=>{
    const url = 'http://api.weatherstack.com/current?access_key=17167c96aeea9045b4f053e98813e430&query='+address+'&units=m'
    request({ url, json: true }, ( error, response ) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(response.body.error) {
            callback('Unable to find the location!', undefined)
        } else {
            const data = response.body.current
            callback(undefined, data)
        }

    })

}

module.exports = getWeather