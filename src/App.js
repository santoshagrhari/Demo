import './css/style.css'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Graph from './components/Graph';
import CSV from './components/CSV';

function App() {
  return (

    <div >
    
    
      <Router>
     
        <Routes>       

          <Route exact path="/" element={<Login />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Graph" element={<Graph />} />
          <Route exact path="/CSV" element={<CSV />} />
        </Routes>
       
      
     
      </Router>

    </div>

  );
}

export default App;

