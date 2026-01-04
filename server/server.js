const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Mock data
let streak = 5;
let players = [
  { name: "Alice", points: 120 },
  { name: "Bob", points: 95 },
  { name: "Charlie", points: 80 }
];

// Routes
app.get("/api/streak", (req, res) => {
  res.json({ streak });
});

app.post("/api/streak", (req, res) => {
  streak++;
  res.json({ streak });
});

app.get("/api/leaderboard", (req, res) => {
  res.json(players.sort((a, b) => b.points - a.points));
});

app.post("/api/leaderboard", (req, res) => {
  const newPlayer = req.body;
  players.push(newPlayer);
  res.json(players.sort((a, b) => b.points - a.points));
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));