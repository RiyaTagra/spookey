import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Boo! Welcome to Spookey: An interactive platform to learn about all things cybersecurity!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h1>Welcome to the Spookey App!</h1>
        <p>Your one-stop solution for all things spooky.</p>
      </main>
    </div>
  );
}

export default App;
