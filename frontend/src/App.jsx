import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Almora from './pages/Almora.jsx';
import Nainital from './pages/Nainital.jsx';
import CustomPackages from './pages/CustomPackages.jsx';
import Gallery from './pages/Gallery.jsx';
import Booking from './pages/Booking.jsx';
import Auth from './pages/Auth.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/almora" element={<Almora />} />
        <Route path="/nainital" element={<Nainital />} />
        <Route path="/custom-packages" element={<CustomPackages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </Layout>
  );
}
