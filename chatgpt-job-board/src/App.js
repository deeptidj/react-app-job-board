import logo from './logo.svg';
import './App.css';
import TreeBoard from "./TreeBoard";
import JobBoard from "./JobBoard";

function App() {
  return (
    <div className="App">
      <div>
        <TreeBoard />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deepti, Learn React.
        </a>
      </header>
      <div>
        <JobBoard />
      </div>
    </div>
  );
}

export default App;
