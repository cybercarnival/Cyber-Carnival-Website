import { auth } from "../firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppContext } from "./context";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [prank, setPrank] = useState(false);
  const { user } = useAppContext();
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        const user = userCredential.user;
        nav("/admin/home");
      })
      .catch((error) => {
        alert("Wrong Credentials");
      });
  };

  if (user) {
    return <Navigate to={"/admin/home"} replace={true} />;
  }
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center  border-black rounded-xl">
      <h1 className="text-4xl font-alumni my-4">ADMIN LOGIN</h1>
      <form
        className="h-72 w-80 border-2 border-black rounded-xl p-6 items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <label
            htmlFor="Team Name"
            className="block mb-2 text-base font-medium text-gray-400"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="email"
            name="Email"
            id="Email"
            className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Team Name"
            className="block mb-2 text-base font-medium text-gray-400"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="Password"
            id="password"
            className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full h-8 bg-slate-700 text-white my-4 rounded-md"
        >
          Login
        </button>
        <a
          className="text-blue-600 underline cursor-pointer"
          onClick={() => {
            setPrank(true);
          }}
        >
          Don't have an account?
        </a>
        <span>{!prank ? "" : ".....Ask Yoga😉"}</span>
      </form>
    </div>
  );
}

export default Login;
