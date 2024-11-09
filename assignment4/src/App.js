import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          22100014, Shinyeob Kang
        </p>
        <a
          className="App-link"
          href="https://github.com/corkang"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <br/>
        <a
          className="App-link"
          href="https://hisnet.handong.edu/"
        >
          Hisnet
        </a>
      </header>
    </div>
  );
}

export default App;
