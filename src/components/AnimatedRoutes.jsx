import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Resume from './Resume';
import { AnimatePresence } from 'framer-motion';
import Personal from './Personal';
import Shardfinders from './Shardfinders';
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
        <Route path="/shardfinders" element={<Shardfinders />} />
        <Route path="/tuinexpress" element={<Tuinexpress />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
