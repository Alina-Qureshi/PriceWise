import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-800 p-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800"
              required
            />
            <div className="mt-1 text-sm">
              <label>
                <input
                  type="checkbox"
                  onChange={() => setShowPassword(!showPassword)}
                  className="mr-1"
                />
                Show Password
              </label>
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Confirm password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800"
              required
            />
            <div className="mt-1 text-sm">
              <label>
                <input
                  type="checkbox"
                  onChange={() => setShowConfirm(!showConfirm)}
                  className="mr-1"
                />
                Show Confirm Password
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-800 hover:bg-blue-500 text-white rounded-md font-semibold transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-800 hover:underline font-medium">
            Login
          </Link
          >
        </p>
      </div>
    </div>
  );
};

export default Signup;
