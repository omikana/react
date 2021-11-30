// import React, { useEffect, useState } from "react";
// import {requests}  from "./libs/request";
// import {instance}  from "./libs/axios";
import {Row}  from "./components/Row";
import { requests } from "./libs/request";

function App() {
  
  
  return <div className="App">
    {/* <Row title="NETFLIX ORIGUINALS" fetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchNetflixOriginals} />
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Documentaries" fetchUrl={requests.fetchTrending} /> */}

    <Row
      title="NETFLIX ORIGUINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
    />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title="DOcumentaries" fetchUrl={requests.fetchDocumentMovies} />

  </div>;

}

export default App;
