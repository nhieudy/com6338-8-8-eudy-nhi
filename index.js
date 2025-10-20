// Your code here
var form = document.querySelector('form');
var URL = 'https://api.openweathermap.org/data/2.5/weather?q=gainesville&units=imperial&appid=61ac71fca852832313e86693bf383076'
form.onsubmit = function(e){
    e.preventDefault();
    fetch(URL)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
    })
}