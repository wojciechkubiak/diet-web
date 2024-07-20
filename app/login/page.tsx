"use client";

import { useState } from "react";
import { loginUser } from "@/lib/features/auth/actions";
import { useAppDispatch } from "@/lib/store";
import Image from "next/image";
import axios from "axios";

export default function Login() {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-emerald-300 to-emerald-500">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(loginUser({ username, password }));
        }}
        className="bg-white w-[500px] flex flex-col py-8 px-8 justify-center space-y-8 items-stretch shadow-lg"
      >
        <h1 className="text-4xl text-center">Login</h1>
        <div className="flex flex-col space-y-2">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="border-2 focus:border-emerald-400 rounded-lg px-4 py-2"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border-2 focus:border-emerald-400 rounded-lg px-4 py-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-emerald-400 px-8 py-4 text-white text-2xl rounded-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
