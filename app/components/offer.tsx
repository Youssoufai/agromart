import { FaHandshake, FaWarehouse } from "react-icons/fa";

const Offer = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-green-100 to-green-200">
            <div className="container mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 text-center mb-6 md:mb-8">
                    What We Offer
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-green-50 border border-green-300 rounded-xl shadow-lg p-4 md:p-6 text-center hover:shadow-xl transition-shadow">
                        <div className="text-green-600 mb-3 md:mb-4">
                            <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21V3m0 0l-4 4m4-4l4 4" />
                            </svg>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-2">
                            Efficient Logistics
                        </h3>
                        <p className="text-green-600 text-sm md:text-base">
                            Seamless transportation ensuring timely and cost-effective delivery.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-green-50 border border-green-300 rounded-xl shadow-lg p-4 md:p-6 text-center hover:shadow-xl transition-shadow">
                        <div className="text-green-600 mb-3 md:mb-4">
                            <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20v-6m0-6v-4m0 4l-6 6m6-6l6 6" />
                            </svg>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-2">
                            Market Access
                        </h3>
                        <p className="text-green-600 text-sm md:text-base">
                            Connect farmers to larger markets for better pricing opportunities.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-green-50 border border-green-300 rounded-xl shadow-lg p-4 md:p-6 text-center hover:shadow-xl transition-shadow">
                        <div className="text-green-600 mb-3 md:mb-4">
                            <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21V3m0 0l-4 4m4-4l4 4" />
                            </svg>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-2">
                            Reliable Supplies
                        </h3>
                        <p className="text-green-600 text-sm md:text-base">
                            Ensure high-quality raw materials sourced directly from trusted farmers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Offer;