import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submit(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all fields");
    } else {
      console.log(name, " ", email, " ", password);
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
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
        <h1>Registration</h1>
        <form onSubmit={submit}>
          <hr />
          <label id="icon" htmlFor="name">
            <i className="fa fa-user"></i>
          </label>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
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
              Already have an account. 
              <Link to="/login">Login Now</Link>.
            </p>
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </>
  );
}
