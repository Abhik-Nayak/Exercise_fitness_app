import React from 'react';
// import {BrowswerRouter as Router, Route, Switch} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail';
import "./App.css"
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  )
}

export default App