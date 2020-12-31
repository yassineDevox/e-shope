import Header from './shared/Header/header'; 
import RouterApp from './routes/route';

function App() {
  return (
    <div>
      <Header />
      <RouterApp />
      <footer className='bg-dark p-3 text-center text-light'> @Copy-right Yassine Devox 2020</footer>
    </div>
  );
}

export default App;
