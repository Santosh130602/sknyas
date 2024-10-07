import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Ensure proper import

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/users/login', {
        email,
        password,
      });

      if (response.data.token) {
        // Decode token to extract userId and isAdmin/userRole
        const decodedToken = jwtDecode(response.data.token);
        const userId = decodedToken.id; // Adjust based on how userId is stored in the token
        const isAdmin = response.data.isAdmin;

        // Store userId, isAdmin (userRole), and token in localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('isAdmin', isAdmin);

        // Console log userId and userRole (isAdmin)
        console.log('User ID:', userId);
        console.log('User Role (isAdmin):', isAdmin);

        // Redirect based on user role
        if (isAdmin === true) {
          navigate(`/admin-dashbord-kutumb`);
        } else {
          navigate('/');
        }

        // Optionally reload the page to reflect the login state
        window.location.reload();
      }
    } catch (err) {
      console.error('Login error:', err); // Log error for debugging
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full" style={{ fontFamily: 'Gowun Batang, serif' }}>
        <h2 className="text-4xl font-bold mb-6 text-center" style={{ fontFamily: 'Gowun Batang, serif' }}>Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Forgot Password button */}
          <div className="flex justify-between mb-4">
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
