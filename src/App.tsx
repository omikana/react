import React, { useEffect, useState } from "react";
import {requests}  from "./libs/request";
import {instance}  from "./libs/axios";

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

function App() {
  const [moveis,setMoveis] =useState<Movie[]>([])
console.log(process.env.REACT_APP_TMDB_API_KEY);

  useEffect(()=>{
    (async()=>{
      const res = await instance.get<{results:Movie[]}>(requests.fetchTrending)
      setMoveis(res.data.results)
    })()
  },[])

  console.log(moveis);
  return <div className="App">{moveis.map((movie)=>{
    return (
      <div key="movie.id">
        <div>{movie.title}</div>
        <img src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} alt="" />
      </div>
    )
  })}</div>;

}

export default App;
