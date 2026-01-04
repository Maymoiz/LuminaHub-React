import React, { useEffect, useState } from "react";
import "./dashboard.css";

function Dashboard() {
  const [streak, setStreak] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/streak")
      .then(res => res.json())
      .then(data => setStreak(data.streak));

    fetch("http://localhost:5000/api/leaderboard")
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  const increaseStreak = () => {
    fetch("https://lumina-hub-lpmm.onrender.com/api/streak", { method: "POST" })
      .then(res => res.json())
      .then(data => setStreak(data.streak));
  };

  const addPlayer = () => {
    const newPlayer = {
      name: `Player${players.length + 1}`,
      points: Math.floor(Math.random() * 150)
    };
    fetch("https://lumina-hub-lpmm.onrender.com/api/leaderboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlayer)
    })
      .then(res => res.json())
      .then(data => setPlayers(data));
  };

  return (
    <section className="dashboard container mt-4">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card p-4 shadow">
            <h2>Demo Dashboard</h2>
            <p><strong>Sample AI Note:</strong> Photosynthesis converts light energy into chemical energy.</p>

            {/* Flashcard */}
            <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
              <div className="card-inner">
                <div className="card-front">Q: What is the powerhouse of the cell?</div>
                <div className="card-back">A: Mitochondria</div>
              </div>
            </div>

            {/* Streak Counter + Progress Bar */}
            <p><strong>Progress:</strong> 🔥 {streak}-day streak</p>
            <button className="btn btn-success mb-3" onClick={increaseStreak}>Add Study Day</button>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: `${Math.min(streak * 10, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card p-4 shadow">
            <h3>Leaderboard</h3>
            <table className="table table-striped">
              <thead className="table-dark">
                <tr><th>Rank</th><th>Name</th><th>Points</th></tr>
              </thead>
              <tbody>
                {players
                  .sort((a, b) => b.points - a.points)
                  .map((p, i) => (
                    <tr key={i}><td>{i + 1}</td><td>{p.name}</td><td>{p.points}</td></tr>
                  ))}
              </tbody>
            </table>
            <button className="btn btn-primary" onClick={addPlayer}>Add Random Player</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;