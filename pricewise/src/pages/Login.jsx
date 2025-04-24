import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-800 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>
        <form  className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="text-right text-sm">
            <a href="#" className="text-purple-800 hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-purple-800 hover:bg-blue-500 rounded-lg font-semibold transition duration-200"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-purple-800 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
