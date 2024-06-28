
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
      <MovieRow query="computer" title="Movie For Epicoders"/>
      <MovieRow query="karate" title="Karate"/>
      <MovieRow query="van+damme" title="Van Damme"/>
      <MovieRow query="Martial-Arts" title="Martial Arts"/>
      <MovieRow query="cult" title="Cult"/>
      <MovieRow query="drama" title="Drama"/>
      <MovieRow query="medical" title="Medical Drama"/>
      <MovieRow query="csi" title="C.S.I. Complete Season"/>
      <MovieRow query="twin-peaks" title="Twin Peaks"/>
      <MovieRow query="surf" title="Surf Movie"/>
      <MovieRow query="bill+gates" title="About Bill Gates"/>
      <MovieRow query="steve+jobs" title="About Steve Jobs"/>
      <Footer/>
    </div>
  );
}

export default App;
