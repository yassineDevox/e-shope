import Header from "./components/Header/header";
import ProductADD from "./components/add-product/addProduct";
import ListProduct from "./components/list-product/listProducts";

function App() {
  return (
    <div>
      <Header />
      <main className="container p-5">
        <ProductADD />
        <hr color='gray'/>
        <ListProduct />
      </main>
    </div>
  );
}

export default App;
