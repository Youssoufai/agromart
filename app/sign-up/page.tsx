import { GiFarmer } from "react-icons/gi"
import { PiFarm } from "react-icons/pi"

const page = () => {
    return (
        <>
            <section>
                <div className="p-8 space-y-4">
                    <h1 className="text-center text-4xl">What are you?</h1>
                    <h2 className="text-center">Find where you fit and how we can help you thrive.</h2>
                </div>
                <section className="p-8 flex">
                    <div>
                        {/*                      <img src="farmer.png" alt="farmer" className="h-3 " /> */}
                        <PiFarm className="text-6xl text-color3" />
                        <h2 className="text-3xl">Farmer</h2>
                        <p>Connect with markets, grow your network, and access tools to maximize your yield</p>
                    </div>
                    <div>
                        {/*                      <img src="farmer.png" alt="farmer" className="h-3 " /> */}
                        <PiFarm className="text-6xl text-color3" />
                        <h2 className="text-3xl">Farmer</h2>
                        <p>Connect with markets, grow your network, and access tools to maximize your yield</p>
                    </div>
                    <div>
                        {/*                      <img src="farmer.png" alt="farmer" className="h-3 " /> */}
                        <PiFarm className="text-6xl text-color3" />
                        <h2 className="text-3xl">Farmer</h2>
                        <p>Connect with markets, grow your network, and access tools to maximize your yield</p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default page