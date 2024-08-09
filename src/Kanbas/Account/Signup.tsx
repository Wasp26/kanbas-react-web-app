import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Signup() {
  const dispatch = useDispatch();
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const signup = async () => {
  
    try {
      await client.signup(user);
     
      const currentUser = await client.signin({
        username: user.username,
        password: user.password,
      });

      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.response ? error.response.data.message : error);
    }
  };
  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      <form onSubmit={signup}>
        {errorMessage && (
          <div
            id="wd-signup-error-message"
            className="wd-error alert alert-danger mb-2 mt-2"
          >
            {errorMessage}
          </div>
        )}
        <input
          required
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="wd-username form-control mb-2"
          placeholder="username"
        />
        <input
          required
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          className="wd-password form-control mb-2"
          placeholder="password"
        />
        <input
          required
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          className="wd-first-name form-control mb-2"
          placeholder="First Name"
        />
        <input
          required
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          className="wd-last-name form-control mb-2"
          placeholder="Last Name"
        />
        <input
          required
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="wd-email form-control mb-2"
          placeholder="email"
        />
        <input
          required
          type="date"
          value={user.dob}
          onChange={(e) => setUser({ ...user, dob: e.target.value })}
          className="wd-dob form-control mb-2"
        />
        <select
          className="wd-role form-control mb-2"
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        >
          <option value="STUDENT">Student</option>
          <option value="TA">Teaching Assistant</option>
          <option value="FACULTY">Faculty</option>
        </select>
        <button type="submit" className="wd-signup-btn btn btn-primary mb-2">
          Sign up
        </button>
        <br />
        <Link to="/Kanbas/Account/Signin" className="wd-signin-link">
          Sign in
        </Link>
      </form>
    </div>
  );
}
