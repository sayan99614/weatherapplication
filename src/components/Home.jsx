import React from "react";
import { Link } from "react-router-dom";
import Banner from "../images/banner.png";

function Home() {
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-sm-8'>
            <img
              src={Banner}
              className='img-fluid'
              style={{ width: "90%" }}
              alt=''
            />
          </div>
          <div className='col-sm-4'>
            <h2 style={{ marginTop: "150px" }}>
              Check <span className='text-success'>Weather</span> report by
              searching your location
            </h2>
            <div className='text-md-left'>
              <Link
                className='btn btn-success mt-2'
                style={{ borderRadius: "50px" }}
                to='/weather'
              >
                Check Weather{" "}
                <span style={{ fontWeight: "bolder" }}>&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
