// import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const data = localStorage.getItem('data');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <header className='shadow-lg bg-slate-200'>
      <div className='px-14 py-7 flex justify-between items-center'>
        <h1 className='font-bold text-xl'>JEWEPE Mading</h1>
        <nav>
          <ul className='list-none flex justify-center items-center gap-4'>
            {data ? (
              <>
                <li className='text-lg font-semibold'>
                  <Link to='/createmading'>Buat Mading</Link>
                </li>
                <li className='text-lg font-semibold'>
                  <button
                    className='bg-transparent outline-none border-none'
                    onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className='text-lg font-semibold'>
                  <Link to='/'>Beranda</Link>
                </li>
                <li className='text-lg font-semibold'>
                  <Link to='/login'>Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
