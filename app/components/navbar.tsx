const Navbar = () => {
    return (
        <>
            <nav className="bg-white flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-color">AgroMart</h1>
                </div>
                <div>
                    <ul className="flex items-center space-x-4">
                        <li>Home</li>
                        <li>Features</li>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex items-center space-x-8">
                    <button className="font-bold text-xl">Login</button>
                    <button className="py-2 px-8 bg-color3 rounded-lg text-white">Sign Up</button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;