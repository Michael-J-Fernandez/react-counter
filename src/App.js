import { useState } from "react";
import NavBar from "./components/NavBar";
import Stars from "./components/Stars";
import CountDisplay from "./components/CountDisplay";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <div className="controls">

        <Button count={count} setCount={setCount}>
          - 1
        </Button>

        <CountDisplay count={count} />

        <Button count={count} setCount={setCount}>
          + 1
        </Button>
        
      </div>

      <Stars count={count} />
    </div>
  );
}

export default App;
