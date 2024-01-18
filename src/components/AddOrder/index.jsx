import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './style.css';
function AddOrder() {
  const navigate=useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('Residential Door');
  const [selectedSeries, setSelectedSeries] = useState('Canyon Ridge® Collection');
  const [selectedDoorType, setSelectedDoorType] = useState('CAN212');

  const submitData = () => {
    localStorage.setItem('selectedCategory', selectedCategory);
    localStorage.setItem('selectedSeries', selectedSeries);
    localStorage.setItem('selectedDoorType', selectedDoorType);
  };
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#dee2e6", height: "100%" }}
    >
      <div className="row background-div align-items-center">
        <div className="col-md-5">
          <a>
            <i className="px-3 bi bi-arrow-left" onClick={()=>navigate('/addNewOrder')}></i> Configure a new door{" "}
            <span className="mx-2" style={{ fontSize: " 14px" }}>
              1 of 3
            </span>
          </a>
        </div>
        <div className="col-md-6 text-end">
          <i class=" bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div className="row mt-3 justify-content-center">
        <div className="col-md-8">
          <div className="card rounded-0" style={{ height: "80vh" }}>
            <div className="card-body">
              <div className="row mt-2 justify-content-center">
                <label className="col-md-4" for="category">
                  Select Category:
                </label>
                <div className="col-md-6">
                  <select className="form-control" id="category">
                    <option className="form-control">Residential Door</option>
                  </select>
                </div>
              </div>
              <div className="row mt-2 justify-content-center">
                <label className="col-md-4 " for="category">
                  Select Series:
                </label>
                <div className="col-md-6 ">
                  <select className="form-control" id="series">
                    <option className="form-control">
                      Canyon Ridge® Collection
                    </option>
                  </select>
                </div>
              </div>
              <div className="row mt-2  justify-content-center" id="type">
                <label className="col-md-4 " for="category">
                  Door Type:
                </label>
                <div className="col-md-6 ">
                  <select className="form-control">
                    <option className="form-control">CAN212</option>
                  </select>
                </div>
              </div>
              <div className="row justify-content-end w-100 configure_button">
                <div className="col-md-12 text-end">
                  <hr/>
                  <Link to="/configureOrder" type="button" className="btn configure_custom_background" onClick={submitData}>
                    CONFIGURE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOrder;
