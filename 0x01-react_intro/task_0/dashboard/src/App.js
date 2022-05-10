import './App.css';
import logo from './holberton-logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr />
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <hr id="footer-margin"/>
      <footer className="App-footer">
        <p>
          <em>Copyright 2020 - holberton School</em>
        </p>
      </footer>
    </div>
  );
}

export default App;
