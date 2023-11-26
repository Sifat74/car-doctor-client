import { NavLink } from "react-router-dom";
import { BsJustify } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import '../Navbar/Navbar.css'
import logo from '../../../assets/logo.svg'

const Navbar = () => {
    const links = <>
        <NavLink className="hover:text-xl" to={'/'}>Home</NavLink>
        <NavLink className="hover:text-xl" to={'/about'}>About</NavLink>
        <NavLink className="hover:text-xl" to={'/services'}>Services</NavLink>
        <NavLink className="hover:text-xl" to={'/blog'}>Blog</NavLink>
        <NavLink className="hover:text-xl" to={'/contact'}>Contact</NavLink>
    </>
    return (
        <nav className="h-20 lg:h-28 mt-4">
            {/* Full Screen */}
            <div className="container mx-auto hidden lg:flex items-center justify-between">
                {/* Left section */}
                <div className="h-28 flex items-center gap-6  text-lg">
                    <img src={logo} className="w-32" />
                </div>
                {/* Mid section */}
                <div className="flex gap-10 font-semibold text-[18px]">
                    {
                        links
                    }
                </div>
                {/* End section */}
                <div className="flex items-center gap-2">
                    <HiOutlineShoppingBag className="text-2xl mr-3"></HiOutlineShoppingBag>
                    <IoSearchOutline className="text-2xl mr-5"></IoSearchOutline>
                    <button className="btn btn-outline border-[#FF3811] text-[#FF3811] text-[18px] font-semibold hover:bg-[#FF3811] hover:border-none">Appointment</button>
                </div>
            </div>
            {/* Small devices */}
            <div className="h-20 mx-6 flex lg:hidden items-center justify-between">
                {/* Left section */}
                <div className="flex items-center gap-2">
                    <div className="dropdown">
                        <label tabIndex={0} className=" m-1">
                            <BsJustify className="text-3xl text-[#FF3811] "></BsJustify></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-center">
                            {links}
                        </ul>
                    </div>
                    <img src={logo} className="w-14" />
                </div>
                {/* End section */}
                <div className="flex items-center">
                    <div className="flex items-center gap-3">
                        <HiOutlineShoppingBag className="text-xl"></HiOutlineShoppingBag>
                        <IoSearchOutline className="text-xl"></IoSearchOutline>
                        <button className="btn btn-outline border-[#FF3811] text-[#FF3811] font-semibold hover:bg-[#FF3811] hover:border-none">Appointment</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;