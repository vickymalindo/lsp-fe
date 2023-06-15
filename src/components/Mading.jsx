// import React from 'react'

import { BsSearch } from 'react-icons/bs';
import Card from './Card';

const Mading = (datas) => {
  return (
    <div>
      <h1 className='text-center font-bold text-3xl'>Mading</h1>
      <div className='px-12 py-5'>
        <div className='w-full flex justify-end max-h-max mb-7'>
          <div className='flex w-[251px] border border-slate-400 rounded-lg overflow-hidden pl-3'>
            <input
              type='text'
              className='border-none outline-none inline-block h-14'
            />
            <div className='bg-slate-300 w-14 h-14 flex justify-center items-center text-lg cursor-pointer'>
              <BsSearch />
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center flex-wrap'>
          {datas.datas.map((val) => {
            return (
              <Card
                data={val}
                key={val.id}
                onClick={(id) => datas.onClick(id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mading;
