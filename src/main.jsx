import { createRoot } from 'react-dom/client';
import App from './App'; // import a component
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

/*
const flowers = ["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"]; // array

// Without JSX
const element1 = React.createElement("h1", {}, "Programming with Harsh");
const element2 = React.createElement("ul", {}, flowers.map((item, index) => React.createElement("li", { key: index }, item)));

// With JSX, we can write HTML in Javascript
const element3 = <h1>Programming with Harsh</h1>;
const element4 = <ul>
  {flowers.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
*/

createRoot(document.getElementById('root')).render(
    <App />
)