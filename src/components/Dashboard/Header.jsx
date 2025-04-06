import PropTypes from 'prop-types';

export default function Header({toggleMenu}){

    return (
        <header className="flex items-center h-20 px-6 sm:px-10 ">
          <div className="mr-8 cursor-pointer" onClick={toggleMenu}>
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
</svg>
          </div>
        </header>
      );
}

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired
};