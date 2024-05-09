import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  const navItems = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/">About</NavLink></li>
    </>
  );

  const handleLogout = () => {
    logOut()
    .then(() => {
      navigate('/login')
      console.log('user signout');
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div className="navbar bg-base-100 my-5 md:my-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        {
          user?.email ? <button onClick={handleLogout} className="btn btn-primary">Logout</button>
          : 
          <Link to='/login' className="btn btn-primary">Login</Link>
        }
      <button className="btn btn-outline btn-warning">Appoinment</button>
      </div>
    </div>
  );
};

export default Navbar;
