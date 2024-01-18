import React, { useState } from 'react';

const TableFilter = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm === '') {
      setFilteredData(data);
    } else {
      const filteredRows = data.filter((row) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      console.log(filteredRows);
      setFilteredData(filteredRows);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row background-div align-items-center">
        <div className="col-md-5 text-end">
          <a>Carts</a>
        </div>
        <div className="col-md-1 "></div>
        <div className="col-md-5">
          <a>Favorites</a>
        </div>
      </div>
      <div className="row background-card justify-content-between">
        <div className="col-md-3 p-4">
          <div className="row ">
            <div className="col-md-6">
              <a>
                <strong>Active Carts</strong>
              </a>
            </div>
            <div className="col-md-6">
              <a>
                <strong>Archived Carts</strong>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-4">
          <div className="row">
            <div className="col-md-6">
                <input type="text" placeholder="Search..." className="form-control" value={searchTerm} onChange={handleInputChange} />
            </div>
            <div className="col-md-6">
              <select className="form-control">
                <option>Filter</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr className="text_table">
              <th scope="col" className="text_table">
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
              <th scope="col" className="text_table">
                Expiry
              </th>
            </tr>
          </thead>
          <tbody>
          {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.productInformation}</td>
                <td>{item.cartName}</td>
                <td>{item.shippingPoint}</td>
                <td>{item.createdBy}</td>
                <td
                  className={`h-100 ${item.expiry === 90 ? 'text_gray' : 'text_yellow'}`}
                >
                  Expires in {item.expiry} days{' '}
                  {item.expiry === 90 ? (
                    <span className="new_button_dashboard">New</span>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableFilter;
