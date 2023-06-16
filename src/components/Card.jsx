import { useNavigate } from 'react-router-dom';

const Card = (data) => {
  const navigate = useNavigate();

  return (
    <div
      className='w-52 border border-slate-300 rounded-lg cursor-pointer p-2'
      onClick={() => navigate(`/detail/${data.data.id}`)}>
      <img src={data.data.gambar} alt='React' />
      <div className='p-4'>
        <p className='text-xl font-bold'>{data.data.judul}</p>
        <p className='w-full whitespace-nowrap overflow-hidden text-ellipsis'>
          {data.data.deskripsi}
        </p>
      </div>
    </div>
  );
};

export default Card;
