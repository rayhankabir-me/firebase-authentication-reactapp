import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { passwordReset } from "../firebase";

export default function Reset() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = async (event) => {
    event.preventDefault();

    try {
      await passwordReset(email);
      toast.success("Reset Pasword Email Sent..", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "light",
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <form className="register-form" action="#">
          <div>
            <h1>Reset Password</h1>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button
            className="mt-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleReset}
          >
            Send Email
          </button>

          <p className="my-2">
            Dont have account?{" "}
            <NavLink to="/register" className="underline">
              Register Now
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
}
