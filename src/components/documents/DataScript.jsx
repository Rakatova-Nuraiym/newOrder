import React from "react";
import "./style.css";

const DataScript = ({ data, handleGetMealId }) => {
  // const handleClick = (id) => {
  //   handleGetMealId(id);
  // };
  return (
    <div>
      <h1>Food-menu order-box</h1>
      {data.map((item) => (
        <div key={item.id} className="mainLayout">
          <div className="layout">
            <div className="food" onClick={() => handleGetMealId(item.id)}>
              <img src={item.img} alt="" />
              <h1>{item.title}</h1>
              <p>{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataScript;
