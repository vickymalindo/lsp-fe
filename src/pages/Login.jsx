import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './../components/Footer';
import Navbar from './../components/Navbar';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      import.meta.env.VITE_BASE_URL + 'admin/login',
      {
        email,
        password,
      }
    );

    const { status, data } = await res.data;
    if (status === 200) {
      localStorage.setItem('data', data);
      navigate('/admin');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex items-center h-screen w-full'>
        <div className='w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto'>
          <span className='block w-full text-xl uppercase font-bold mb-4'>
            Login
          </span>
          <form className='mb-4' onSubmit={handleSubmit}>
            <div className='mb-4 md:w-full'>
              <label className='block text-xs mb-1'>Email</label>
              <input
                className='w-full border rounded p-2 outline-none focus:shadow-outline'
                type='email'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-6 md:w-full'>
              <label className='block text-xs mb-1'>Password</label>
              <input
                className='w-full border rounded p-2 outline-none focus:shadow-outline'
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded'>
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
