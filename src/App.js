import Header from "./components/Header/header";
import ProductADD from "./components/addProduct"

function App() {
  return (
    <div>
      <Header />
      <main className="container p-5">
        <ProductADD />
      </main>
    </div>
  );
}

export default App;
