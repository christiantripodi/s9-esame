
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieRow from './components/MovieRow';
import SubMenu from './components/SubMenu';

function App() {
  return (
    <div className="App">
      <Header/>
      <SubMenu/>
      <MovieRow query="karate" title="Karate"/>
      <MovieRow query="van+damme" title="Van Damme"/>
      <MovieRow query="Martial-Arts" title="Martial Arts"/>
      <Footer/>
    </div>
  );
}

export default App;
