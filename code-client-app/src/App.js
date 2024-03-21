import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
