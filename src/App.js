
import "./app.css";
import {Data} from "./Components/Data";
import React, { useState } from "react"; 
import Movielist from "./Components/Movielist";
import ShowModal from "./Components/Modal/ShowModal";



function App(){
  const [movies, setmovies ] = useState(Data);
  return (
    <div className="App">
      <Movielist movies={movies}></Movielist>
      <ShowModal></ShowModal>
    </div>
  );
}
export default App;

