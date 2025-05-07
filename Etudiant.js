import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Etudiant() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const type = localStorage.getItem('type_utilisateur');
    if (!token || type !== 'etudiant') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="page">
      <h2>Espace Étudiant</h2>
      <p>Vos notes et absences :</p>
      <ul>
        <li>Matière : Mathématiques — Note : 15 — Absences : 1</li>
        <li>Matière : Physique — Note : 14 — Absences : 0</li>
      </ul>
    </div>
  );
}
