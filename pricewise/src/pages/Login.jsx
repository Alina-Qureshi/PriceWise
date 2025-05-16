import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {
 const navigate = useNavigate();

  // State to store email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for error messages
  const [error, setError] = useState('');

  // State to track if login is in progress
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    setError(''); // clear previous errors
    setLoading(true); // show loading state

    // ** Fake login logic **
    // Replace this with a real backend API call later
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password123') {
        setLoading(false);
        navigate('/dashboard'); // redirect after success
      } else {
        setLoading(false);
        setError('Invalid email or password');
      }
    }, 1500);
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-800 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>
         {error && <p className="text-red-600 mb-4">{error}</p>}
         <form onSubmit={handleSubmit} className="space-y-5">
          <div>
  <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
  <input
    type="email"
    placeholder="you@example.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    disabled={loading}
    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
<div>
  <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
  <input
    type="password"
    placeholder="••••••••"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    disabled={loading}
    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

          <div className="text-right text-sm">
            <a href="#" className="text-purple-800 hover:underline">Forgot password?</a>
          </div>
         <button
  type="submit"
  disabled={loading}
  className={`w-full py-2 text-white rounded-lg font-semibold transition duration-200 ${
    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-800 hover:bg-blue-500'
  }`}
>
  {loading? 'Signing In...': 'Sign In'}
</button>

        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{''}
          <Link to="/signup" className="text-purple-800 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
