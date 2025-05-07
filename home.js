import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // redirection si pas connecté
    }
  }, [navigate]);

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Bienvenue sur la page d’accueil !</h2>

    </div>
  );
}
