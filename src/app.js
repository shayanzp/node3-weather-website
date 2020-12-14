const path = require('path')
const getWeather = require('./utils/getWeather')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const port = process.env.PORT || 3000
// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'weather ',
        name: 'shayan zarabadipour'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        message: 'node js is awesome',
        title: 'help ',
        name: 'shayan zarabadi pour'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'about me',
        name: 'shayan zarabadi pour'
    })
})

app.get('/weather', (req, res)=>{
    if (!req.query.address){
        return res.send({
            error: 'address must be provided'
        })
    }
     getWeather(req.query.address, (error, data) => {
         if (error){
             return res.send({error})
         }
         res.send(data)
    })
    // res.send({
    //     title: 'weather',
    //     location: 'qazvin',
    //     forecast: 'it is 50 degree',
    //     address: req.query.address,
    //     weather: response
    // })
})

app.get('/products', (req, res) => {

    if (!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        message: 'Help article not found',
        name: 'shayan zarabadi pour'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        message: 'PAGE NOT FOUND',
        name: 'shayan zarabadi pour',
    })
})

app.listen(port, () => {
    console.log('Server is up on port '+ port)
})