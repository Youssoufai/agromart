import { FaHandshake, FaWarehouse } from "react-icons/fa";

const Offer = () => {
    return (
        <>
            <section className="h-screen p-7 bg-gradient-to-br from-green-100 to-green-200">
                <section className=" py-12 px-6">
                    <h2 className="text-4xl font-bold text-green-800 text-center mb-8">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-green-50 border border-green-300 rounded-xl shadow-lg p-6 text-center">
                            <div className="text-green-600 mb-4">

                                <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21V3m0 0l-4 4m4-4l4 4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-green-700">Efficient Logistics</h3>
                            <p className="text-green-600 mt-2">Seamless transportation ensuring timely and cost-effective delivery.</p>
                        </div>


                        <div className="bg-green-50 border border-green-300 rounded-xl shadow-lg p-6 text-center">
                            <div className="text-green-600 mb-4">

                                <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20v-6m0-6v-4m0 4l-6 6m6-6l6 6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-green-700">Market Access</h3>
                            <p className="text-green-600 mt-2">Connect farmers to larger markets for better pricing opportunities.</p>
                        </div>


                        <div className="bg-green-50 border border-green-300 rounded-xl shadow-lg p-6 text-center">
                            <div className="text-green-600 mb-4">

                                <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11M9 21V3m0 0l-4 4m4-4l4 4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-green-700">Reliable Supplies</h3>
                            <p className="text-green-600 mt-2">Ensure high-quality raw materials sourced directly from trusted farmers.</p>
                        </div>
                    </div>
                </section>


            </section>
        </>
    )
}
export default Offer;