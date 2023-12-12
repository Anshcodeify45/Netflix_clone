import request from './request';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar/>

      <Banner/>




<Row title="Trending Now" fetchUrl={request.fetchTrending} isLargerow={true}/>
<Row title="Netflix Orginals" fetchUrl={request.fetchNetflixOriginals}/>
<Row title="Top Rated" fetchUrl={request.fetchToprated }/>
<Row title="Action Movie" fetchUrl={request.fetchActionMovie }/>
<Row title="Comedy Movie" fetchUrl={request.fetchComedyMovies}/>
<Row title="Horror Movie" fetchUrl={request.fetchHorrorMovies}/>
<Row title="Romance Movie" fetchUrl={request.fetchRomanceMovies}/>
<Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
