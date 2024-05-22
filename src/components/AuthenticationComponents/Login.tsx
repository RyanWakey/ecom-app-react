import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error('Failed to login', error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <img src="/images/Emazon.png" alt="Emazon Logo" className="w-44 mb-4" />
      <div className="bg-white border border-gray-300 p-6 w-full max-w-sm shadow-md rounded-md">
        <h1 className="text-2xl font-normal mb-6 text-gray-800">Sign-In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="h-10 mb-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="h-10 mb-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Login
          </button>
        </form>
        <p className="text-xs text-gray-600 mt-4">
          By continuing, you agree to Emazon's Conditions of Use and Privacy Notice.
        </p>
        <div className="mt-4 text-sm">
          <a href="#" className="text-blue-600 hover:underline">Need help?</a>
        </div>
        <div className="mt-4 text-sm">
          <p className="text-gray-600">Don't have an account?
          <Link to="/register" className="text-blue-600 hover:underline"> Create your Emazon account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
