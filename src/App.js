import React from 'react';

function Food(props) {
  return <h3>I like {props.favorite}</h3>;
}

function App() {
  return (
    <div>
      <h1>hello world</h1>
      <Food favorite="kimchi" />
      <Food favorite="ramen" />
      <Food favorite="samgiopsal" />
      <Food favorite="chukumi" />
    </div>
    );
}

export default App;
