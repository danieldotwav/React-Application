import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing build environment for react app
        </p>
        <a
          className="App-link"
          href="https://github.com/danieldotwav"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
