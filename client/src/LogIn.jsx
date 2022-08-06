import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submit(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all fields");
    } else {
      console.log(email, " ", password);
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      alert(data.status);
    }
  }
  return (
    <>
      <br />
      <br />
      <br />
      <div className="main-block">
        <h1>Login</h1>
        <form onSubmit={submit}>
          <hr />
          <label id="icon" htmlFor="name">
            <i className="fa fa-envelope"></i>
          </label>
          <input
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label id="icon" htmlFor="name">
            <i className="fa fa-unlock-alt"></i>
          </label>
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            autoComplete="true"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <hr />
          <div className="btn-block">
            <p>
              Don't have an account.
              <Link to="/signup">Create One</Link>.
            </p>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}
