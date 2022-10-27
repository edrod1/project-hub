import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Projects from './components/Projects';
import CreateProject from './components/CreateProject';
import Footer from './Footer';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/create" element={<CreateProject />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
