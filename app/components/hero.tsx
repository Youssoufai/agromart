const Hero = () => {
    return (
        <section className="container mx-auto min-h-screen px-4 md:px-8 lg:px-12 pt-24 md:pt-32 flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden">
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Supporting <span className="text-color3">Farmers</span>,
                    Supplying Businesses{' '}
                    <span className="hidden md:inline">
                        <br />
                    </span>
                    - All in <span className="text-color3">One Place</span>
                </h1>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
                    At AgriTech Marketplace, we are dedicated to bridging the gap between farms, businesses, and individuals
                    making it easier for everyone to access quality and affordable agricultural products.
                </p>
                <button className="py-2 px-6 md:px-8 bg-color3 rounded-lg text-white hover:bg-opacity-90 transition-all">
                    Get Started
                </button>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <img
                    src="hero.webp"
                    className="rounded-lg shadow-2xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                    alt="Farmers working in field"
                />
            </div>
        </section>
    )
}
export default Hero;