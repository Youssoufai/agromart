'use client';
import { GiFarmer } from "react-icons/gi"

import { useState } from 'react';
import { PiFarm } from "react-icons/pi"; // Ensure you import the necessary icons

const page = () => {
    const [selectedFarmer, setSelectedFarmer] = useState<string | null>(null); // State to track selected radio button

    const handleRadioChange = (value: string) => {
        setSelectedFarmer(value); // Update state when radio button is clicked
    };

    return (
        <>
            <section>
                <div className="p-8 space-y-4">
                    <h1 className="text-center text-4xl">What are you?</h1>
                    <h2 className="text-center">Find where you fit and how we can help you thrive.</h2>
                </div>
                <section className="p-8 flex gap-3">
                    {/* Farmer Option */}
                    <div className={`cursor-pointer border ${selectedFarmer === 'farmer' ? 'border-color3' : ''} rounded-md bg-light-green hover:bg-light-green`} onClick={() => handleRadioChange('farmer')}>
                        <label htmlFor="farmer" className="flex flex-col items-center p-12">
                            <PiFarm className="text-6xl text-color3" />
                            <input type="radio" name="role" id="farmer" className="hover:cursor-pointer" onChange={() => handleRadioChange('farmer')} />
                            <h2 className="text-3xl">Farmer</h2>
                            <p>Connect with markets, grow your network, and access tools to maximize your yield</p>
                        </label>
                    </div>

                    {/* Other Options */}
                    <div className={`cursor-pointer border ${selectedFarmer === 'gardener' ? 'border-color3' : ''} rounded-md bg-light-green hover:bg-light-green`} onClick={() => handleRadioChange('gardener')}>
                        <label htmlFor="gardener" className="flex flex-col items-center p-12">
                            <PiFarm className="text-6xl text-color3" />
                            <input type="radio" name="role" id="gardener" className="hover:cursor-pointer" onChange={() => handleRadioChange('gardener')} />
                            <h2 className="text-3xl">Gardener</h2>
                            <p>Grow your plants and learn about sustainable gardening practices.</p>
                        </label>
                    </div>

                    <div className={`cursor-pointer border ${selectedFarmer === 'rancher' ? 'border-color3' : ''} rounded-md bg-light-green hover:bg-light-green`} onClick={() => handleRadioChange('rancher')}>
                        <label htmlFor="rancher" className="flex flex-col items-center p-12">
                            <PiFarm className="text-6xl text-color3" />
                            <input type="radio" name="role" id="rancher" className="hover:cursor-pointer" onChange={() => handleRadioChange('rancher')} />
                            <h2 className="text-3xl">Rancher</h2>
                            <p>Manage livestock and learn about animal husbandry.</p>
                        </label>
                    </div>
                </section>
            </section>
        </>
    );
};

export default page;