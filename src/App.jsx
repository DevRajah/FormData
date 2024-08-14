import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './FormPage';
import DisplayPage from './DisplayPage';

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/display" element={<DisplayPage />} />
      </Routes>
    
  );
};

export default App;