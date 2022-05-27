import './Login.css';

function Login() {
  return (
    <body className="App-body">
      <p>Login to access the full dashboard</p>
      <label>Email:
        <input type="text" name="email" />
      </label>
      <label>Password:
        <input type="password" name="password" />
      </label>
      <button>OK</button>
    </body>
  );
}

export default Login;
