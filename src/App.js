import './App.css';
import Row from './components/Row';
import requests from './request';
import request from './request';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Row isPoster='true' title='NetflixOriginals' fetchurl={requests.fetchNetflixOriginals}/>
      <Row title='Trending' fetchurl={requests.fetchTrending}/>
      <Row title='TopRated' fetchurl={requests.fetchTopRated}/>
      <Row title='ActionMovies' fetchurl={requests.fetchActionMovies}/>
      <Row title='ComedyMovies' fetchurl={requests.fetchComedyMovies}/>
      <Row title='HorrorMovies' fetchurl={requests.fetchHorrorMovies}/>
      <Row title='RomanceMovies' fetchurl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchurl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
