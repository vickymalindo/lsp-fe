import axios from 'axios';
import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = React.useState({});

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
      <Link to='/admin' className='p-3 ml-3 inline-block'>
        <BsArrowLeftShort className='font-bold w-12 h-12' />
      </Link>
      <div className='px-14 py-8'>
        <h4 className='font-bold text-3xl'>Detail Mading</h4>
        <div>
          <img
            src={data.gambar}
            alt='react'
            className='w-full h-[220px] rounded-lg my-12'
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
            {data?.komentars?.length === 0 ? (
              <p>Komentar Tidak Ada</p>
            ) : (
              data?.komentars?.map((val) => {
                return (
                  <div
                    className='px-6 py-4 border border-slate-300 rounded-lg mt-3'
                    key={val.id}>
                    <p className='font-semibold'>{val.name}</p>
                    <p className='mb-2 font-semibold'>{val.email}</p>
                    <p>{val.komentar}</p>
                    <button
                      className='ml-auto block bg-red-400 text-red-800 font-bold px-3 py-2 rounded-md'
                      onClick={() => handleDelete(val.id)}>
                      Hapus
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
