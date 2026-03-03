import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Works from './components/Works';
import Footer from './components/Footer';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout component to wrap pages
const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

// Home Page
const Home = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Works />
    <Testimonials />
  </>
);

// Other pages
const ServicesPage = () => (
  <div className="bg-white">
    <div className="pt-40 pb-20 container text-center">
      <h1 className="text-6xl font-[950] text-rio-dark mb-4 tracking-tighter uppercase">Our Services</h1>
      <p className="text-gray-400 font-semibold text-xl italic">Solutions that scale with your business</p>
    </div>
    <Services />
  </div>
);

const AboutPage = () => (
  <div className="bg-white px-2">
    <div className="pt-40 pb-20 container text-center">
      <h1 className="text-6xl font-[950] text-rio-dark mb-4 tracking-tighter uppercase">About Rio</h1>
      <p className="text-gray-400 font-semibold text-xl italic">Success is measured by dedication</p>
    </div>
    <About />
  </div>
);

const WorksPage = () => (
  <Works />
);

const ContactPage = () => (
  <div className="bg-white">
    <div className="pt-40 pb-24 container text-center">
      <h1 className="text-6xl font-[950] text-rio-dark mb-6 tracking-tighter uppercase">Contact Us</h1>
      <p className="text-gray-400 font-semibold text-xl italic mb-12">Let's start a conversation about your project</p>
      {/* Footer is already at the bottom via PageLayout */}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/blogs" element={<Home />} /> {/* Temporary redirect */}
          <Route path="/contact" element={<ContactPage />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<Home />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
