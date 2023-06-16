// import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const data = localStorage.getItem('data');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <footer className='bg-slate-600 text-white'>
      <div className='px-14 py-7'>
        <div className='flex justify-between items-center mb-7'>
          <h1 className='text-lg'>JEWEPE Mading</h1>
          <div className='text-lg'>
            <h3>Sosial Media</h3>
            <div className='flex justify-center gap-3 items-center'>
              <BsInstagram className='inline-block' />
              <BsWhatsapp className='inline-block' />
              <BsFacebook className='inline-block' />
            </div>
          </div>
          {data ? (
            <div className='flex flex-col'>
              <p>
                <Link to='/createmading'>Buat Mading</Link>
              </p>
              <p>
                <Link to='/report'>Laporan</Link>
              </p>
              <p>
                <button
                  className='bg-transparent outline-none border-none'
                  onClick={handleLogout}>
                  Logout
                </button>
              </p>
            </div>
          ) : (
            <div className='text-lg'>
              <p>
                <Link to='/'>Beranda</Link>
              </p>
              <p>
                <Link to='/login'>Login</Link>
              </p>
            </div>
          )}
        </div>
        <p className='text-center text-sm'>
          &copy; Copyright JEWEPE Mading, 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
