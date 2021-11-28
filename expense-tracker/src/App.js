import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import { Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <switch>
        
      </switch>
     <Home />
    </Router>
  );
}

export default App;
