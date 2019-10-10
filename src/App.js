import React from 'react';
import Employees from "./Employees";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Posts from "./components/Posts";
import Post from "./components/Post";
import {BrowserRouter , Route} from "react-router-dom";
function App() {
  return (
  <BrowserRouter>
      <div>
      
     <NavBar />
            <Route path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/students" component={Employees} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:id" component={Post} />
    </div>
      </BrowserRouter>

  );
}

export default App;
