import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'

import './App.css';
import Dashboard from './pages/Dashboard';
import Navbar from './layouts/Navbar';
import Idolaunchpad from './pages/Idolaunchpad';

function App() {

  return (
    <BrowserRouter>
      <StickyNav length='300'>
        <Navbar />
      </StickyNav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/idolaunchpad" element={<Idolaunchpad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
