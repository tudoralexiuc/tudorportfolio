import AnimatedRoutes from './components/AnimatedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

import Hotjar from '@hotjar/browser';

const siteId = 5153122;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
