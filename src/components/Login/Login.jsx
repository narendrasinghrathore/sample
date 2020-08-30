import React from "react";
import { Link } from "react-router-dom";
/**
 * Login Component
 */
const Login = React.memo(() => {
  /**
   * Email
   */
  const [email, setEmail] = React.useState("");
  /**
   * Password
   */
  const [password, setPassword] = React.useState("");

  /**
   * Log data in alert
   */
  const log = () => {
    alert(JSON.stringify({ email, password }));
  };
  return (
    <div className="login-form">
      <h1 className="uppercase">Login</h1>
      <form className="form">
        <div className="input-control">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
          />
        </div>

        <div className="input-control">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-passoword"
          />
        </div>

        <div className="input-control">
          <button type="button" className="primary" onClick={log}>
            Login
          </button>
        </div>
      </form>
      <div>
        <span className="link forgot-password">Forgot your password?</span>
      </div>
      <div>
        Not a memeber yet? Create an account <Link to="/create">here?</Link>
      </div>
    </div>
  );
});
export default Login;
