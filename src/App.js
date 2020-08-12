import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
    console.log("token here===>", token);
  }, []);

  return (
    <div className="app">{token ? <h1>Logged in bro</h1> : <Login />}</div>
  );
}
export default App;
