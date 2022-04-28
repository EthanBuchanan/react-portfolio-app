// MODULES
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// CSS
import './App.css';



// COMPONENTS
import Header from "./components/Header"
import Main from "./components/Main"
import AboutMe from "./components/Main"

function App() {
  return (
    <>

      <Router>

        <Header />
        
        <Routes>

          <Route 
            path="/"
            element= {<Main />}
          />
          <Route 
            path="/about_me"
            element= {<AboutMe />}
          />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
