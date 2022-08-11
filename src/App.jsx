import './App.css';
import AnnounceSide from './components/announce/AnnounceSide';
import Catalog from './components/catalog/Catalog';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/Home';

function App() {

  const show = false;

  return (
    <div className="App">
      <div className="content">
        <aside>
          <section>
            <SideBar />
            <AnnounceSide />
          </section>
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
