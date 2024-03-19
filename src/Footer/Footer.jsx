import { FaFacebook } from "react-icons/fa6";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="mt-[100px] bg-success text-white py-20">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
                <div className="space-y-5 flex flex-col items-center">
                    <img className="w-[100px]" src="https://i.postimg.cc/y87vDHpp/favicon.png" alt="" />
                    <h2 className="text-4xl lg:text-5xl font-bold italic">Mobile Shop BD</h2>
                </div>
                <div>
                    <h3 className="text-xl lg:text-2xl border-b-4 py-2">Connect wit Us</h3>
                    <div className="flex justify-between text-2xl mt-3 border-b-2 py-2">
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaLinkedin ></FaLinkedin>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;