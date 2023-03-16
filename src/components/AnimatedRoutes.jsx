import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Resume from './Resume';
import { AnimatePresence } from 'framer-motion';
import Personal from './Personal';
import Formula1 from './Formula1';
import Tuinexpress from './Tuinexpress';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/formula1" element={<Formula1 />} />
        <Route path="/tuinexpress" element={<Tuinexpress />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
