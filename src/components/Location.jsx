import React from "react";
import { useState } from "react";
import Locationimg from "../images/location.png";
import Cloudy from "../images/cloudy.png";
import People from "../images/People.png";
import Hot from "../images/hot.png";
import Umb from "../images/umbrella.png";
import Hum from "../images/humidity.png";
import Raincloud from "../images/rain-cloud.png";
import Sunny from "../images/sunny.png";

function Location() {
  const [location, setLocation] = useState({});

  function geoFindMe() {
    async function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt=10&appid=12f19d9df6a7e709fa834edb4cb53ec8`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      console.log(data);
      setLocation({
        name: data["list"][0]["name"],
        temp: parseInt(data["list"][0]["main"]["temp"]) - 273,
        humidity: data["list"][0]["main"]["humidity"],
        rain: data["list"][0]["rain"],
        description: data["list"][0]["weather"][0]["description"],
      });
    }

    function error() {
      console.log(`error`);
    }

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  const RenderImage = () => {
    if (location.description === "clear sky") {
      return <img src={Sunny} style={{ width: "200px" }} alt='' />;
    } else if (location.description === "rain") {
      return <img src={Raincloud} style={{ width: "200px" }} alt='' />;
    } else if (location.description === "few clouds") {
      return <img src={Cloudy} style={{ width: "200px" }} alt='' />;
    } else {
      return <img src={Cloudy} style={{ width: "200px" }} alt='' />;
    }
  };

  const Locateme = () => {
    if (Object.keys(location).length === 0) {
      return (
        <>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-8'>
                <img
                  src={Locationimg}
                  className='img-fluid'
                  style={{ width: "85%" }}
                  alt=''
                />
              </div>
              <div className='col-sm-4'>
                <h2 style={{ marginTop: "150px" }}>
                  Check <span className='text-success'>Weather</span> report by
                  simple one click !
                </h2>
                <div className='text-left mt-4'>
                  <button onClick={geoFindMe} className='btn btn-success'>
                    Click&#8594;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6 text-center'>
                <img
                  src={People}
                  className='mt-5'
                  style={{ width: "90%" }}
                  alt=''
                />
              </div>
              <div className='col-sm-6'>
                <div className='text-center'>
                  <RenderImage />
                  <h3>
                    <i class='fas fa-map-marker-alt'></i>
                    {location.name}
                  </h3>
                  <p>{location.description}</p>
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
                          <h5>{`${location.temp} `}&#8451;</h5>
                        </div>
                        <div>
                          <h4>
                            <img src={Hum} alt='' />
                          </h4>
                          <h5>{`${location.humidity} %`}</h5>
                        </div>
                        <div>
                          <h4>
                            <img src={Umb} alt='' />
                          </h4>
                          <h5>
                            {location.rain === null
                              ? `0 %`
                              : `${location.rain}`}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <Locateme />
    </>
  );
}

export default Location;
