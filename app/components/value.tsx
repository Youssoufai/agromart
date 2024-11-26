import { BsBuilding } from "react-icons/bs";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

const Value = () => {
    return (
        <>
            <section className="h-screen p-7">
                {/*    <div className="space-y-4 px-9">
                    <h1 className="text-4xl font-bold">Coming <span className="text-color3">Soon...</span> </h1>
                    <p>Join our waitlist to get exclusive early access and become part of the agricultural revolution. Be the first to know when we launch!</p>
                </div>
                <section>
                    <h1 className="text-4xl font-bold text-center">Get Early Access</h1>
                </section> */}

                {/*   <section className="waitlist-section text-center">
                    <h1 className="text-4xl font-bold mb-4">Be Part of the Revolution</h1>
                    <p className="text-lg text-gray-600">
                        Join our waitlist to get exclusive early access and updates about the AgriTech Marketplace.
                    </p>
                    <form className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
                        <input
                            type="email"
                            className="w-full md:w-auto px-4 py-2 border rounded-lg text-color focus:outline-none focus:ring-2 focus:ring-color3"
                            placeholder="Enter your email"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-color3 text-white font-semibold rounded-lg shadow-md hover:bg-color3-dark focus:outline-none focus:ring-2 focus:ring-color3"
                        >
                            Join Waitlist
                        </button>
                    </form>
                    <ul className="mt-4 text-gray-600 text-center space-y-2">
                        <li>✅ Early access to the platform</li>
                        <li>✅ Exclusive updates and features</li>
                        <li>✅ Be part of the future of agriculture</li>
                    </ul>
                </section> */}
                <div className="text-center space-y-3">
                    <h1 className="text-4xl font-bold text-center">Join the <span className="text-color3">Waitlist</span></h1>
                    <h2>Be Part Of The Revolution</h2>
                    <p className="text-lg text-gray-600">
                        Join our waitlist to get exclusive early access and updates about the AgriTech Marketplace.
                    </p>
                </div>
                <div className="flex flex-col space-y-4 mt-6">
                    <section className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color3" />
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-[500px] pl-10 pr-4 py-2 border rounded-lg text-color focus:outline-color3 focus:ring-2 focus:ring-color3"
                        />
                    </section>

                    <section className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color3" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-[500px] pl-10 pr-4 py-2 border rounded-lg text-color focus:outline-color3 focus:ring-2 focus:ring-color3"
                        />
                    </section>

                    <section className="relative">
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color3" />
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-[500px] pl-10 pr-4 py-2 border rounded-lg text-color focus:outline-color3 focus:ring-2 focus:ring-color3"
                        />
                    </section>

                    <section className="relative">
                        <BsBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color3" />
                        <select
                            defaultValue=""
                            className="w-[500px] pl-10 pr-4 py-2 border rounded-lg text-color focus:outline-color3 focus:ring-2 focus:ring-color3 bg-white"
                        >
                            <option value="" disabled>Select your category</option>
                            <option value="farmer">Farmer</option>
                            <option value="consumer">Consumer/Family</option>
                            <option value="company">Company</option>
                        </select>
                    </section>
                    <div>
                        <button className="bg-color3 px-36 py-2 rounded-md text-white">Join Our Waitlist</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Value;