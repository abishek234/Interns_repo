
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/View/Aboutview';
import Services from './components/View/ServiceView';
import Contact from "./components/View/ContactView";
import Login from './components/login';
import Footer from './components/ui/Footer';
import Home from './components/Home';
import Details from './components/Dashboard/Details';
import Dashboard from './components/Dashboard/Dashboard';
import Process from './components/Process';
import Career from './components/Career';
import View from './components/Dashboard/View';
import DomainJobs from './components/DomainJob';
import Stats from './components/Dashboard/Stats';
import ProductList from './components/Dashboard/ProductList';
import ProductsAdd from './components/Dashboard/AddProduct';
import Products from '../src/components/Products';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Form from './components/form';
import Features from "./components/Features"
function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
      const fetchJobs = async () => {
          try {
              const response = await axios.get('http://localhost:3000/jobs');
              setJobs(response.data);
          } catch (error) {
              console.error('Failed to fetch jobs:', error);
          }
      };

      fetchJobs();
  }, []);
  return (
    <Router>

      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> {/* Use element prop to render components */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={ 
          <>
            <Services />
            <Features />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/view" element={<View/>} />
        <Route path="/form" element={<Form />} />
        <Route path="/process" element={<Process />} />
        <Route path="/dashboard/*" element={<Dashboard jobs={jobs} />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/career" element={<Career jobs={jobs} />} />
        <Route path="/jobs/:domain" element={<DomainJobs jobs={jobs} />} />
        <Route path="/addproduct" element={<ProductsAdd />} />
        <Route path="/productview" element={<ProductList/>} />
        <Route path="/product" element={<Products />} />

        

        <Route path="*" element={<Footer />} /> {/* A catch-all route for the Footer */}
      </Routes>
    </Router>
  );
}

export default App;
