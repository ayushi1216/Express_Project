const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp')
const temp_status = document.getElementById('temp_status')
const today_day = document.getElementById('today_day');
const today_date = document.getElementById('today_date');

// event.preventDefault prevents page from reloading

const getInfo = async(event) => {
    event.preventDefault();
    
    let city_val = cityName.value;


    if(city_val == ""){
        city_name.innerText = "Plz write the name before you search."
    }
    else{

        try{
            let url =   `https://api.openweathermap.org/data/2.5/weather?q=${city_val}&appid=41340093dd73c2bc99714cc4276081cd`
            
            const response = await fetch(url);
            const data = await response.json()
            const arrData = [data];
            
            city_name.innerText =  `${arrData[0].name }  |  ${arrData[0].sys.country}`;
                       
            temp.innerHTML =    `${parseFloat(arrData[0].main.temp - 273.15).toFixed(2)} <sup>o</sup>C`   

            
            const tempMood = arrData[0].weather[0].main;

            // Condition to check sunny or cloudy

            if(tempMood == 'Clear'){
              temp_status.innerHTML = '<i class="fa fa-sun" style = "color: rgb(249, 163, 13)" ></i>';
            }
            else if(tempMood == 'Clouds'){
                temp_status.innerHTML = '<i class="fa fa-cloud" style = "color: #009ad8" ></i>';
            }
            else if(tempMood == 'Rain'){
                temp_status.innerHTML = '<i class="fa fa-cloud-rain" style = "color: #009ad8" ></i>';
            }
            else {
                temp_status.innerHTML = '<i class="fa fa-sun" style = "color: rgb(249, 163, 13)" ></i>';
            }


        }

        catch{
            city_name.innerText = "Plz enter the city name Properly. "
        }
    }
}


// To get current date and day on App

const current_date = new Date();

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const day = weekdays[current_date.getDay()];

const date = `${current_date.getDate()} ${mS[current_date.getMonth()]} ${current_date.getFullYear()} `;


today_day.innerText = day;
today_date.innerText = date;




submitBtn.addEventListener('click', getInfo);