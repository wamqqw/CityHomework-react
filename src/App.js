import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CityInfo from './pages/CityInfo';
import CityImages from './pages/CityImages';
import FamousPlace from './pages/FamousPlace';
import OtherPlaces from './pages/OtherPlaces';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<CityInfo/>}/>
      <Route exact path='/CityImages' element={<CityImages/>}/>
      <Route exact path='/FamousPlace' element={<FamousPlace/>}/>
      <Route exact path='/Others' element={<OtherPlaces/>}/>
    </Routes>
  </Router>
  );
}

export default App;
