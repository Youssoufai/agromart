import { AiFillTikTok } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <section className="bg-[#F2F5FA] h-full p-7">
                <section className="flex flex-col h-screen items-center justify-center max-w-4xl mx-auto space-y-8">
                    <div className="text-center">
                        <h1 className="text-4xl mb-4">Subscribe To Our <span className="text-color3">Newsletter</span></h1>
                        <p className="text-gray-600 mb-8 max-w-2xl">
                            Stay connected with the latest updates, exclusive offers, and valuable insights! Subscribe to our newsletter and be the first to know about new features, market trends, and opportunities that can benefit you. Join our community and never miss out on what's happening in the world of agriculture and innovation.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 w-full max-w-2xl">
                        <div className="flex-1">
                            <section className="relative">
                                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full pl-10 pr-4 py-3 border placeholder:text-gray-400 rounded-lg text-color focus:outline-color3 focus:ring-2 focus:ring-color3"
                                />
                            </section>
                        </div>
                        <button className="bg-color3 px-8 py-3 rounded-lg text-white flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
                            Subscribe
                            <FaArrowRight className="text-sm" />
                        </button>
                    </div>
                </section>
                <section className="mt-20 border-t border-gray-200 py-8">
                    <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-gray-600 text-sm">
                            © 2024 All Rights Reserved.
                        </div>
                        <div>
                            <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                                <li className="hover:text-color3 cursor-pointer transition-colors">How it Works</li>
                                <li className="hover:text-color3 cursor-pointer transition-colors">Blog</li>
                                <li className="hover:text-color3 cursor-pointer transition-colors">Contact</li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-4 text-gray-600">
                            <BsInstagram className="w-5 h-5 hover:text-color3 cursor-pointer transition-colors" />
                            <FaXTwitter className="w-5 h-5 hover:text-color3 cursor-pointer transition-colors" />
                            <AiFillTikTok className="w-5 h-5 hover:text-color3 cursor-pointer transition-colors" />
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Footer;