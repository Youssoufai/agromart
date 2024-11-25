import { CiDeliveryTruck } from "react-icons/ci";
import { GiFoodChain, GiFoodTruck } from "react-icons/gi";

const Features = () => {
    return (
        <>
            <section className="px-20 py-8 h-screen">
                <div className="space-y-4 px-36 text-center">
                    <h1 className="font-bold text-3xl">Why Trade <span className="text-color3">With</span>  Us.</h1>
                    <p>Discover how our platform benefits farmers, businesses, and consumers by creating a more efficient and sustainable agricultural ecosystem</p>
                </div>
                <section className="m-10 flex">
                    <div>
                        <CiDeliveryTruck className="text-8xl text-color3" />
                        <h1 className="text-3xl font-bold">Efficient Logistics</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum. Numquam dolorem magni, in enim iusto nam dignissimos officiis corrupti doloribus, iste nostrum harum a cupiditate consequuntur eos atque? Iure?</p>
                    </div>
                    <div>
                        <CiDeliveryTruck className="text-8xl text-color3" />
                        <h1 className="text-3xl font-bold">Efficient Logistics</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum. Numquam dolorem magni, in enim iusto nam dignissimos officiis corrupti doloribus, iste nostrum harum a cupiditate consequuntur eos atque? Iure?</p>
                    </div>
                    <div>
                        <CiDeliveryTruck className="text-8xl text-color3" />
                        <h1 className="text-3xl font-bold">Efficient Logistics</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, laborum. Numquam dolorem magni, in enim iusto nam dignissimos officiis corrupti doloribus, iste nostrum harum a cupiditate consequuntur eos atque? Iure?</p>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Features;