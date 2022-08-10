import './App.css';
import NavBar from './components/navbar/NavBar';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <aside>
        <SideBar />
      </aside>
      <main>
        <nav>
        <NavBar />
        </nav>
      </main>
    </div>
  );
}

export default App;
