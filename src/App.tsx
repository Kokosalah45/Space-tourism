import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header font-bold">
        <p>Hello Vite + React!</p>
      </header>
    </div>
  );
}

export default App;
