import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Komponenter/Navbar';
import Landingpage from './Komponenter/Pages/Landingpage';
import AboutMe from './Komponenter/Pages/AboutMe';
import Projects from './Komponenter/Pages/Projects';
import CV from './Komponenter/Pages/CV';
import Halsoappen from './Komponenter/Pages/ProjectMap/Halsoappen';
import Coolfashion from './Komponenter/Pages/ProjectMap/Coolfashion';
import Friendlycorner from './Komponenter/Pages/ProjectMap/Friendlycorner';
import Skvaller from './Komponenter/Pages/ProjectMap/Skvaller';
import Stadafint from './Komponenter/Pages/ProjectMap/Stadafint';
import Tentamenbloggen from './Komponenter/Pages/ProjectMap/Tentamenbloggen';
import Todo from './Komponenter/Pages/ProjectMap/Todo';
import Vidici from './Komponenter/Pages/ProjectMap/Vidici';


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
