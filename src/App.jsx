import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Login from './pages/Login';
import Create from './pages/admin/Create';
import Detail from './pages/admin/Detail';
import Table from './pages/admin/Table';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='login' element={<Login />} />
          <Route path='admin' element={<Table />} />
          <Route path='createmading' element={<Create />} />
          <Route path='detailmading/:id' element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
