import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const SLIDES = [
  {
    title: "Today's workout plan",
    text: "We're gonna do 3 fundamental exercises",
  },
  {
    title: "First 10 pushups",
    text: "Do 10 reps. Remember about full range of motion. Don't rush"
  },
  {
    title: "Next 20 squads",
    text: "Squads are important. Remember to keep your back straight"
  },
  {
    title: "Finally 15 sit-ups",
    text: "Slightly bend your knees. Remember about full range of motion"
  },
  {
    title: "Great job!",
    text: "You made it, have a nice day and see you next time"
  }
];

ReactDOM.render(<App slides={SLIDES} />, document.getElementById('root'));
registerServiceWorker();
