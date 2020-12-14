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
    fetch('http://api.weatherstack.com/current?access_key=17167c96aeea9045b4f053e98813e430&query='+location+'&units=m').then((response) => {
        response.json().then((data) => {
            if (data.error){
                messageOne.textContent = data.error.info
            }else{
                messageOne.textContent = 'country: '+ data.location.country+' . local time: '+data.location.localtime
                messageTwo.textContent = 'tempreture is '+data.current.temperature + ' degree'
                console.log(data)
            }
        })
    })
})
