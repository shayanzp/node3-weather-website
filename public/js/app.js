fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then(( data ) => {
        console.log(data)
    })
})


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading ...'
    messageTwo.textContent = ''
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = ''
                messageTwo.textContent = 'the temperature is '+data.temperature+ 'Celsius degree and it feels like '+data.feelslike+' . the pressure is  '+ data.pressure+ '  . humidity is: '+ data.humidity+ ' . wind direction is: '+data.wind_dir+' .  wind speed is: '+data.wind_speed+' .'
            }
        })
    })
})
