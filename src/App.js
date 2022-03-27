import React from "react";
const api = {
  key: 'f6c6fd6a1fea58169efb15024e950112',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="App">
      <main className="search-box">
        <input className="search-bar" type="text" placeholder="Search..." />
      </main>
    </div>
  );
}

export default App;
