import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './About';
import Group from './Group';
import Home from './Home';
import International from './International';
import Resume from './Resume';
import { AnimatePresence } from 'framer-motion';
import Personal from './Personal';
import PReading from './personal/PReading';
import PAnalysis from './personal/PAnalysis';
import PDesign from './personal/PDesign';
import PRetrospective from './personal/PRetrospective';
import PRealisation from './personal/PRealisation';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/group" element={<Group />} />
        <Route path="/international" element={<International />} />
        <Route path="/preading" element={<PReading />} />
        <Route path="/panalysis" element={<PAnalysis />} />
        <Route path="/pdesign" element={<PDesign />} />
        <Route path="/prealisation" element={<PRealisation />} />
        <Route path="/pretrospective" element={<PRetrospective />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
