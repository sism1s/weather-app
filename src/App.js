import { useState, useEffect } from "react";
import { getWeather } from "./adapters/openweathermap";
import "./App.css";

function App() {
  const [state, setState] = useState({});
  useEffect(() => {
    getWeather()
      .then((res) => setState(res.data))
      .catch((err) => alert(err));
  }, []);

  console.log("state", state);
  return (
    <div className="App">
      <h2>test</h2>
    </div>
  );
}

export default App;
