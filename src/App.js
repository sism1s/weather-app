import { useState, useEffect } from "react";
import { getWeather } from "./adapters/openweathermap";
import "./App.css";
import Layout from "./components/Layout.jsx";

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
      <Layout />
    </div>
  );
}

export default App;
