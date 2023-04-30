import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Launches } from './src/screens';

const CurrentlyRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Launches />} />
    </Routes>
  );
};

export default CurrentlyRoutes;