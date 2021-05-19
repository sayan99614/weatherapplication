import React from "react";
import { useState } from "react";
import Hill from "../images/Hill.png";
import Cloudy from "../images/cloudy.png";
import Hot from "../images/hot.png";
import Umb from "../images/umbrella.png";
import Hum from "../images/humidity.png";
import Raincloud from "../images/rain-cloud.png";
import Sunny from "../images/sunny.png";
function Weather() {
  const [details, setDetails] = useState({
    latitude: "",
    longitude: "",
  });
  const [weather, setweather] = useState({});

  const getinput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDetails({ ...details, [name]: value });
  };
  const callapi = async (event) => {
    event.preventDefault();
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/find?lat=${details.latitude}&lon=${details.longitude}&cnt=10&appid=12f19d9df6a7e709fa834edb4cb53ec8`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    setweather({
      name: data["list"][0]["name"],
      temp: parseInt(data["list"][0]["main"]["temp"]) - 273,
      humidity: data["list"][0]["main"]["humidity"],
      rain: data["list"][0]["rain"],
      description: data["list"][0]["weather"][0]["description"],
    });
    console.log(weather);
  };

  const Weatherprint = () => {
    if (Object.keys(weather).length === 0) {
      return <img src={Hill} style={{ width: "75%" }} alt='' />;
    } else {
      return (
        <>
          <div className='text-center'>
            <RenderImage />
            <h3>
              <i class='fas fa-map-marker-alt'></i>
              {weather.name}
            </h3>
            <p>{weather.description}</p>
            <div className='text-center'>
              <div
                className='card p-3 mx-auto shadow-sm mb-2'
                style={{ width: "95%" }}
              >
                <div className='d-flex justify-content-between'>
                  <div>
                    <h4>
                      <img src={Hot} alt='' />
                    </h4>
                    <h5>{`${weather.temp} `}&#8451;</h5>
                  </div>
                  <div>
                    <h4>
                      <img src={Hum} alt='' />
                    </h4>
                    <h5>{`${weather.humidity} %`}</h5>
                  </div>
                  <div>
                    <h4>
                      <img src={Umb} alt='' />
                    </h4>
                    <h5>{weather.rain === null ? `0 %` : `${weather.rain}`}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  const RenderImage = () => {
    if (weather.description === "clear sky") {
      return <img src={Sunny} style={{ width: "200px" }} alt='' />;
    } else if (weather.description === "rain") {
      return <img src={Raincloud} style={{ width: "200px" }} alt='' />;
    } else if (weather.description === "few clouds") {
      return <img src={Cloudy} style={{ width: "200px" }} alt='' />;
    } else {
      return <img src={Cloudy} style={{ width: "200px" }} alt='' />;
    }
  };

  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='row'>
              <div className='col-sm-8'>
                <Weatherprint />
              </div>
              <div className='col-sm-4'>
                <div className='mt-5 text-left'>
                  <h3 className='text-success mb-1'>Weather</h3>
                </div>
                <form onSubmit={callapi} className='shadow-sm p-5'>
                  <div class='form-group mb-2'>
                    <label className='mb-1'>Latitude</label>
                    <input
                      type='number'
                      class='form-control shadow-sm'
                      name='latitude'
                      placeholder='Enter Latitude'
                      onChange={getinput}
                      value={details.latitude}
                    />
                  </div>
                  <div class='form-group mb-2'>
                    <label className='mb-1'>Longitude</label>
                    <input
                      type='number'
                      class='form-control shadow-sm'
                      name='longitude'
                      placeholder='Enter Longitude'
                      onChange={getinput}
                      value={details.longitude}
                    />
                  </div>
                  <div className='text-left'>
                    <button className='btn btn-success mt-2'>
                      Check Weather
                      <span style={{ fontWeight: "bolder" }}>&#8594;</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
