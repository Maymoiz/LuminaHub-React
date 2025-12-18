import React from "react";
import "./LandingPage.css";

export default function LandingPage({ onStartDemo }) {
  return (
    <div className="landing">
      <header className="hero">
        <h1>LuminaHub</h1>
        <p>Turning Study Chaos into Clarity</p>
        <button onClick={onStartDemo}>Try the Demo</button>
      </header>

      <section className="value-props">
        <div className="prop">
          <h3>📑 AI Notes</h3>
          <p>Generate concise study notes instantly.</p>
        </div>
        <div className="prop">
          <h3>📊 Progress Tracking</h3>
          <p>Stay consistent with streaks and dashboards.</p>
        </div>
        <div className="prop">
          <h3>🏆 Gamification</h3>
          <p>Earn rewards and compete with peers.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 LuminaHub – Built by Moisha Ndlovu</p>
      </footer>
    </div>
  );
}