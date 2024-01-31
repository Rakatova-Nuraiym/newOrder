import React, { useEffect, useState } from "react";

const RenderData = ({ singleMeal, setSingleMeal, data }) => {
  const deleteFunc = (id) => {
    const deletedProduct = singleMeal.find((item) => item.id === id);

    if (deletedProduct.count > 1) {
      const newData = data.find((item) => item.id === id);
      const updatedProduct = {
        ...deletedProduct,
        count: (deletedProduct.count -= 1),
        price: (deletedProduct.price -= newData.price),
      };
      // singleMeal[index] = updatedProduct;
      setSingleMeal([...singleMeal]);
    } else {
      const filtered = singleMeal.filter((item) => item.id !== id);
      setSingleMeal([...filtered]);
    }
  };

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const renderTotalOrder = () => {
    let totalQuantitySet = 0;
    let totalPriceSet = 0;

    singleMeal.forEach((item) => {
      totalQuantitySet += item.count;
      totalPriceSet += item.price;
    });

    setTotalQuantity(totalQuantitySet);
    setTotalPrice(totalPriceSet);
  };

  useEffect(() => {
    renderTotalOrder();
  }, [singleMeal]);

  return (
    <div>
      <div className="total">
        <h1>You have {totalQuantity} items in the basket.</h1>
        <h2>Sum: {totalPrice} som</h2>
        {singleMeal.length === 0 && <h3>Orders list is empty</h3>}
      </div>
      <div className="singleMeal">
        <div className="mainProduct">
          {singleMeal.map((item, index) => (
            <div key={item.id} className="product">
              <h5>{item.title}</h5>
              <p>count: {item.count}</p>
              <p>price: {item.price}</p>
              <button
                className="deleteButton"
                onClick={() => {
                  deleteFunc(item.id, index);
                }}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenderData;
