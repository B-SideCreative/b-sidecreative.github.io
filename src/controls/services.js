import { BsCameraReelsFill } from "react-icons/bs";
import { FaPalette } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RiFilmFill } from "react-icons/ri";
import { GiPolarStar } from "react-icons/gi";

const servicesData = [
    {
        id: 1,
        title: "Edição de vídeo",
        description: "Refinamento de imagens, cortes estratégicos e ajustes para transformar captação em conteúdo de qualidade.",
        icon: RiFilmFill,
    },
    {
        id: 2,
        title: "Produção audiovisual",
        description: "Planejamento e captação de vídeos com direção, enquadramento e narrativa.",
        icon: BsCameraReelsFill,
    },
    {
        id: 3,
        title: "Fotografia",
        description: "Captação e edição de imagens profissionais para fortalecer a presença visual de marcas, produtos e eventos.",
        icon: FaCamera,
    },
    {
        id: 4,
        title: "Criação de Identidade Visual",
        description: "Desenvolvimento completo da identidade visual, com criação de logotipo, paleta de cores, tipografia e elementos que definem a mensagem da marca.",
        icon: FaPencil,
    },
    {
        id: 5,
        title: "Design Gráfico",
        description: "Criação de peças visuais para redes sociais, materiais promocionais e impressos e comunicação digital.",
        icon: FaPalette,
    },
    {
        id: 6,
        title: "Social Media",
        description: "Planejamento de conteúdo visual e estratégico para posicionamento nas redes sociais.",
        icon: GiPolarStar,
    }
];

export default servicesData;

