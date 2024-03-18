import { useState } from "react";
import { FaUserCircle, FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";



const Header = () => {
    const [toggleValue, setToggleValue] = useState(true);
    const [togglePro, setTogglepro] = useState(true)
    const toggleBar = () => {
        setToggleValue(!toggleValue);
    }
    const toggleProfile = () => {
        setTogglepro(!togglePro)
    }
    return (
        <header className="container mx-auto mt-5 px-5 lg:px-0">
            <nav className="flex justify-between items-center">
                <div className="">
                    <div onClick={toggleBar} className="block lg:hidden">
                        {
                            toggleValue ? <FaBars className="text-4xl"></FaBars> : <FaTimes className="text-4xl"></FaTimes>
                        }


                    </div>
                    <img className="w-[80px] hidden lg:block" src="../../public/favicon.png" alt="" />
                </div>

                <div className={`absolute lg:static ${!toggleValue ? 'top-20 left-14 rounded-2xl text-white bg-purple-500 p-5' : 'hidden lg:block'}`}>
                    <ul className="lg:flex items-center gap-5 text-xl">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <FaUserCircle onClick={toggleProfile} className="text-4xl cursor-pointer"></FaUserCircle>
                    <div className={`absolute  ${togglePro ? 'block right-10 lg:right-52 top-20' : 'hidden'}`}>
                        <div className="bg-purple-500 text-white p-6 rounded-xl">
                            <p><a href="#">Edit Profile</a></p>
                            <p><a href="#">Log Out</a></p>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;