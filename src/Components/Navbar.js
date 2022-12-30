import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar-bg  bg-violet-700 text-violet-50 h-20 shadow-md shadow-violet-200 border-b-2 border-violet-200 flex justify-center items-center">
      <div className="navbar container mx-auto flex items-center justify-between">
        <div className="left">
          <span className="text-xl font-semibold ">
            teach <span className="text-orange-500">Alpha</span>
          </span>
        </div>
        <div className="right flex items-center gap-5">
          <Link to="/" className="nav-link duration-300">
            Home
          </Link>
          <Link to="/products" className="nav-link  duration-300">
            products
          </Link>
          <Link to="/cart">
            <span className="cart-icon relative">
              <BsCart3 />
              <span className="cart-count absolute -top-2 -right-3 font-xs bg-orange-600 h-5 w-5 rounded-full flex items-center justify-center font-medium">
                10
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
