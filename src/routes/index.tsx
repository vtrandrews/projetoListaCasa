import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import ListaPresentes from '../pages/ListaPresentes';

export const AppRoutes = () => {
  return(
    <Routes>
      <Route path='/lista-de-presentes' element={<ListaPresentes />} />
      <Route path='/' element={<Home />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}