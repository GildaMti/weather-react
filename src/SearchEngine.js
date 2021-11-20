import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine(props) {
  let [city, setCity] = useState(``);
  let [temperature, setTemperature] = useState(``);
  let [description, setDescription] = useState(``);
  let [humidity, setHumidity] = useState(``);
  let [wind, setWind] = useState(``);
  let [icon, setIcon] = useState(``);

  let img = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  /*let message = `It is ${Math.round(temperature)}°C in ${city}`;*/

  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0f14c446185bd2f3eebdb06e7fede59&units=metric`;
    axios.get(url).then(updateMessage);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function updateMessage(response) {
    console.log(response.data);
    setCity(response.data.name);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  if (temperature === ``) {
    return (
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Enter a city.."
            onChange={updateCity}
          />
          <input type="submit" value="search" />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Enter a city.."
            onChange={updateCity}
          />
          <input type="submit" value="search" />
        </form>
        <ul className="weatherDetails">
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {Math.round(humidity)}%</li>
          <li>Wind: {Math.round(wind)} Km/h</li>
          <li>
            <img src={img} alt="" />{" "}
          </li>
        </ul>
      </div>
    );
  }
}
