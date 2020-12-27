import Header from "./components/shared/Header/header";
import ProductADD from "./components/add-product/addProduct";
import ListProduct from "./components/list-product/listProducts";

function App() {
  return (
    <div>
      <Header />
      <main className="row p-5">
        <ProductADD />
        <ListProduct />
      </main>
      <footer className='bg-dark p-3 text-center text-light'> @Copy-right Yassine Devox 2020</footer>
    </div>
  );
}

export default App;
