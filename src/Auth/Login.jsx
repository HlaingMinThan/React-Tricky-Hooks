import React, { useReducer } from "react";
import reducer from "./reducer";

export default function Login() {
  let [state, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
    isLoading: false,
    isError: null,
  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form action="">
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                value={state.email}
                onChange={(e) => {
                  dispatch({
                    type: "handleInput",
                    field: "email",
                    value: e.target.value,
                  });
                }}
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {state.email}
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                value={state.password}
                onChange={(e) => {
                  dispatch({
                    type: "handleInput",
                    field: "password",
                    value: e.target.value,
                  });
                }}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {state.password}
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Login
              </button>
              <a
                href="/forget-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
