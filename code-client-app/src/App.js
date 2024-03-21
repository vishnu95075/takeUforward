import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Dashbord from "./components/Dashbord";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/dashboarrd' Component={Dashbord} />
      </Routes>
    </Router>
  );
}

export default App;
