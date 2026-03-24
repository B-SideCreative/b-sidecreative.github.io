import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";

export default function Brands() {
    const brands = [
        {
            logo: (
                <img src={c1} alt="Google" className="w-20 h-20 sm:w-30 sm:h-30 object-contain" />
            )
        },
        {
            logo: (
                <img src={c2} alt="Microsoft" className="w-20 h-20 sm:w-30 sm:h-30 object-contain" />
            )
        },
        {
            logo: (
                <img src={c3} alt="Apple" className="w-20 h-20   sm:w-30 sm:h-30 object-contain" />
            )
        },
        {
            logo: (
                <img src={c4} alt="Amazon" className="w-20 h-20 sm:w-30 sm:h-30 object-contain" />
            )
        },
        {
            logo: (
                <img src={c5} alt="Netflix" className="w-20 h-20 sm:w-30 sm:h-30 object-contain" />
            )
        },

    ];

    return (
        <div className="py-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-5 text-white text-center">Quem já atendemos</h1>
            <div className="brands-container">
                <div className="brands-wrapper">
                    <div className="flex animate-scroll">
                        {[...brands, ...brands].map((brand, index) => (
                            <div
                                key={index}
                                className="shrink-0 mx-6"
                            >
                                <div className="flex items-center justify-center py-2 px-8 bg-black-2 rounded-xl hover:shadow-lg transition-all duration-300">
                                    {brand.logo}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}