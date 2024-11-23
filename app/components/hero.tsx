const Hero = () => {
    return (

        <>
            <section className="container mx-auto h-screen px-4 pt-16 flex items-center gap-12 overflow-hidden">
                <div className="flex-1 space-y-6">
                    <h1 className="text-5xl font-bold leading-tight">
                        Supporting <span className="text-color3">Farmers</span>,
                        Supplying Businesses <br />
                        - All in <span className="text-color3">One Place</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl leading-relaxed">
                        At AgriTech Marketplace, we are dedicated to bridging the gap between farms, businesses, and individuals
                        making it easier for everyone to access quality and affordable agricultural products.
                        {/*     Our platform empowers local farmers by giving them the tools and support they need to thrive,
                        while ensuring businesses have a reliable source of high-quality raw materials. */}
                    </p>
                    <button className="py-2 px-8 bg-color3 rounded-lg text-white">Get Started</button>
                </div>
                <div className="flex-1">
                    <img
                        src="hero.avif"
                        className="rounded-lg shadow-2xl w-full object-cover"
                        alt="Farmers working in field"
                    />
                </div>
            </section>
        </>
    )
}
export default Hero;