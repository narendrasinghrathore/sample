import React, { useState } from "react";
import { Link } from "react-router-dom";
/**
 * Create account component
 */
const CreateAccount = React.memo(() => {
  /**
   * Confirm if password and confirm password are same.
   */
  const [passwordInvalid, updatePasswordInvalid] = useState(false);

  /**
   * Form state
   */
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  /**
   * Update form state
   * @param {event} e
   */
  const updateForm = (e) => {
    if (!e && !e.target && !e.target.value) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /**
   * Verify password and confirm password matches
   * @param {val} val 
   */
  const verifyPassword = (val) => {
    if (!val) return;
    updatePasswordInvalid(val !== form.password);
  };

  /**
   * Log data in alert
   */
  const log = () => {
    alert(JSON.stringify(form))
  };

  return (
    <div className="create-form-container">
      <h1 className="uppercase"> Create An Account</h1>
      <form className="create-form">
        <div className="input-control">
          <label>First name*</label>
          <input name="firstName" type="text" onChange={(e) => updateForm(e)} />
        </div>

        <div className="input-control">
          <label>Last name*</label>
          <input name="lastName" type="text" onChange={(e) => updateForm(e)} />
        </div>
        <div className="input-control grid-email">
          <label>Email address*</label>
          <input
            name="email"
            type="email"
            autoComplete="username"
            onChange={(e) => updateForm(e)}
          />
        </div>

        <div className="input-control">
          <label>Password*</label>
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            onChange={(e) => updateForm(e)}
          />
        </div>
        <div className="input-control">
          <label>Re-enter password*</label>
          <input
            type="password"
            name="confirmPassword"
            autoComplete="new-password"
            onChange={(e) => verifyPassword(e.target.value)}
          />
        </div>

        {passwordInvalid && (
          <div className="warning">
            <h4>Password not matching</h4>
          </div>
        )}
        <div className="input-control terms">
          <label>
            <input type="checkbox" />
            Agree to terms and conditions
          </label>
        </div>
      </form>

      <div className="input-control">
        <button type="button" className="primary" onClick={log}>
          CREATE ACCOUNT
        </button>
      </div>

      <footer>
        Already a member? Log in <Link to="/">here?</Link>
      </footer>
    </div>
  );
});
export default CreateAccount;
