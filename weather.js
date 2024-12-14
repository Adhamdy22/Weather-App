const apikey="4027b93183eb8ea6b4b7f921240fb128"
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric"


var search=document.querySelector(".search-bar")
var weathericon=document.getElementById("weather-icon")
var tempreture=document.querySelector(".temp")
var maxdegree=document.querySelector(".maxdegree")
var mindegree=document.querySelector(".mindegree")
var city=document.querySelector(".city")
var country=document.querySelector(".country")
var humidity=document.querySelector(".humidity")
var wind=document.querySelector(".wind")



async function checkweather(){
    
    const response=await fetch(apiurl+`&appid=${apikey}`+`&q=${search.value}`);
    var data=await response.json()
    console.log(data)
    search.value=data.name
    city.innerHTML=data.name
    country.innerHTML=data.sys.country
    tempreture.innerHTML=Math.round(data.main.temp) + "°C"
    maxdegree.innerHTML=Math.round(data.main.temp_max) + "°C"
    mindegree.innerHTML=Math.round(data.main.temp_min) + "°C"
    humidity.innerHTML=data.main.humidity +"%"
    wind.innerHTML=data.wind.speed + "Km/h"
    if(response.status==404){
        tempreture.innerHTML="xxxxx"
        city.innerHTML="xxxxxx"
        country.innerHTML="xxxxxx"
        humidity.innerHTML="xxxxx"
        wind.innerHTML ="xxxxx"
        weathericon.src=""
    }

    if(data.main.temp<0){
        weathericon.src="images/snow.png"
    }
    if(data.main.temp>0&&data.main.temp<10){
        weathericon.src="images/rain.png"
    }
    else if(data.main.temp>10&&data.main.temp<20){
        weathericon.src="images/drizzle.png"
    }
    else if(data.main.temp>20&&data.main.temp<30){
        weathericon.src="images/clouds.png"
    }
    else if(data.main.temp>30&&data.main.temp<40){
        weathericon.src="images/mist.png"
    }
    else if(data.main.temp>40&&data.main.temp<50){
        weathericon.src="images/clear.png"
    } 

    
}
