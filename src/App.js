import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Stockholm"/>
      <footer>
        This project was coded by {""}
        <a href="https://farahalh.com/" target="_blank" rel="noreferrer">
          Farah Alhaddad
        </a>
         {""}and is{""}
         <a href="https://github.com/Farahalh" target="_blank" rel="noreferrer">
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}
