import React from "react";
import "./City.scss";

function City({ data }) {
  console.log("city", data);
  return (
    <div className="city">
      <div className="city_name">
        <p>
          {data.name},{data.weather}
        </p>
      </div>
    </div>
  );
}

export default City;
