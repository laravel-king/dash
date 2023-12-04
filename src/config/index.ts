export const PRODUCT_CATEGORIES = [
    {
        label: "UI Kits",
        slug: "ui_kits" as const,
        featured: [
            {
                name: "Editor Picks",
                href:"#",
                imageSrc: "/nav/ui-kits/mixed.jpg"
            },
            {
                name: "New Arrivals",
                href:"#",
                imageSrc: "/nav/ui-kits/blue.jpg"
            },
            {
                name: "Best Seller",
                href:"#",
                imageSrc: "/nav/ui-kits/purple.jpg"
            },
        ],

    },
    {
        label: "Icons",
        slug: "icons" as const,
        featured: [
            {
                name: "Favorite Icon Picks",
                href:"#",
                imageSrc: "/nav/icons/picks.jpg"
            },
            {
                name: "New Arrivals",
                href:"#",
                imageSrc: "/nav/icons/new.jpg"
            },
            {
                name: "BestSelling Icons",
                href:"#",
                imageSrc: "/nav/icons/bestsellers.jpg"
            },
        ],

    }
]