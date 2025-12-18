
import React, { useState } from 'react';
import './App.css';
import Features from './features';
import Dashboard from './dashboard';
import LandingPage from './landingPage';

export default function App() {
  const [demoStarted, setDemoStarted] = useState(false);

  return (
    <div className="App">
      {demoStarted ? (
        <>
          <header>
            <h1>LuminaHub Demo</h1>
            <p>Turning Study Chaos into Clarity</p>
          </header>

          <Features />
          <Dashboard />

          <section className="cta">
            <h2>Join the Beta</h2>
            <button>Sign Up</button>
          </section>
        </>
      ) : (
        <LandingPage onStartDemo={() => setDemoStarted(true)} />
      )}
    </div>
  );
}



