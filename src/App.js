import React, {useState} from 'react';
import './App.css';
import Features from './features';

export default function App() {

  const [streak, setStreak] = useState(5);
  const [flipped, setFlipped] = useState(false);
  const [players, setPlayers] = useState([
    { name: "Alice", points: 120 },
    { name: "Bob", points: 95 },
    { name: "Charlie", points: 80 }
  ]);

  const increaseStreak = () => setStreak(streak + 1);
  const addPlayer = () => {
    const newPlayer = {
      name: `Player${players.length + 1}`,
      points: Math.floor(Math.random() * 100)
    };
    setPlayers([...players, newPlayer]);
  };

  return (
    <div className="App">
      <header>
        <h1>LuminaHub Demo</h1>
        <p>Turning Study Chaos into clarity</p>
      </header>

      <Features />

      <section className="dashboard">
        <h2>Demo Dashboard</h2>
        <p><strong>Sample AI Note:</strong> Photosynthesis converts light energy into chemical energy.
        </p>

        {/* Flashcard */}
        <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
          <div className="card-inner">
            <div className="card-front">Q: What is the powerhouse of the cell?</div>
            <div className="card-back">A: Mitochondria</div>
          </div>
        </div>

        {/* Streak Counter + Progress Bar */}
        <p><strong>Progress:</strong> 🔥 {streak}-day streak</p>
        <button onClick={increaseStreak}>Add Study Day</button>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${streak * 10}%` }}></div>
        </div>

        {/* Leaderboard */}
        <h3>Leaderboard</h3>
        <table>
          <thead>
            <tr><th>Rank</th><th>Name</th><th>Points</th></tr>
          </thead>
          <tbody>
            {players.map((p, i) => (
              <tr key={i}><td>{i+1}</td><td>{p.name}</td><td>{p.points}</td></tr>
            ))}
          </tbody>
        </table>
        <button onClick={addPlayer}>Add Random Player</button>
      </section>

      <section className="cta">
        <h2>Join the Beta</h2>
        <button>Sign Up</button>
      </section>
    </div>
  );
}




