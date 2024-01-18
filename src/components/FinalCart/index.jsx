import React, { useState } from "react";
import "./style.css";
import data from "../../data.js";
import { Link, useLocation, useNavigate } from "react-router-dom";

function FinalCart() {
  const [value, setValue] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  function getRandomNumber(min, max) {
    return Math.floor(10000000 + Math.random() * 90000000);
  }

  const randomValue = getRandomNumber(1, 100);
  const stringValue = randomValue.toString();
  if (localStorage.getItem("randomNumber") == "") {
    localStorage.setItem("randomNumber", stringValue);
  }
  const retrievedValue = localStorage.getItem("randomNumber");

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(Math.max(value - 1, 0));
  };

  const redirecToHomeScreen = () => {
    localStorage.clear();
    window.location.href="/";
  }
  const deliveryDate = new Date(selectedDate);
  deliveryDate.setDate(deliveryDate.getDate() + 7);
  return (
    <div className="container-fluid">
      <div className="row background-div align-items-center">
        <div className="col-md-5">
          <a>
            <i
              className="px-3 bi bi-arrow-left"
              onClick={() => navigate("/configureOrder")}
            ></i>{" "}
            Classic_John45012 Cart #{retrievedValue}
          </a>
        </div>
        <div className="col-md-6 text-end">
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 col-12 p-0">
          <div className="card rounded-0">
            <div className="card-body">
              <p className="h5" style={{ color: "rgba(52, 73, 94, 1)" }}>
                {localStorage.getItem("selectedDoorType")}, &nbsp;
                {localStorage.getItem("selectedSeries")}, &nbsp;
                {localStorage.getItem("selectedCategory")}, &nbsp;
                {localStorage.getItem("assemblyType")}, &nbsp;
                {localStorage.getItem("darkFinish")}, &nbsp;
                {localStorage.getItem("framing")} &nbsp;
              </p>
              <p>
                Job Name: {localStorage.getItem("assemblyType")}{" "}
                <a
                  href="/configureOrder"
                  className="font_color"
                  style={{ fontWeight: "bold" }}
                >
                  Change
                </a>
              </p>
              <p>
                Product #CWD • Glass Type: {localStorage.getItem("glassType")}
              </p>
              <p>
                Availability:{" "}
                <span className="text-success" style={{ fontWeight: "bolder" }}>
                  IN STOCK
                </span>{" "}
                (Available for Pickup)
              </p>
              <div className="row">
                <div className="col-md-4 col-12 mb-2">
                  <div className="row">
                    <div className="col-md-auto col-3">
                      <button
                        className="btn btn-outline-dark"
                        onClick={handleDecrement}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-md-4 col-6">
                      <input
                        className="form-control text-center"
                        type="number"
                        id="added_items"
                        readOnly="true"
                        value={value}
                        min="0"
                        max="10"
                      />
                    </div>
                    <div className="col-md-4 col-3">
                      <button
                        className="btn btn-outline-dark"
                        onClick={handleIncrement}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6 mb-2 text-center">
                  <span className="text-success">
                    Standard Multiplier: .432
                  </span>
                  <br />
                  <span className="text-success">
                    Secondary Multipliers Applied{" "}
                  </span>
                  <br />
                  <span className="font_color">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2956/2956869.png"
                      width="20px"
                    />{" "}
                    Apply MPQ
                  </span>
                </div>
                <div className="col-md-4 col-6 mb-2 text-end">
                  <span className="font_color">Net Price:</span>{" "}
                  <span className="h5">$4500.00</span>
                  <br />
                  <span>Unit Price: $4800.00</span>
                  <p className="font_color">
                    {" "}
                    <br />
                    View Price Details
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-3 p-0">
                  <button
                    type="button"
                    className="btn border w-100 rounded-0  font_size"
                    style={{ color: "rgba(102, 51, 43, 1)" }}
                  >
                    <i className="bi bi-heart-fill"></i> FAVORITES
                  </button>
                </div>
                <div className="col-md-3 col-3  p-0">
                  <button
                    type="button"
                    className="btn border w-100 rounded-0  font_size"
                    style={{ color: "rgba(102, 51, 43, 1)" }}
                  >
                    <i className="bi bi-pencil-fill"></i> EDIT
                  </button>
                </div>
                <div className="col-md-3 col-3  p-0">
                  <button
                    type="button"
                    className="btn border w-100 rounded-0  font_size"
                    style={{ color: "rgba(102, 51, 43, 1)" }}
                  >
                    <i className="bi bi-copy"></i> COPY
                  </button>
                </div>
                <div className="col-md-3 col-3  p-0">
                  <button
                    type="button"
                    className="btn border w-100 rounded-0  font_size"
                    style={{ color: "rgba(102, 51, 43, 1)" }}
                    onClick={redirecToHomeScreen}
                  >
                    <i className="bi bi-trash-fill "></i> DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-md-6">
              <div className="card  p-3">
                <div className="card-body">
                  <label className="pt-2">Change Delivery Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="form-control"
                  />
                  <p>
                    Standard Delivery:{" "}
                    {deliveryDate.toISOString().split("T")[0]}
                  </p>
                </div>
              </div>
              <div className="card mt-2 pt-2 mb-2">
                <div className="card-body">
                  <label className="pt-2">Purchase Order Number</label>
                  <input type="number" className="form-control" />
                  <p>This PO will be useful to track this order items </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 mb-2">
                <div className="card-body">
                  <p style={{ color: "rgba(52, 73, 94, 1)" }}>Bill Summary</p>
                  <div className="row">
                    <div className="col-md-6">
                      <span>Sub Total</span>
                      <br />
                      <span>Energy Surcharge</span>
                      <br />
                      <span>Sales Tax</span>
                      <br />
                      <span
                        className="h6"
                        style={{ color: "rgba(102, 51, 43, 1)" }}
                      >
                        TOTAL
                      </span>
                      <br />
                    </div>
                    <div className="col-md-6 text-end">
                      <span>$4500</span>
                      <br />
                      <span>$ 70.18</span>
                      <br />
                      <span>$ 490.93</span>
                      <br />
                      <span
                        className="h6"
                        style={{ color: "rgba(102, 51, 43, 1)" }}
                      >
                        $ 5061.11
                      </span>
                      <br />
                    </div>
                  </div>
                  <hr />
                  <input type="checkbox" /> Apply Tax <br />
                  <span style={{ fontSize: "14px" }}>
                    (The 1% iStore discount is calculated into the total price
                    for all doors and door parts. Please refer to the quote or
                    order acknowledgment for details.)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-2 p-2">
            <div className="card-body">
              <div className="row">
                <div
                  className="col-md-6 col-12 border_div">
                  <div className="row">
                    <div className="col-md-6 col-8">
                      <p style={{ color: "rgba(52, 73, 94, 1)" }}>Billing To</p>
                      <p>Bement Jared</p>
                      <span>
                        144 Curt Shores, 50, Madison Avenue
                        <br />
                        Hixson - 42040
                      </span>
                      <br />
                      <span>Contact: (123) 456 7890</span>
                    </div>
                    <div className="col-md-6 col-4 align-self-center text-end">
                      <a className="font_color">CHANGE</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row">
                    <div className="col-md-6 col-8">
                      <p style={{ color: "rgba(52, 73, 94, 1)" }}>
                        Shipping To
                      </p>
                      <p>Bement Jared</p>
                      <span>
                        144 Curt Shores, 50, Madison Avenue
                        <br />
                        Hixson - 42040
                      </span>
                      <br />
                      <span>Contact: (123) 456 7890</span>
                    </div>
                    <div className="col-md-6 col-4 align-self-center text-end">
                      <a className="font_color">CHANGE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-2" style={{ borderRadius: "20px 20px 0 0" }}>
            <div className="card-body">
              <div className="row justify-content-evenly">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6 col-12 text-start">
                      <span>{value} Item</span>
                      <br />
                      <span style={{ fontWeight: "bolder" }}>
                        ${value * 5061.11}
                      </span>
                    </div>
                    <div className="col-md-6 col-12 text-end">
                      <Link
                        to="/addNewOrder"
                        className="col-5 btn btn-outline mr-2"
                        style={{
                          color: "rgba(102, 51, 43, 1)",
                          border: "2px solid rgba(102, 51, 43, 1)",
                        }}
                      >
                        <i className="bi bi-plus-square-fill"></i> Add more
                      </Link>
                      <button
                        type="button"
                        className="col-6 btn mx-1 configure_custom_background"
                      >
                        PLACE ORDER
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalCart;
