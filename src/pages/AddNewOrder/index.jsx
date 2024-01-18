import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
function AddNewOrder() {
  const navigate=useNavigate();

  return (
    <>
      <div
        className="container-fluid pb-5"
        style={{ backgroundColor: "#dee2e6", height: "100%" }}
      >
        <div className="row background-div align-items-center">
          <div className="col-md-5">
              <i class="px-3 bi bi-arrow-left" onClick={()=>navigate('/')}></i> Create a New Order
          </div>
          <div className="col-md-6 text-end">
            <i class=" bi bi-three-dots-vertical"></i>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="row justify-content-center pt-2">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-10 col-9">
                        <Link to="/addOrder" className="card-title-heading">
                          Configure Your Door From Scratch
                        </Link>
                        <p className="text_gray font_size_small">
                          Residential, Commerical, Entry doors
                        </p>
                      </div>
                      <div className="col-md-2 col-3 text-end">
                        <Link to="/addOrder" className="card-title-heading">
                          <img src="./arrow.png" width="20%" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center  pt-2">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-10 col-9">
                        <a className="card-title-heading">Parts / Openers</a>
                        <p className="text_gray  font_size_small">Order Parts and Openers</p>
                      </div>
                      <div className="col-md-2 col-3 text-end">
                        <Link to="/addOrder" className="card-title-heading">
                          <img src="./arrow.png" width="20%" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center  pt-2">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-10 col-9">
                        <a className="card-title-heading">Direct Item Entry</a>
                        <p className="text_gray  font_size_small">
                          Order Parts / Openers using a Product ID
                        </p>
                      </div>
                      <div className="col-md-2 col-3 text-end">
                        <Link to="/addOrder" className="card-title-heading">
                          <img src="./arrow.png" width="20%" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center  pt-2">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-10 col-9">
                        <a className="card-title-heading">
                          Choose from favourites
                        </a>
                        <p className="text_gray font_size_small">
                          Re-order door from your favourites
                        </p>
                      </div>
                      <div className="col-md-2 col-3 text-end">
                        <Link to="/addOrder" className="card-title-heading">
                          <img src="./arrow.png" width="20%" />
                        </Link>
                      </div>
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

export default AddNewOrder;
