import { useState } from "react";
import { FaUserCircle, FaTimes, FaRegEdit } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { MdArrowOutward, MdKeyboardArrowRight } from "react-icons/md";
import { GoXCircle } from "react-icons/go";
import { CiLogin } from "react-icons/ci";
const Header = () => {
    const [toggleValue, setToggleValue] = useState(true);
    const [togglePro, setTogglepro] = useState(true)
    const [modal, setModal] = useState(true)
    const [sinUp, setSignUP] = useState(true)
    const [profile, setProfile] = useState(true)



    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    const toggleBar = () => {
        setToggleValue(!toggleValue);
    }
    const toggleProfile = () => {
        setTogglepro(!togglePro)
        setProfile(true)
    }
    const handelSigUp = () => {
        setSignUP(!sinUp)
    }
    const handelModal = () => {
        setModal(!modal)
        setSignUP(!sinUp)
    }
    const handelClose = () => {
        setModal(!modal)
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
                    <img className="w-[80px] hidden lg:block" src="https://i.postimg.cc/y87vDHpp/favicon.png" alt="" />
                </div>

                <div className={`z-10 absolute lg:static ${!toggleValue ? 'top-20 left-14 rounded-2xl text-white bg-purple-500 p-5' : 'hidden lg:block'}`}>
                    <ul className="lg:flex items-center gap-5 text-xl">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="z-10">
                    <FaUserCircle onClick={toggleProfile} className="text-4xl cursor-pointer"></FaUserCircle>
                    <div className={`absolute  ${!togglePro ? 'block right-10 lg:right-52 top-20' : 'hidden'}`}>
                        <div className="space-y-2 bg-purple-500 text-white p-6 rounded-xl *:flex *:gap-2 *:items-center">
                            <p className="hover:border-2 px-3 py-2 rounded-md"><a onClick={() => setProfile(!profile)} href="#">Edit Profile</a><FaRegEdit></FaRegEdit></p>
                            <p className="hover:border-2 px-3 py-2 rounded-md"><a href="#">Log Out</a><CiLogin></CiLogin></p>
                        </div>

                    </div>
                    <div className={`text-xl absolute right-10 lg:right-[380px] top-56 lg:top-[120px] bg-gray-400 p-6 rounded-xl ${!profile ? 'block' : 'hidden'}`}>
                        <h1 className="text-2xl font-bold">Your Profile Info</h1>
                        <hr />
                        <p className="font-bold mt-4">Name: <span className="text-blue-900 font-normal">{name}</span></p>
                        <p className="font-bold">E-mail: <span className="text-blue-900 font-normal">{email}</span></p>
                        <p className="font-bold">Password: <span className="text-blue-900 font-normal">{password}</span></p>
                    </div>
                </div>
            </nav>



            {/* ---------------banner Section hare----------- */}
            <section className="bg-[url('https://i.postimg.cc/vHmrTrGb/banner.jpg')] py-10 lg:py-[200px] bg-no-repeat bg-cover object-center rounded-lg flex justify-center items-center mt-10">
                <div className=" lg:backdrop-blur-sm p-10 flex flex-col items-center justify-center gap-5 rounded-3xl">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white">Now <span className="text-red-500">30%</span> OFF</h1>
                    <p className="text-center lg:text-justify text-slate-300 lg:w-[600px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur ipsum exercitationem doloribus dolores inventore amet. Quis unde aspernatur debitis ad tempora illo officia! Illum, error! Eveniet, quia. Deserunt, voluptas. Rem.</p>

                    <button onClick={handelSigUp} className="flex gap-2 items-center px-5 py-2 rounded-md text-white font-bold bg-green-600 hover:bg-green-900">Sign UP <MdArrowOutward className="text-xl"></MdArrowOutward> </button>
                </div>



                <div className={`absolute ${!sinUp ? 'block' : 'hidden'} bg-sky-500 px-10 py-5 rounded-md w-[350px] lg:w-auto`}>
                    <form className="flex flex-col gap-2">
                        <h1 className="text-4xl font-bold text-white mb-4 text-center">WelCome to Mobile Shop</h1>

                        <label className="text-xl font-bold text-white" htmlFor="">Name</label>


                        <input
                            onChange={(e) => setName(e.target.value)}
                            className="placeholder:text-white placeholder:text-xs px-5 py-2 rounded-xl bg-transparent border-2 border-gray-400 text-white text-xl outline-none lg:w-[400px]"
                            type="text"
                            placeholder="Name" required />


                        <label className="text-xl font-bold text-white" htmlFor="">Email</label>

                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="placeholder:text-white placeholder:text-xs px-5 py-2 rounded-xl bg-transparent border-2 border-gray-400 text-white text-xl outline-none lg:w-[400px]"
                            type="email"
                            placeholder="E-mail" required />


                        <label className="text-xl font-bold text-white" htmlFor="">Password</label>

                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="placeholder:text-white placeholder:text-xs px-5 py-2 rounded-xl bg-transparent border-2 border-gray-400 text-white text-xl outline-none lg:w-[400px]"
                            type="password"
                            placeholder="Password" required />



                        <button onClick={handelModal} className={`${!name || !email || !password ? 'btn-disabled' : ''} mt-5 flex gap-2 justify-center items-center px-5 py-2 rounded-md text-white font-bold bg-green-600 hover:bg-green-900`}>Submit <MdKeyboardArrowRight></MdKeyboardArrowRight></button>

                        <GoXCircle onClick={handelSigUp} className="absolute text-3xl -right-5 -top-5 lg:-right-7 lg:-top-5 lg:text-white"></GoXCircle>
                    </form>
                </div>

                <div className={`${!modal ? 'block' : 'hidden'} absolute bg-purple-500 flex flex-col justify-center items-center gap-2 px-10 py-8 rounded-3xl`}>
                    <div className="border-[10px] rounded-full border-green-600 size-[200px]">
                        <img src="https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif" alt="" />
                    </div>
                    <h1 className="text-xl font-bold text-white">Successfully SinUP...Login Now</h1>
                    <button className="px-5 py-2 rounded-md text-white font-bold bg-green-600 hover:bg-green-900" onClick={handelClose}>Close</button>
                </div>
            </section>

        </header>
    );
};

export default Header;