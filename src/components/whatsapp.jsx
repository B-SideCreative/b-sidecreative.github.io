import { SiWhatsapp } from "react-icons/si";
import { openWhatsapp } from "../controls/whatsapp";

export default function Whatsapp() {
    return (
        <div 
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all duration-300 hover:scale-110 z-50"
            style={{ 
                backgroundColor: '#07493c'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0e231f'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#07493c'}
            onClick={() => openWhatsapp()}
        >
            <SiWhatsapp className="text-white text-2xl" />
        </div>
    )
};