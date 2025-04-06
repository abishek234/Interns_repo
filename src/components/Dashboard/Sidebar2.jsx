import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
export default function Sidebar2({ menu }) {

  const Navigate = useNavigate();

  const logout = () => {
    // Clear user data from state or local storage here
    localStorage.clear(); // Example: clearing local storage

    // Redirect to login page
    Navigate('/login');
    toast.success("Logout Successfully")
  }
  Sidebar2.propTypes = {
    menu: PropTypes.bool.isRequired,
  };
  
  return (

    <aside className={`flex flex-col ${menu ? '' : 'hidden sm:flex sm:flex-col'} sm:w-full md:w-80 lg:w-auto`}>
      {/* Sidebar content */}
      <a href="#" className="inline-flex items-center justify-center h-20 w-full bg-blue-600 hover:bg-blue-500 focus:bg-blue-500">
        {/* SVG icon and span */}
        <img src={logo} alt="" width={50} />

      </a>
      <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
        <nav className="flex flex-col mx-4 my-6 space-y-4">
          {/* Navigation links */}
          <a href="#" className={`inline-flex items-center py-3 ${menu ? 'justify-start' : 'justify-center'} hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2`} aria-hidden="true">

            <span className="ml-2" style={{ display: menu ? 'block' : 'none' }}>ADMIN</span>
          </a>
          <NavLink to="/dashboard" className={`inline-flex items-center py-3 text-blue-600 bg-white  hover:text-gray-400 hover:bg-gray-700 focus:text-yellow-400 focus:bg-white-700  rounded-lg px-2 ${menu ? 'justify-start' : 'justify-center'}`} aria-hidden="true">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="ml-2" style={{ display: menu ? 'block' : 'none' }}>Dashboard</span>
          </NavLink>
          <NavLink to="/details" className={`inline-flex items-center py-3 text-blue-600 bg-white  hover:text-gray-400 hover:bg-gray-700 focus:text-yellow-400 focus:bg-white-700  rounded-lg px-2 ${menu ? 'justify-start' : 'justify-center'}`} aria-hidden="true">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="ml-2" style={{ display: menu ? 'block' : 'none' }}>Details</span>
          </NavLink>
          <NavLink to="/view" className={`inline-flex items-center py-3 text-blue-600 bg-white  hover:text-gray-400 hover:bg-gray-700 focus:text-yellow-400 focus:bg-white-700  rounded-lg px-2 ${menu ? 'justify-start' : 'justify-center'}`} aria-hidden="true">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="ml-2" style={{ display: menu ? 'block' : 'none' }}>View</span>
          </NavLink>
          <NavLink to="/stats" className={`inline-flex items-center py-3 text-blue-600 bg-white  hover:text-gray-400 hover:bg-gray-700 focus:text-yellow-400 focus:bg-white-700  rounded-lg px-2 ${menu ? 'justify-start' : 'justify-center'}`} aria-hidden="true">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="ml-2" style={{ display: menu ? 'block' : 'none' }}>Stats</span>
          </NavLink>
          <button onClick={logout} className={`inline-flex items-center py-3   hover:text-gray-400 hover:bg-gray-700 focus:text-yellow-400 focus:bg-white-700  rounded-lg px-2 ${menu ? 'justify-start' : 'justify-center'}`} aria-hidden="true">
            <NavLink >
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H6zm10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 13H10a1 1 0 1 1 0-2h8.586l-2.293-2.293a1 1 0 0 1 0-1.414z"/>
</svg>

              <span className="ml-1" style={{ display: menu ? 'block' : 'none' }}>Logout</span>
            </NavLink>
          </button>
        </nav>
      </div>
    </aside>
  );
}