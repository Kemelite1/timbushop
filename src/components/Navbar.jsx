import { FaUser, FaSearch, FaShoppingCart, FaAngleRight, FaBars, FaBox, FaTimes, FaTruck, FaQuestionCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/emptycart');
  };

  return (
    <nav className="bg-navbg text-baseblack flex items-center justify-between md:gap-2 font-Inter h-[124px] top-0 left-0 z-50 w-full px-4 md:px-8">
      <div className="flex justify-center items-center gap-8" id='main-div'>
        <Link to='/' className='flex items-center'>
          <span className="text-primary font-primary font-bold text-[24px] md:text-4xl whitespace-nowrap ">Timbu cloud shop</span>
        </Link>
      </div>

      <div className='flex md:hidden items-center gap-3' id='hamburger'>
        {isOpen ? (
          <FaTimes onClick={toggleMenu} className='cursor-pointer text-baseblack' />
        ) : (
          <>
            <FaSearch className='text-baseblack' />
            <FaShoppingCart className='text-baseblack' onClick={handleCartClick} />
            <FaBars onClick={toggleMenu} className='cursor-pointer text-baseblack' />
          </>
        )}
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-0 right-0 bg-white h-[861px] w-[220px] max-w-sm shadow-lg z-50 p-4">
          <div className="flex flex-col h-full">
            <div className="flex justify-end">
              <FaTimes onClick={toggleMenu} className='cursor-pointer text-baseblack mb-4' />
            </div>
            <div className="flex flex-col gap-6">
              <div className='flex justify-between items-center'>
                <p>All Products</p>
                <FaAngleRight />
              </div>

              <div className='flex justify-between items-center'>
                <p>Men</p>
                <FaAngleRight />
              </div>

              <div className='flex justify-between items-center'>
                <p>Women</p>
                <FaAngleRight />
              </div>

              <div className='flex justify-between items-center'>
                <p>Kids</p>
                <FaAngleRight />
              </div>
            </div>

            <div className='flex flex-col gap-5 mt-20'>
              <div className='flex gap-4 text-base'>
                <FaUser />
                <p>Login/sign up</p>
              </div>

              <div className='flex gap-4 text-base'>
                <FaBox />
                <p>Order status</p>
              </div>

              <div className='flex gap-4 text-base'>
                <FaTruck />
                <p>Return order</p>
              </div>

              <div className='flex gap-4 text-base'>
                <FaQuestionCircle />
                <p>FAQ</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <ul className="hidden md:flex gap-16 text-sm md:text-xl text-baseblack">
        <li>
          <Link to="/" className={``}>All Products</Link>
        </li>
        <li>
          <Link to="/products" className={``}>Men</Link>
        </li>
        <li>
          <Link to="/about" className={``}>Women</Link>
        </li>
        <li>
          <Link to="/contact" className={``}>
            Kids
          </Link>
        </li>
      </ul>

      <div className="hidden md:flex items-center gap-6" id="interactions">
        <FaSearch />
        <FaUser />
        <FaShoppingCart onClick={handleCartClick} />
      </div>
    </nav>
  );
};

export default Navbar;
