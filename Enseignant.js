import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Enseignant() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const type = localStorage.getItem('type_utilisateur');
    if (!token || type !== 'enseignant') {
      navigate('/login'); // Redirection si non autorisé
    }
  }, [navigate]);

  return (
    <div className="page">
      <h2>Espace Enseignant</h2>
      <p>Bienvenue enseignant. Voici les étudiants et leur état :</p>
      <ul>
        <li>Étudiant : Ali — Note : 16 — Absences : 0</li>
        <li>Étudiant : Salma — Note : 12 — Absences : 1</li>
        <li>Étudiant : Youssef — Note : 14 — Absences : 2</li>
      </ul>
    </div>
  );
}
