import React, { useState } from "react";
import "./style.css";
import data from "../../data.js";
import { Link, useLocation } from "react-router-dom";

function BannerMain() {
  const location = useLocation();
  const [filterTerm, setFilterTerm] = useState("");
  const [sortBy, setSortBy] = useState("productInformation");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredAndSortedData, setFilteredAndSortedData] = useState(data);
  const [filterButtonClicked, setFilterButtonClicked] = useState(false);

  const handleFilterChange = (e) => {
    setFilterTerm(e.target.value);
    handleFilterAndSort();
  };

  const handleSort = (column) => {
    if (filterButtonClicked) {
      if (sortBy === column) {
        setSortOrder(
          sortOrder === "asc"
            ? "desc"
            : sortOrder === "desc"
            ? "original"
            : "asc"
        );
      } else {
        setSortBy(column);
        setSortOrder("asc");
      }
      handleFilterAndSort(); // Apply sorting only when the filter button is clicked
    }
  };

  const handleFilterAndSort = () => {
    // Apply filtering only if the search input is not empty
    let filteredData = data;
    if (filterTerm !== "") {
      filteredData = data.filter((item) =>
        Object.values(item).some(
          (value) =>
            value &&
            String(value).toLowerCase().includes(filterTerm.toLowerCase())
        )
      );
    }

    // Apply sorting only when the filter button is clicked
    let sortedData = filteredData;
    if (filterButtonClicked) {
      if (sortOrder === "original") {
        sortedData = filteredData;
      } else {
        sortedData = [...filteredData].sort((a, b) => {
          const compareValueA = a[sortBy];
          const compareValueB = b[sortBy];

          if (sortOrder === "asc") {
            return compareValueA.localeCompare(compareValueB);
          } else {
            return compareValueB.localeCompare(compareValueA);
          }
        });
      }
    }
    setFilteredAndSortedData(sortedData);
  };

  const handleFilterButtonClick = () => {
    setFilterButtonClicked(true);
    handleFilterAndSort(); // Apply filtering and sorting when the filter button is clicked
  };

  return (
    <div className="container-fluid">
      <div className="col-md-12">
        <div className="row background-div align-items-center justify-content-center">
          <div
            className={`col-md-auto col-auto text-end ${
              location.pathname == "/" ? "active_button" : null
            } h-100`}
          >
            <div className="row align-items-center">
              <Link to="/" className="mt-2 text-white">
                CARTS
              </Link>
            </div>
          </div>
          <div className="col-md-1 col-1"></div>
          <div
            className={`col-md-auto col-4 text-end ${
              location.pathname == "/favorites" ? "active_button" : null
            } h-100`}
          >
            <div className="row align-items-center">
              <Link to="/favorites" className="mt-2 text-white">
                FAVORITES
              </Link>
            </div>
          </div>
        </div>
        <div className="row background-card justify-content-between border-bottom">
          <div className="col-md-6">
            <div className="row h-100">
              <div
                className={`col-md-auto col-6 pt-3  text-end ${
                  location.pathname == "/" ? "active_button_new" : null
                }`}
              >
                <Link to="/" className="text_custom_color">
                  Active Carts
                </Link>
              </div>
              <div
                className={`col-md-auto col-6 pt-3  text-end ${
                  location.pathname == "/archivedCarts"
                    ? "active_button_new"
                    : null
                }`}
              >
                <Link
                  to="/archivedCarts"
                  className={`${
                    location.pathname == "/archivedCarts"
                      ? "text_custom_color"
                      : "text-gray-color"
                  }`}
                >
                  Archived Carts
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-2">
            <div className="row">
              <div className="col-md-5 col-6">
                <div className="row bg-white border align-items-center">
                  <div className="col-8">
                    <input
                      className="form-control border-0"
                      type="text"
                      placeholder="Search"
                      value={filterTerm}
                      onChange={handleFilterChange}
                    />
                  </div>
                  <div className="col-4">
                    <i className="bi bi-search"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6 margin-no">
                <div className="row bg-white align-items-center border">
                  <div className="col-5">
                    <i
                      className="bi bi-filter"
                      onClick={handleFilterButtonClick}
                    ></i>
                  </div>
                  <div className="col-7">
                    <button
                      type="button"
                      className="btn bg-white"
                      onClick={handleFilterButtonClick}
                    >
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mobile_view">
          <div className="col-md-12">

          </div>
          <table className="table table-striped">
            <thead>
              <tr className="text_table">
                <th
                  scope="col"
                  className="text_table"
                  onClick={() => handleSort("productInformation")}
                >
                  Product Information
                </th>
                <th scope="col" className="text_table">
                  Cart Name
                </th>
                <th scope="col" className="text_table">
                  Shipping Point
                </th>
                <th scope="col" className="text_table">
                  Created By
                </th>
                <th colSpan={2} scope="col" className="text_table">
                  Expiry
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.productInformation}</td>
                  <td>{item.cartName}</td>
                  <td>{item.shippingPoint}</td>
                  <td>{item.createdBy}</td>
                  <td
                    colSpan={2}
                    className={`${
                      item.expiry === 90 ? "text_yellow" : "text_gray"
                    }`}
                  >
                    <table>
                      <tr>
                        <td style={{ width: "70%" }}>
                          Expires in {item.expiry} days
                        </td>
                        <td>
                          {item.expiry === 90 ? (
                            <div className="new_button_dashboard">
                              <span>NEW</span>
                            </div>
                          ) : null}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row desktop_view">
          {filteredAndSortedData.map((item, index) => (
            <div key={index} className="col-12">
              <div className="card mt-2 mb-2">
                <div className="card-body">
                  <div className="row">
                    <div className="col-8">
                      <p>{item.cartName}</p>
                    </div>
                    <div className="col-6"></div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="font_color_product">
                        {item.productInformation}
                      </p>
                    </div>
                    <div className="col-8">Expires in {item.expiry} days</div>
                    <div className="col-4">
                      {item.expiry === 90 ? (
                        <div className="new_button_dashboard">
                          <span>NEW</span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sticky-plus">
          <Link to="/addNewOrder">
            <img src="/Add.png" width={"72px"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerMain;
