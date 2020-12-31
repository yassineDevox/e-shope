
import ProductADD from "./components/add-product/addProduct";
import ListProduct from "./components/list-product/list-product";
import Header from './shared/Header/header'; 

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
