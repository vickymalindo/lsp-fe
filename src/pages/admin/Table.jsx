import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Table = () => {
  const [datas, setDatas] = React.useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const res = await axios.get(import.meta.env.VITE_BASE_URL + 'mading/all');
    const { data } = res.data;
    setDatas(data);
  };

  const handleDetail = (id) => {
    navigate(`/detailmading/${id}`);
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(
      import.meta.env.VITE_BASE_URL + 'mading/delete/' + id
    );
    const { status } = res.data;
    if (status === 200) {
      alert('Berhasil hapus mading');
      getData();
    } else {
      alert('Gagal hapus mading');
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className='px-14 py-7'>
        <h2 className='font-bold text-2xl mb-4'>List Mading</h2>
        <div>
          <table className='mx-auto'>
            <thead>
              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Deskripsi</th>
                <th>Gambar</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((val, index) => {
                return (
                  <tr key={val.id}>
                    <td>{index + 1}</td>
                    <td>{val.judul}</td>
                    <td>{val.deskripsi}</td>
                    <td>
                      <img
                        src={val.gambar}
                        alt='gambar'
                        className='w-24 h-24 block m-auto'
                      />
                    </td>
                    <td>
                      <button
                        className='mx-3 p-2 bg-yellow-400 text-yellow-800 font-bold rounded-lg'
                        onClick={() => handleDetail(val.id)}>
                        Detail
                      </button>
                      <button
                        className='mr-3 p-2 bg-red-400 text-red-800 font-bold rounded-lg'
                        onClick={() => handleDelete(val.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Table;
