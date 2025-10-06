import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShortenerForm from '../modules/Shortener/ShortenerForm';
import CounterForm from '../modules/Counter/CounterForm';
import UnshortenForm from '../modules/Unshorten/UnshortenForm';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ShortenerForm />} />
      <Route path="/counter" element={<CounterForm />} />
      <Route path="/unshorten" element={<UnshortenForm />} />
    </Routes>
  );
};

export default AppRoutes;
