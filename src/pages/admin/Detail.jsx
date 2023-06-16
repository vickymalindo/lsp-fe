import axios from 'axios';
import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link, useLocation, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Detail = () => {
  const [data, setData] = React.useState({});
  const [openModal, setOpenModal] = React.useState(false);
  const [nama, setNama] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [komentar, setKomentar] = React.useState('');
  const { id } = useParams();
  const location = useLocation();

  const handleSubmit = async () => {
    const id_mading = id;
    const res = await axios.post(
      import.meta.env.VITE_BASE_URL + 'komentar/create',
      { id_mading, nama, email, komentar }
    );
    const { status } = res.data;
    if (status === 200) {
      alert('Berhasil tambah komentar');
      getData();
      setOpenModal((prev) => !prev);
      setNama('');
      setEmail('');
      setKomentar('');
    } else {
      alert('Gagal menambahkan komentar');
    }
  };

  const handleDelete = async (idComment) => {
    const res = await axios.delete(
      import.meta.env.VITE_BASE_URL + `komentar/delete/${idComment}`
    );
    const { status } = res.data;
    if (status === 200) {
      alert('Berhasil hapus komentar');
      getData();
    } else {
      alert('Gagal hapus komentar');
    }
  };

  const getData = async () => {
    const res = await axios.get(
      import.meta.env.VITE_BASE_URL + 'mading/find/' + id
    );
    const { data } = res.data;
    setData(data);
  };

  React.useEffect(() => {
    (async function () {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL + 'mading/find/' + id
      );
      const { data } = res.data;
      setData(data);
    })();
  }, [id]);

  return (
    <div>
      <Navbar />
      <Link
        to={location.pathname.includes('detailmading') ? '/admin' : '/'}
        className='p-3 ml-3 inline-block'>
        <BsArrowLeftShort className='font-bold w-12 h-12' />
      </Link>
      <div className='px-14 py-8'>
        <h4 className='font-bold text-3xl'>Detail Mading</h4>
        <div>
          <img
            src={data.gambar}
            alt='react'
            className='w-full h-[220px] rounded-lg my-12 border border-slate-400'
          />
          <div className='mb-5'>
            <h4 className='font-bold text-xl'>Judul</h4>
            <p>{data.judul}</p>
          </div>
          <div className='mb-8'>
            <h4 className='font-bold text-xl'>Deskripsi</h4>
            <p>{data.deskripsi}</p>
          </div>
          <div>
            <h4 className='font-bold text-xl'>Komentar</h4>
            <p className='text-lg'>
              Jumlah Komentar : {data?.komentars?.length}
            </p>
            {location.pathname.includes('detailmading') ? null : (
              <button
                className='inline-block underline text-blue-400 text-end w-full'
                onClick={() => setOpenModal((prev) => !prev)}>
                Tambahkan Komentar
              </button>
            )}
            {data?.komentars?.length === 0 ? (
              <p className='font-bold text-center mt-3'>Komentar Tidak Ada</p>
            ) : (
              data?.komentars?.map((val) => {
                return (
                  <div
                    className='px-6 py-4 border border-slate-300 rounded-lg mt-3'
                    key={val.id}>
                    <p className='font-semibold'>{val.nama}</p>
                    <p className='mb-2 font-semibold'>{val.email}</p>
                    <p>{val.komentar}</p>
                    {location.pathname.includes('detailmading') ? (
                      <button
                        className='ml-auto block bg-red-400 text-red-800 font-bold px-3 py-2 rounded-md'
                        onClick={() => handleDelete(val.id)}>
                        Hapus
                      </button>
                    ) : null}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <Footer />
      <div
        className={
          'fixed z-10 overflow-y-auto top-0 w-full left-0' +
          (openModal ? ' block' : ' hidden')
        }>
        <div className='flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <div className='fixed inset-0 transition-opacity'>
            <div className='absolute inset-0 bg-gray-900 opacity-75' />
          </div>
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen'>
            &#8203;
          </span>
          <div
            className='inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-headline'>
            <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <label>Nama</label>
              <input
                type='text'
                className='w-full bg-gray-100 p-2 mt-2 mb-3'
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
              />
              <label>Email</label>
              <input
                type='email'
                className='w-full bg-gray-100 p-2 mt-2 mb-3'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Komentar</label>
              <input
                type='text'
                className='w-full bg-gray-100 p-2 mt-2 mb-3'
                value={komentar}
                onChange={(e) => setKomentar(e.target.value)}
                required
              />
            </div>
            <div className='bg-gray-200 px-4 py-3 text-right'>
              <button
                type='button'
                className='py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2'
                onClick={() => setOpenModal((prev) => !prev)}>
                Cancel
              </button>
              <button
                type='button'
                className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2'
                onClick={handleSubmit}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
