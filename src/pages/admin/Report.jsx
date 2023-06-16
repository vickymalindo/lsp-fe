import axios from 'axios';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Report = () => {
  const [datas, setDatas] = React.useState([]);
  const [dataComment, setDataComment] = React.useState([]);

  const getData = async () => {
    const res = await axios.get(import.meta.env.VITE_BASE_URL + 'mading/all');
    const resComments = await axios.get(
      import.meta.env.VITE_BASE_URL + 'komentar/all'
    );
    const { data } = res.data;
    setDataComment(resComments.data.data);
    setDatas(data);
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
                <th>No Id_Mading</th>
                <th>Judul</th>
                <th>Deskripsi</th>
                <th>Gambar</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((val) => {
                return (
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.judul}</td>
                    <td>{val.deskripsi}</td>
                    <td>
                      <img
                        src={val.gambar}
                        alt='gambar'
                        className='w-24 h-24 block m-auto'
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className='px-14 py-7'>
        <h2 className='font-bold text-2xl mb-4'>List Komentar</h2>
        <div>
          <table className='mx-auto'>
            <thead>
              <tr>
                <th>No Id_Mading</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Komentar</th>
              </tr>
            </thead>
            <tbody>
              {dataComment.map((val) => {
                return (
                  <tr key={val.id}>
                    <td>{val.id_mading}</td>
                    <td>{val.nama}</td>
                    <td>{val.email}</td>
                    <td>{val.komentar}</td>
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

export default Report;
