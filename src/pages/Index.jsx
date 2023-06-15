import axios from 'axios';
import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Mading from '../components/Mading';
import Navbar from '../components/Navbar';

const Index = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const res = await axios.get(import.meta.env.VITE_BASE_URL + 'mading/all');
    const { data } = res.data;
    setData(data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Mading datas={data} onClick={(id) => console.log(id)} />
      <Footer />
    </>
  );
};

export default Index;
