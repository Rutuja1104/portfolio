import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componets/Home';
import Skills from './Componets/Skills';
import Projects from './Componets/Projects';
import About from './Componets/About';
import Contact from './Componets/Contact';
import Layout from './Componets/Layout';
import Sidebar from './Componets/Sidebar';

function App() {
  return (
    <>
        <BrowserRouter>
    {/* <Sidebar> */}

            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="skills" element={<Skills />} />
                <Route path="projects" element={<Projects />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
            {/* </Sidebar> */}
          </BrowserRouter>
    </>
  );
}

export default App;
