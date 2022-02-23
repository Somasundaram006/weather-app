import React, { useState, useEffect } from 'react';
import Form from './Form';
import weatherSVG from "./img/weather.svg";
import "./App.css";

const App = () => {
  const [data, setData] = useState("Tirunelveli");
  const [weather, setWeather] = useState();

  const getReport = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then((data) => {
        setData(data.name);
        setWeather(data);
      }
      )
      .catch(err => console.log(err));
  }
  useEffect(() => {
    getReport();
    return () => {
      console.log('component is unmounting');
    }
  }, [])

  return (
    <div className="pageWrapper">
      <img
        className="pageLogo"
        src={weatherSVG}
        alt="weather"
      />
      <div>
        <h1 className="pageHdr">
          Weather App
        </h1>
        <p className="pageDesc">Find out the current weather situation of city around the world</p>
        <Form data={data} setData={setData} getReport={getReport} />
        <div className="cardWrapper">
          <div className="cardImgWrapper">
            <img
              src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="cardImg"
            />
            <h3 className="cardHdr">{weather?.weather[0].main}</h3>
          </div>
          <p className="cardDesc">
            The weather condition in {weather?.name},
            {weather?.sys?.country} is described as
            <span className="cardDescHighlight"> {weather?.weather[0].description}</span>  with a temperature of{" "}
            <span className="cardDescHighlight">{Math.ceil(Number(weather?.main.temp))}</span> °C and a humidity of{" "}
            <span className="cardDescHighlight">{weather?.main?.humidity} %</span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default App;