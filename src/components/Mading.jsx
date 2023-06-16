import React from 'react';

import axios from 'axios';
import { BsSearch } from 'react-icons/bs';
import Card from './Card';

const Mading = () => {
  const [data, setData] = React.useState([]);
  const [dataSearch, setDataSearch] = React.useState(null);
  const [search, setSearch] = React.useState('');

  const handleSearch = () => {
    const dataFilter = data.filter((item) =>
      item.judul.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setDataSearch(dataFilter);
  };

  const getData = async () => {
    const res = await axios.get(import.meta.env.VITE_BASE_URL + 'mading/all');
    const { data } = res.data;
    setData(data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className='text-center font-bold text-3xl'>Mading</h1>
      <div className='px-12 py-5'>
        <div className='w-full flex justify-end max-h-max mb-7'>
          <div className='flex w-[251px] border border-slate-400 rounded-lg overflow-hidden pl-3'>
            <input
              type='text'
              className='border-none outline-none inline-block h-14'
              onChange={(e) => setSearch(e.target.value)}
            />
            <div
              className='bg-slate-300 w-14 h-14 flex justify-center items-center text-lg cursor-pointer'
              onClick={handleSearch}>
              <BsSearch />
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center flex-wrap'>
          {(dataSearch || data).map((val) => {
            return <Card data={val} key={val.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Mading;
