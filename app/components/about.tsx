const About = () => {
    return (
        <>
            <section className="h-screen bg-about-bg w-full px-20 py-8">
                <div className="pt-8 flex justify-between items-center w-full h-full">
                    <div className="flex-1 space-y-8">
                        <h1 className="text-3xl font-semibold">About Agro<span className="text-color3">Mart</span></h1>
                        <p>
                            Our mission at the AgroMart is to revolutionize agriculture in Nigeria and across Africa by empowering farmers, making food more affordable and healthier, and connecting businesses with reliable sources of raw materials. By leveraging technology, we aim to boost agricultural productivity, reduce food waste, and create sustainable supply chains. This will not only enhance the livelihoods of farmers but also support economic growth, ensure food security, and contribute to a healthier, more prosperous continent.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center flex-1">
                        <div className="w-full">
                            <img src="ai-gen1.webp" className="rounded-full object-cover w-[200px] h-[200px]" alt="" />
                        </div>
                        <div className="w-full flex items-start justify-end">
                            <img src="company.webp" className="rounded-full object-cover w-[200px] h-[200px]" alt="" />
                        </div>
                        <div className="w-full">
                            <img src="about.webp" className="rounded-full object-cover w-[200px] h-[200px]" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;