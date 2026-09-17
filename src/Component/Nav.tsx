import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className="p-5 border-b border-[#F1F5F9]">
            
            <div className=" bg-white flex justify-between items-center container mx-auto">


                <img src={Logo} alt="Logo" />

                <ul className="flex justify-between items-center gap-4">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div className="flex justify-between items-center gap-4">

                    <button className="btn bg-white border-0 rounded-full">Sign In</button>
                    <button className="btn btn-secondary rounded-full">Sign Up</button>

                </div>

            </div>
        </nav>
    );
};

export default Nav;