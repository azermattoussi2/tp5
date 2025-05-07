import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'; // Importation du fichier CSS

export default function Navbar() {
  const navigate = useNavigate();
  const type = localStorage.getItem('type_utilisateur');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('type_utilisateur');
    navigate('/login');
  };

  return (
    <nav>
      <Link to="/home">Accueil</Link>

      {type === 'enseignant' && (
        <Link to="/enseignant">Espace Enseignant</Link>
      )}

      {type === 'etudiant' && (
        <Link to="/etudiant">Espace Étudiant</Link>
      )}

      <button onClick={handleLogout} className="logout-btn">
        Déconnexion
      </button>
    </nav>
  );
}
