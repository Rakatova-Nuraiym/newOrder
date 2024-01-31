import "./App.css";
import Script from "./components/documents/Script";

function App() {
  return (
    <div className="App">
      <Script />
    </div>
  );
}

export default App;


// const handleAddBasket = (incomingId) => {
//   const findedDataProduct = data.find((el) => {
//     return el.id === incomingId;
//   });

//   const findedProduct = basket.find((product) => {
//     console.log();
//     return product.id === incomingId;
//   });
//   if (findedProduct) {
//     console.log("id is working", findedProduct);
//     setBasket([...basket, { ...findedProduct, count: 1 }]);
//   } else {
//     const filteredProduct = basket.filter((product) => {
//       return product.id === incomingId;
//     });
//     setBasket([
//       ...filteredProduct,
//       { ...findedProduct, count: findedProduct.count + 1 },
//     ]);
//   }
// };