import { useState } from 'react';
import './app.css';
import Card from './component/card/Card';
import Navbar from './component/navbar/Navbar';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState('');

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          <Card />
          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
