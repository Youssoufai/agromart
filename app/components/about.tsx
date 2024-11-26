const About = () => {
    return (
        <section className="min-h-screen bg-about-bg w-full px-4 md:px-12 lg:px-20 py-8 md:py-12">
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center w-full h-full gap-12 md:gap-8">
                <div className="w-full md:w-1/2 space-y-4 md:space-y-8">
                    <h1 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
                        About Agro<span className="text-color3">Mart</span>
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg text-center md:text-left leading-relaxed">
                        Our mission at the AgroMart is to revolutionize agriculture in Nigeria and across Africa by empowering farmers, making food more affordable and healthier, and connecting businesses with reliable sources of raw materials. By leveraging technology, we aim to boost agricultural productivity, reduce food waste, and create sustainable supply chains. This will not only enhance the livelihoods of farmers but also support economic growth, ensure food security, and contribute to a healthier, more prosperous continent.
                    </p>
                </div>
                <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
                    {/* Top image */}
                    <div className="absolute top-0 left-0 md:left-1/4">
                        <img
                            src="ai-gen1.webp"
                            className="rounded-full object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                            alt="Agricultural Innovation"
                        />
                    </div>
                    {/* Middle image */}
                    <div className="absolute top-1/3 right-0">
                        <img
                            src="company.webp"
                            className="rounded-full object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                            alt="Company"
                        />
                    </div>
                    {/* Bottom image */}
                    <div className="absolute bottom-0 left-0 md:left-1/4">
                        <img
                            src="about.webp"
                            className="rounded-full object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                            alt="About Us"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;