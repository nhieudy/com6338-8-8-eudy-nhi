// Your code here
var form = document.querySelector('form');
var URL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=61ac71fca852832313e86693bf383076&q='
form.onsubmit = function(e){
    e.preventDefault();
    var city = this.search.value;
    fetch(URL + city)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
    })
}