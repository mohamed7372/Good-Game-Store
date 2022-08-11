import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <div className="content">
        <aside>
          <SideBar />
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
