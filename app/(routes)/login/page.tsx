"use client";

import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useAppDispatch, useAppSelector } from "../../_store/store";
import imagePath from "@/app/_assets/bg.jpg";
import { loginUser } from "@/app/_store/auth/actions";
import { useRouter } from "next/navigation";

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const error = useAppSelector((state) => state.auth.error);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  }, [enqueueSnackbar, error]);

  return (
    <div
      style={{
        backgroundImage: `url(${imagePath.src})`,
        backgroundSize: "cover",
      }}
      className="flex w-full min-h-screen items-center justify-center"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(loginUser({ username, password }));
        }}
        className="bg-white border-4 border-gray-600 w-4/5 2xl:w-1/3 flex flex-col py-16 px-24 justify-center space-y-10 items-stretch shadow-xl"
      >
        <h1 className="text-ephesis text-8xl text-gray-700 text-center">
          Login
        </h1>
        <div className="flex flex-col space-y-2">
          <label className="text-2xl">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="border-4 border-gray-600 focus:border-emerald-600 rounded-2xl px-4 py-4"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-2xl">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border-4 outline-none border-gray-600 focus:border-emerald-600 rounded-2xl px-4 py-4"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="text-emerald-500 px-8 py-4 text-2xl shadow-lg border-4 border-gray-600"
          type="submit"
        >
          Submit
        </button>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-lg text-gray-700">
            Don&apos;t have an account?
          </span>
          <button
            className="text-lg text-emerald-500"
            onClick={() => {
              router.push("/register");
            }}
            type="button"
          >
            Create it
          </button>
        </div>
      </form>
    </div>
  );
}
