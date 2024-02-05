

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './src/Komponenter/Navbar';
import Landingpage from './src/Komponenter/Pages/Landingpage';
import AboutMe from './src/Komponenter/Pages/AboutMe';
import Projects from './src/Komponenter/Pages/Projects';
import CV from './src/Komponenter/Pages/CV';
import Halsoappen from './src/Komponenter/Pages/ProjectMap/Halsoappen';
import Coolfashion from './src/Komponenter/Pages/ProjectMap/Coolfashion';
import Friendlycorner from './src/Komponenter/Pages/ProjectMap/Friendlycorner';
import Skvaller from './src/Komponenter/Pages/ProjectMap/Skvaller';
import Stadafint from './src/Komponenter/Pages/ProjectMap/Stadafint';
import Tentamenbloggen from './src/Komponenter/Pages/ProjectMap/Tentamenbloggen';
import Todo from './src/Komponenter/Pages/ProjectMap/Todo';
import Vidici from './src/Komponenter/Pages/ProjectMap/Vidici';


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="" index element={<Landingpage/>} />
          <Route path="/OmMig" element={<AboutMe/>} />
          <Route path="/CV" element={<CV/>} />
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
    </BrowserRouter>
   </> 
  );
}

export default App;
