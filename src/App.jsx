import './App.css';
import Catalog from './components/catalog/Catalog';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/Home';

function App() {

  const show = true;

  return (
    <div className="App">
      <div className="content">
        <aside>
          <SideBar />
          {show && <Catalog />}
        </aside>
        <main>
          <NavBar />
          <article>
            <Home/>
          </article>
          <Footer />
        </main>
      </div> 
    </div>
  );
}

export default App;
