import { BiWorld } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHandshake, FaWarehouse } from "react-icons/fa";
import { GiFoodChain, GiFoodTruck } from "react-icons/gi";

const Features = () => {
    return (
        <section className="px-4 md:px-12 lg:px-20 py-8 md:py-12">
            <div className="space-y-4 px-4 md:px-20 lg:px-36 text-center">
                <h1 className="font-bold text-2xl md:text-3xl">
                    Why Trade <span className="text-color3">With</span> Us.
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-gray-600">
                    Discover how our platform benefits farmers, businesses, and consumers by creating a more efficient and sustainable agricultural ecosystem
                </p>
            </div>

            <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
                {/* Feature 1 */}
                <div className="text-center flex flex-col items-center space-y-4 p-4">
                    <CiDeliveryTruck className="text-6xl md:text-7xl lg:text-8xl text-color3" />
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                        Efficient Logistics
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-md">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum. Numquam dolorem magni, in enim iusto nam dignissimos officiis corrupti doloribus, iste nostrum harum a cupiditate consequuntur eos atque? Iure?
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="text-center flex flex-col items-center space-y-4 p-4">
                    <img
                        src="basket.jpeg"
                        className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] lg:w-[96px] lg:h-[96px] object-cover"
                        alt="Affordable Food"
                    />
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                        Affordable Healthier Food
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-md">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum. Numquam dolorem magni, in enim iusto nam dignissimos officiis corrupti doloribus, iste nostrum harum a cupiditate consequuntur eos atque? Iure?
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="text-center flex flex-col items-center space-y-4 p-4">
                    <img
                        src="supply-chain.png"
                        className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] lg:w-[96px] lg:h-[96px] object-cover"
                        alt="Supply Chain"
                    />
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                        Reliable Supply
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-md">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum. Numquam dolorem magni, in enim iusto nam dignissimos officiis corrupti doloribus, iste nostrum harum a cupiditate consequuntur eos atque? Iure?
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Features;