import React from 'react';
import logo from './logo.svg';
import './App.css';
// rct app can be represented as a tree of rct component.
//This is a react root component.
// rct component is represented as funtion and which returns something similar to HTML
// It is called functional component, It should start from uppercase and return JSX and exported from a file.
export const App = () => {
  const header = (
    <div className="App">
      <h1>
        Hello! sword-art-gamers
      </h1>   
      <h3>Welcome</h3> 
    </div>
  );
  const characters = [
    {name: "sam", health: 122, fraction: "abc", weapon: "ki", damagePerHit: 20},
    {name: "unn", health: 142, fraction: "hff", weapon: "ki", damagePerHit: 20},
    {name: "bhg", health: 172, fraction: "cne", weapon: "ki", damagePerHit: 20},
    {name: "eng", health: 124, fraction: "jdn", weapon: "ki", damagePerHit: 20},
    ]
    return (
      <ul>
        {characters.map(character => (
        <li key={character.name}>
          <h3>{character.name}</h3>
          <p>{character.health}</p>
          <p>{character.fraction}</p>
        </li>  
        ))}
      </ul>
    )

  const swordArtHeader = React.createElement(
    'h1'
    ,{className: 'greeting'},
    'Hello, World!'
  );
  return header;


    }
    export default App;