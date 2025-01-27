
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const navOptions = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/order/salad">Order Food</Link></li>
          
            
        </>
    );

    const authOptions = user ? (
        <div className="relative">
            <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
            >
                {user.photoURL ? (
                    <img
                        src={user.photoURL}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full mr-2"
                    />
                ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center mr-2">
                        <span className="text-white">{user.displayName?.charAt(0)}</span>
                    </div>
                )}
            </div>
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white text-black text-center shadow-lg rounded-md z-50">
                    <ul className="p-2">
                        <li className="px-4 ">
                            <span className="font-bold">{user.displayName}</span>
                        </li>
                        <li className="px-4 ">
                            <Link to={isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}>
                                Dashboard
                            </Link>
                        </li>
                        <li
                            className="px-10 pb-2 cursor-pointer"
                            onClick={handleLogOut}
                        >
                            Logout
                        </li>
                    </ul>
                </div>
            )}
        </div>
    ) : (
        <li><Link to="/login">Login</Link></li>
    );

    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content text-black mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">FoodHop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navOptions}</ul>
            </div>
            <div className="navbar-end">
            <div className="mr-2 ">
                <Link to="/dashboard/cart">
                    <button className="flex">
                        <FaShoppingCart className="" />
                        <sup className=" ">+{cart.length}</sup>
                    </button>
                </Link>
            </div>
                <ul className="menu menu-horizontal px-1">{authOptions}</ul>
            </div>
        </div>
    );
};

export default NavBar;
