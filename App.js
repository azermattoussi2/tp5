import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Enseignant from './components/Enseignant';
import Etudiant from './components/Etudiant';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/enseignant" element={<Enseignant />} />
        <Route path="/etudiant" element={<Etudiant />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
