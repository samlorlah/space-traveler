import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './pages/Rockets';
import Mission from './components/mission';
import MyProfile from './pages/MyProfile';

const App = () => (
  <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </Router>
  </>
);

export default App;
