import "./styles.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <SearchEngine />
      
      <footer>
        <br />
        This app was coded by Mozhdeh Matalebi and is open-sourced on
        <a
          href="https://github.com/GildaMti/reactWeather"
          target="_blank"
          rel="noreferrer"
        >
           Github
        </a>
      </footer>
    </div>
  );
}
