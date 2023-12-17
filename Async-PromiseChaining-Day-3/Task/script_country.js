//weather API => https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//API Id => 5a63620efbcd80610f9502453d090fe9

async function getWeather(e){
    let {lat, lng} = e.currentTarget
    console.log(lat, lng)
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1df01ea2c0ed525b7685b8d43188acfd`)
    let data = await res.json();

    let celcius = data.main.temp - 275.13
    console.log(data.main.temp, celcius.toFixed(2))

}

function createCards(data){
    for(var i in data){
        var e = data[i];
        //console.log(e.name.common)
        let div = document.getElementById('root');
        let card = document.createElement('div')
        let [lat, lng] = e.latlng;
        card.lat = lat
        card.lng = lng
        card.addEventListener('click', getWeather, false)
        card.innerHTML = 
        `<div class='row'>
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card h-100">
                <div class="card-header">
                    <h1 id="title" class="text-center">${e.name.common}</h1>
                </div>
                <div class="card-body">
                <img src="${e.flags.png}" alt="Photo" id="image" class="card-img-top">
                <div class="card-text" id="text">
                <h6 style="text-align: center; color:white; font-weight: 600;">Region : ${e.region}</h6>
                <h6 style="text-align: center; color:white; font-weight: 600;">Native Name : ${e.name.nativeName}</h6>
                <h6 style="text-align: center; color:white; font-weight: 600;">Population : ${e.population}</h6>
                </div>
                </div>
            </div>
        </div>
        </div>`
        div.appendChild(card)
    }
}

var col = document.querySelector('body div.container div.row div.col-sm-6.col-md-4.col-lg-4.col-xl-4');
var card = document.querySelector('div.row div.col-sm-6.col-md-4.col-lg-4.col-xl-4 div.card');
var cardHeader = document.querySelector('div.row div.col-sm-6.col-md-4.col-lg-4.col-xl-4 div.card div.card-header');
var cardImg = document.querySelector('div.row div.col-sm-6.col-md-4.col-lg-4.col-xl-4 div.card img#image');
var cardText = document.querySelector('div.row div.col-sm-6.col-md-4.col-lg-4.col-xl-4 div.card-body div.card-text');

async function loadData(){
    try{        
        let req = await fetch("https://restcountries.com/v3.1/all", {method:'GET'})
        let data = await req.json();
        createCards(data)
    }
    catch(error){
        console.error(error)
    }
}

loadData()


