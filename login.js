import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Identifiants simulés
  const fakeUser = {
    email: 'azer.mattoussi1@gmail.com',
    password: '123456',
    token: 'fake-jwt-token'
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Vérification locale
    if (email === fakeUser.email && password === fakeUser.password) {
      localStorage.setItem('token', fakeUser.token);
      setMessage('');
      setIsLoggedIn(true);
    } else {
      setMessage("Nom d'utilisateur ou mot de passe incorrect");
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setMessage('Déconnecté.');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>{isLoggedIn ? 'Bienvenue' : 'Connexion'}</h2>
      
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Se connecter</button>
        </form>
      ) : (
        <div>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}
