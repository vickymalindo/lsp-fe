import axios from 'axios';
import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Create = () => {
  const [judul, setJudul] = React.useState('');
  const [deskripsi, setDeskripsi] = React.useState('');
  const [gambar, setGambar] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('judul', judul);
    formData.append('deskripsi', deskripsi);
    formData.append('gambar', gambar);

    try {
      const res = await axios.post(
        import.meta.env.VITE_BASE_URL + 'mading/create',
        formData
      );
      const { status } = res.data;
      if (status === 200) {
        alert('Berhasil tambah mading');
      }
    } catch (error) {
      alert('Gagal tambah mading');
    }
  };

  return (
    <div>
      <Navbar />
      <Link to='/admin' className='p-3 inline-block'>
        <BsArrowLeftShort className='font-bold w-12 h-12' />
      </Link>
      <div className='w-full h-[550px] flex justify-center items-center'>
        <form
          onSubmit={handleSubmit}
          className='border border-slate-400 p-4 rounded-md'>
          <h3 className='font-bold text-center text-3xl'>Buat Form</h3>
          <div className='group relative w-72 md:w-80 lg:w-96 mb-3'>
            <label className='block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400'>
              Judul
            </label>
            <input
              type='text'
              className='peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border border-slate-300'
              onChange={(e) => setJudul(e.target.value)}
            />
          </div>
          <div className='group relative w-72 md:w-80 lg:w-96 mb-3'>
            <label className='block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400'>
              Deskripsi
            </label>
            <input
              type='text'
              className='peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border border-slate-300'
              onChange={(e) => setDeskripsi(e.target.value)}
            />
          </div>
          <div className='group relative w-72 md:w-80 lg:w-96 mb-3'>
            <label className='block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400'>
              Foto
            </label>
            <input
              type='file'
              className='peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400'
              onChange={(e) => setGambar(e.target.files[0])}
            />
          </div>
          <button
            type='submit'
            className='bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded'>
            Buat
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Create;
