const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c3bf786abd1ca8c8494246591d4937ef&query=' + latitude + ',' + longitude + '&units=m'
    request({url: url, json: true},(error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. It fells like ' + body.current.feelslike + ' degrees.' )
        }
    })
}

module.exports = forecast