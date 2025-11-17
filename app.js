import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.username || !form.email || !form.password || !form.confirm) {
      setMessage("Please fill in all fields ❌");
      return;
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      setMessage("Invalid email format ❌");
      return;
    }

    if (form.password !== form.confirm) {
      setMessage("Passwords do not match ❌");
      return;
    }

    setMessage(`Registration successful 🎉 Welcome, ${form.username}!`);
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />

      <input
        type="password"
        name="confirm"
        placeholder="Confirm Password"
        value={form.confirm}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Register</button>

      {message && <p className="msg">{message}</p>}
    </div>
  );
}
