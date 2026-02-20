export const projects = [
    {
        id: "bikcraft",
        title: "Bikcraft",
        subtitle: "Bicicletas feitas sob medida.",
        description:
            "Plataforma institucional e comercial para venda de bicicletas elétricas personalizadas e planos de seguro.",

        tags: {
            tech: ["html", "css", "javascript", "figma"],
            area: ["frontend", "design"],
            type: ["origamid", "curso"],
        },

        cover: "/assets/projects/bikcraft/capa.jpg",
        images: [
            {
                src: "/assets/projects/bikcraft/home.jpg",
                title: "Home",
            },
            {
                src: "/assets/projects/bikcraft/seguros.jpg",
                title: "Seguros",
            },
            {
                src: "/assets/projects/bikcraft/contato.jpg",
                title: "Contato",
            },
            {
                src: "/assets/projects/bikcraft/home-mobile.jpg",
                title: "Home Mobile",
            },
        ],

        github: "https://github.com/eduardonobrega/bikcraft",
        live: "https://eduardonobrega.com/projects/bikcraft",

        pin: true,

        sections: [
            {
                type: "text",
                title: "Qual problema resolve ?",
                content:
                    "A Bikcraft resolve a necessidade de uma presença digital moderna para uma marca de bicicletas personalizadas, permitindo que clientes conheçam os produtos, comparem modelos e solicitem orçamentos de forma simples e intuitiva.",
            },
            {
                type: "text",
                title: "Desafios e Soluções",
                content:
                    "O principal desafio foi criar uma interface visualmente forte e ao mesmo tempo funcional. Trabalhei na organização das seções, hierarquia visual e responsividade. A solução envolveu o uso de CSS Grid e Flexbox para estruturar layouts adaptáveis e JavaScript para melhorar interações e formulários.",
            },
            {
                type: "list",
                title: "Meu papel no projeto",
                items: [
                    "Design da interface responsiva e prototipagem no Figma (UX & UI)",
                    "Desenvolvimento completo do frontend (HTML, CSS e JavaScript)",
                    "Criação de componentes reutilizáveis",
                    "Implementação do formulário com validação em JavaScript",
                ],
            },
        ],
    },
]
