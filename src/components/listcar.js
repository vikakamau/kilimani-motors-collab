import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

function Listcars() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filterList = () => {
      const keywords = search.toLowerCase().split(" ");
      const filteredList = list.filter((car) => {
        return keywords.every((keyword) => {
          return (
            car.Brand.toLowerCase().includes(keyword) ||
            car.Model.toLowerCase().includes(keyword)
          );
        });
      });
      setFilteredList(filteredList);
    };

    const delaySearch = setTimeout(() => {
      filterList();
    }, 300); 

    return () => clearTimeout(delaySearch);
  }, [search, list]); 

  useEffect(() => {
    fetch("https://api-server-vik-2.onrender.com/cars")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container m-3 p-3">
        <div className="m-2 p-3">
          <input
            onChange={handleSearch}
            className="form-control"
            type="text"
            placeholder="Search Car by Brand or Model"
            value={search}
          />
        </div>
        <div className="row">
          {filteredList.map((car) => (
            <div key={car.id} className="col-sm-4 mb-3 mx-auto">
              <div className="card">
                <img
                  src={car.image}
                  className="card-img-top"
                  alt="Car"
                  style={{ height: "350px", width: "350px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Brand: {car.Brand}</h5>
                  <p className="card-text">Model: {car.Model}</p>
                  <Link to={`/kilimani-motors-collab/describe/${car.id}`}>
                    <button className="btn btn-success btn-sm m-3">View Car Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listcars;