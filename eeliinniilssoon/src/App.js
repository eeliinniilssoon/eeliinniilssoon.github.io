import React from 'react';
import { DarkModeProvider } from "./DarkModeContext";
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './Komponenter/Navbar';
import Footer from './Komponenter/Footer';
import Landingpage from './Komponenter/Pages/Landingpage';
import AboutMe from './Komponenter/Pages/AboutMe';
import Projects from './Komponenter/Pages/Projects';
import Halsoappen from './Komponenter/Pages/ProjectMap/Halsoappen';
import Coolfashion from './Komponenter/Pages/ProjectMap/Coolfashion';
import Friendlycorner from './Komponenter/Pages/ProjectMap/Friendlycorner';
import Skvaller from './Komponenter/Pages/ProjectMap/Skvaller';
import Stadafint from './Komponenter/Pages/ProjectMap/Stadafint';
import Tentamenbloggen from './Komponenter/Pages/ProjectMap/Tentamenbloggen';
import Todo from './Komponenter/Pages/ProjectMap/Todo';
import Vidici from './Komponenter/Pages/ProjectMap/Vidici';
import Blog from './Komponenter/Pages/Blog';
import BlogPost from './Komponenter/Pages/BlogPost';

function App() {
  
  return (
    <>
    <HashRouter>
    <DarkModeProvider>
      <Navbar/>
        <Routes>
        <Route path="" index element={<Landingpage/>} />
          <Route path="/OmMig" element={<AboutMe/>} />
          <Route path="/Blogg" element={<Blog/>} />
          <Route path="/blog/:postId" element={<BlogPost/>} />
          <Route path="/Portfolio" element={<Projects/>} />
          <Route path="/Coolfashion" element={<Coolfashion/>} />
          <Route path="/Friendlycorner" element={<Friendlycorner/>} />
          <Route path="/Halsoappen" element={<Halsoappen/>} />
          <Route path="/Skvaller" element={<Skvaller/>} />
          <Route path="/Stadafint" element={<Stadafint/>} />
          <Route path="/Tentamenbloggen" element={<Tentamenbloggen/>} />
          <Route path="/Todo" element={<Todo/>} />
          <Route path="/Vidici" element={<Vidici/>} />
        </Routes>
      <Footer/>
    </DarkModeProvider>
    </HashRouter>
   </> 
  );
}

export default App;
