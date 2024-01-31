import React, { useState } from "react";

import "../documents/style.css";
import DataScript from "../documents/DataScript";
import RenderData from "../documents/RenderData";

const data = [
  {
    id: 1,
    title: "Hamburger",
    price: 80,
    img: "http://127.0.0.1:5501/order-basket-911/img/cheeseburger.svg",
  },
  {
    id: 2,
    title: "Coffee",
    price: 100,
    img: "http://127.0.0.1:5501/order-basket-911/img/coffee.png",
  },
  {
    id: 3,
    title: "Cola",
    price: 60,
    img: "http://127.0.0.1:5501/order-basket-911/img/cola.svg",
  },
  {
    id: 4,
    title: "Tea",
    price: 50,
    img: "http://127.0.0.1:5501/order-basket-911/img/tea.svg",
  },
  {
    id: 5,
    title: "Cheeseburger",
    price: 100,
    img: "http://127.0.0.1:5501/order-basket-911/img/cheeseburger.svg",
  },
  {
    id: 6,
    title: "Fries",
    price: 40,
    img: "http://127.0.0.1:5501/order-basket-911/img/fries.svg",
  },
];
const Massive = () => {
  const [singleMeal, setSingleMeal] = useState([]);

  const handleGetMealId = (incomingId) => {
    const filteredMeals = singleMeal.find((item) => item.id === incomingId);

    if (filteredMeals) {
      filteredMeals.count += 1;
      filteredMeals.price += data.find((item) => item.id === incomingId).price;
      setSingleMeal([...singleMeal]);
    } else {
      const newData = data.find((item) => item.id === incomingId);
      const newProduct = { ...newData, count: 1 };
      setSingleMeal([...singleMeal, newProduct]);
    }
  };

  return (
    <div className="togother">
      <DataScript data={data} handleGetMealId={handleGetMealId} />
      <RenderData
        singleMeal={singleMeal}
        setSingleMeal={setSingleMeal}
        data={data}
      />
    </div>
  );
};

export default Massive;
