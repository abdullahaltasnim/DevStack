// import HeroImage from '../assets/banner-stack.png'
// const Hero = () => {
//     return (
//         <div className="container mx-auto flex justify-between items-center">
//             <div>
//                 <h2 className="text-7xl font-bold">Build Your Ideal <br />
//                     <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h2>
//                 <p className="text-[#475569] text-xl mt-4">Explore frontend, backend, database, and tooling options,
//                     compare them side by side, and put together the stack that fits your
//                     next project.</p>
//             </div>
//             <div><img src={HeroImage} alt="Hero" /></div>
//         </div>

//     );
// };

// export default Hero;

import HeroImage from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className="container mx-auto flex justify-between items-center">

            {/* Left side */}
            <div>
                <h2 className="text-7xl font-bold">
                    Build Your Ideal <br />

                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h2>

                <p className="text-[#475569] text-xl mt-4">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-5 my-5">
                    <button className="btn bg-gradient-to-r from-[#FF6A1A] via-orange-500 to-[#EC3D8F] text-white rounded-xl px-6 font-semibold">
                        Explore Technologies
                    </button>

                    <button className="btn bg-white px-10 rounded-xl ">
                        Learn More
                    </button>
                </div>
            </div>
            {/* Right side */}
            <div className="w-250 h-auto">
                <img src={HeroImage} alt="Hero" />
            </div>

        </div>
    )
}

export default Hero