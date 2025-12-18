import React, {useState} from "react";
import './dashboard.css';

export default function Dashboard() {
    const [streak, setStreak] = useState(5);
      const [flipped, setFlipped] = useState(false);
      const [players, setPlayers] = useState([
        { name: "Alice", points: 120 },
        { name: "Bob", points: 95 },
        { name: "Charlie", points: 80 }
      ]);

const increaseStreak = () => setStreak(streak + 1);
const names = ["Diana", "Ethan", "Fatima", "George", "Hana"];
const addPlayer = () => {
  const newPlayer = {
    name: names[Math.floor(Math.random() * names.length)],
    points: Math.floor(Math.random() * 150)
  };
  setPlayers([...players, newPlayer]);
};




  return (
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
          <div className="progress-fill" style={{ width: `${Math.min(streak * 10, 100)}%` }}
></div>
        </div>

        {/* Leaderboard */}
        <h3>Leaderboard</h3>
        <table>
          <thead>
            <tr><th>Rank</th><th>Name</th><th>Points</th></tr>
          </thead>
          <tbody>
  {players
    .sort((a, b) => b.points - a.points)
    .map((p, i) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{p.name}</td>
        <td>{p.points}</td>
      </tr>
    ))}
</tbody>
        </table>
        <button onClick={addPlayer}>Add Random Player</button>
      </section>
  )};
