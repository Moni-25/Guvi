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
    data.forEach((e)=>{
        //console.log(e)
        let div = document.getElementById('root');
        let card = document.createElement('div')
        let [lat, lng] = e.latlng;
        card.lat = lat
        card.lng = lng
        card.addEventListener('click', getWeather, false)
        card.innerHTML = `<div class='card-wrapper'>
            <h1>${e.name.common}</h1>
            <img src="${e.flags.png}"/>
        </div>`
        div.appendChild(card)
    })
}

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