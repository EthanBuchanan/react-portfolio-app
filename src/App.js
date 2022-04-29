// MODULES
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


// CSS
import './App.css';



// COMPONENTS
import Header from "./components/Header"
import Main from "./components/Main"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <>

      <Router>

        <Header />
        
        <Routes>

          <Route 
            path="/projects"
            element= {<Main />}
          />
          <Route 
            path="/"
            element= {<AboutMe />}
          />
          <Route 
            path="/contact"
            element= {<Contact />}
          />
          <Route 
            path="/resume"
            element= {<Resume />}
          />
          
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
