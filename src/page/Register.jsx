import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await registerWithEmailAndPassword(email, password);
      console.log(user);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h1>Register Page</h1>
        <form action="#">
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="=password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button onClick={handleSubmit}>Register</button>
        </form>
      </div>
    </>
  );
}
