import { BsBuilding } from "react-icons/bs";
import { FaArrowRight, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

const Value = () => {
    return (
        <section className="min-h-screen p-4 md:p-7 flex items-center justify-center">
            <div className="w-full max-w-[500px] mx-auto">
                <div className="text-center space-y-3 mb-8">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Join the <span className="text-color3">Waitlist</span>
                    </h1>
                    <h2 className="text-lg md:text-xl">
                        Be Part Of The Revolution
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 px-4">
                        Join our waitlist to get exclusive early access and updates about the Agro<span className="text-color3">Mart</span> Marketplace.
                    </p>
                </div>

                <div className="flex items-center flex-col space-y-6 md:space-y-8 px-4">
                    {/* Name Input */}
                    <section className="relative w-full">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color3" />
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full pl-10 pr-4 py-2 md:py-3 placeholder:text-color border rounded-lg text-color focus:outline-color3 focus:ring-2 focus:ring-color3"
                        />
                    </section>

                    {/* Email Input */}
                    <section className="relative w-full">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color3" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-10 pr-4 py-2 md:py-3 border placeholder:text-color rounded-lg text-color focus:outline-color3 focus:ring-2 focus:ring-color3"
                        />
                    </section>

                    {/* Phone Input */}
                    <section className="relative w-full">
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color3" />
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full pl-10 pr-4 py-2 md:py-3 border placeholder:text-color rounded-lg text-color focus:outline-color3 focus:ring-2 focus:ring-color3"
                        />
                    </section>

                    {/* Category Select */}
                    <section className="relative w-full">
                        <BsBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color3" />
                        <select
                            defaultValue=""
                            className="w-full pl-10 pr-4 py-2 md:py-3 border rounded-lg text-color placeholder:text-color focus:outline-color3 focus:ring-2 focus:ring-color3 bg-white"
                        >
                            <option value="" disabled>Select your category</option>
                            <option value="farmer">Farmer</option>
                            <option value="consumer">Consumer/Family</option>
                            <option value="company">Company</option>
                        </select>
                    </section>

                    {/* Submit Button */}
                    <div className="w-full">
                        <button className="w-full bg-color3 py-2 md:py-3 rounded-md text-white flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
                            Join Our Waitlist
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Value;