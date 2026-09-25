export const demoPages = [
  {
    href: "/",
    imgSrc: "/images/demo/home-1.jpg",
    name: "HOMEPAGE 1",
    label: "Hot",
  },
  {
    href: "/home-2",
    imgSrc: "/images/demo/home-2.jpg",
    name: "HOMEPAGE 2",
    label: "Hot",
  },
  {
    href: "/home-3",
    imgSrc: "/images/demo/home-3.jpg",
    name: "HOMEPAGE 3",
  },
  {
    href: "/home-4",
    imgSrc: "/images/demo/home-4.jpg",
    name: "HOMEPAGE 4",
  },
  {
    href: "/home-5",
    imgSrc: "/images/demo/home-5.jpg",
    name: "HOMEPAGE 5",
    label: "New",
    labelType: "type-new",
  },
  {
    href: "/home-6",
    imgSrc: "/images/demo/home-6.jpg",
    name: "HOMEPAGE 6",
    label: "New",
    labelType: "type-new",
  },
];

export const shopPages = [
  {
    heading: "SHOP LAYOUT",
    links: [
      { href: "/shop-default", label: "Default" },
      { href: "/shop-left-sidebar", label: "Filter Left Sidebar" },
      { href: "/shop-right-sidebar", label: "Filter Right Sidebar" },
      { href: "/shop-filter-top", label: "Filter Top" },
      { href2: "/shop-default", label: "Filter Drawer" },
      { href: "/shop-collection-list", label: "Collection List" },
      { href: "/shop-sub-collection", label: "Sub Collection" },
      { href: "/shop-grid-2-columns", label: "Grid 2 Collumns" },
      { href: "/shop-grid-3-columns", label: "Grid 3 Collumns" },
      { href: "/shop-grid-4-columns", label: "Grid 4 Collumns" },
    ],
  },
  {
    heading: "BY PRICE",
    links: [
      {
        href: "/shop-default",
        label: "Under ₹25K",
        icon: "under25k",
      },
      {
        href: "/shop-default",
        label: "₹25K - 50K",
        icon: "range25k50k",
      },
      {
        href: "/shop-default",
        label: "₹50K - 1L",
        icon: "range50k1l",
      },
      {
        href: "/shop-default",
        label: "₹1L - 2L",
        icon: "range1l2l",
      },
    ],
  },
];

export const productDetailPages = [
  {
    heading: "PRODUCT LAYOUT",
    links: [
      { href: "/product-default/2", label: "Product Default" },
      { href2: "/product-default/2", label: "Product Style 1" },
      { href: "/product-style-02/2", label: "Product Style 2" },
      { href: "/product-style-03/2", label: "Product Style 3" },
      { href: "/product-style-04/2", label: "Product Style 4", badge: "Hot" },
      {
        href: "/product-style-05/2",
        label: "Product Style 5",
        badge: "Trending",
        badgeType: "type-trend",
      },
      { href: "/product-style-04-no-size/2", label: "Product No Size" },
    ],
  },
  {
    heading: "PRODUCT DESCRIPTION",
    links: [
      {
        href: "/product-description-side-dropdown/2",
        label: "Description Side Dropdown",
      },
      {
        href: "/product-description-full-accordion/2",
        label: "Description Full Accordions",
      },
      {
        href: "/product-description-side-drawer/2",
        label: "Description Side Drawer",
      },
    ],
  },
  {
    heading: "PRODUCT DETAILS",
    links: [
      { href: "/product-inner-zoom/2", label: "Product Inner Zoom" },
      {
        href: "/product-inner-circle-zoom/2",
        label: "Product Inner Circle Zoom",
      },
      { href: "/product-no-zoom/2", label: "Product No Zoom" },
      {
        href: "/product-video/2",
        label: "Product Video",
        badge: "Trending",
        badgeType: "type-trend",
      },
      { href: "/product-3d/2", label: "Product 3D/AR" },
    ],
  },
  {
    heading: "PRODUCT FEATURES",
    links: [
      { href: "/product-pickup-available/2", label: "Pickup Available" },
      { href: "/product-swatch-image/2", label: "Swatch Image" },
      {
        href: "/product-together/2",
        label: "Buy Together",
        badge: "New",
        badgeType: "type-new",
      },
      { href: "/product-size-guide/2", label: "Size Guide" },
      { href: "/product-engrave-option/2", label: "Engrave Option" },
    ],
  },
];



export const morePages = [
  {
    heading: "Explore Lalchnd",
    links: [
      { href: "/media", label: " Media" },
      { href: "/award", label: " Awards" },
      { href: "/blogs", label: "Our Blogs" },
      { href: "/contact", label: "Contact Us" },
      { href: "/gallery", label: "Our Gallery" },
      { href: "/about-us", label: "About Lalchnd" },
    ],
  },
  {
    heading: "LALCHND STORES",
    links: [
      {
        href: "/master-canteen",
        label: "Master Canteen - Bhubaneswar",
      },
      {
        href: "/raghunathpur",
        label: "Raghunathpur - Bhubaneswar",
      },
      {
        href: "/cda",
        label: "CDA - Cuttack",
      },
      {
        href: "/cantonmentroad",
        label: "Cantonment Road - Cuttack",
      },
      {
        href: "/brahmapur",
        label: "Berhampur",
      },
      {
        href: "/delhi",
        label: "Delhi",
      },
    ],
  },
  {
    heading: "TERMS & POLICIES",
    links: [
      { href: "/product-default/2", label: "Lalchnd Promises" },
      { href: "/product-style-02/2", label: "Lalchnd Policies" },
      { href: "/privacy-policy", label: "Terms and Conditions" },
      { href: "/product-style-03/2", label: "Today's Gold Rate" },
      { href: "#", label: "Refund Policies" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
];

export const allJewlleryPages = [
  {
    heading: "By Category",
    links: [
      { href: "/products?category=earrings", label: "Earrings", icon: "earrings" },
      { href: "/products?category=rings", label: "Rings", icon: "rings" },
      { href: "/products?category=necklaces", label: "Necklaces", icon: "necklaces" },
      { href: "/products?category=bangles", label: "Bangles", icon: "bangles" },
      { href: "#", label: "Mangalasutra", icon: "mangalsutra" },
      { href: "/products?category=pendants", label: "Pendants", icon: "pendants" },
      { href: "/products?category=bracelets", label: "Bracelets", icon: "bracelets" },
      { href: "/products?category=chain", label: "Chains", icon: "chains" },
      { href: "#", label: "Coins", icon: "coins" },
      { href: "/products", label: "All Jewellery", icon: "all" },
    ],
  },
  {
    heading: "By Price",
    links: [
      {
        href: "#",
        label: "Under ₹25K",
        icon: "under25k",
      },
      {
        href: "#",
        label: "₹25K - 50K",
        icon: "range25k50k",
      },
      {
        href: "#",
        label: "₹50K - 1L",
        icon: "range50k1l",
      },
      {
        href: "#",
        label: "₹1L - 2L",
        icon: "range1l2l",
      },
    ],
  },
  {
    heading: "By Gender",
    links: [
      {
        href: "/products?gender=male",
        label: "Men",
        icon: "men",
      },
      {
        href: "/products?gender=female",
        label: "Women",
        icon: "women",
      },
      {
        href: "/products?gender=kids",
        label: "Kids",
        icon: "kids",
      },
      {
        href: "/products?gender=unisex",
        label: "Unisex",
        icon: "unisex",
      },
    ],
  },
  {
    heading: "By Occasion",
    links: [
      {
        href: "/products?occasion=daily-wear",
        label: "Daily Wear",
        icon: "dailyWear",
      },
      {
        href: "/products?occasion=wedding",
        label: "Wedding",
        icon: "heavyOccasion",
      },
      {
        href: "/products?occasion=light-occasion",
        label: "Light Occasions",
        icon: "lightOccasion",
      },

    ],
  },
]

export const giftingPages = [
  {
    heading: "Gift For",
    links: [
      { href: "#", label: " Him" },
      { href: "#", label: " Her" },
      { href: "#", label: "Kinds" },
      { href: "#", label: "Contact Us" },
      { href: "#", label: "Our Gallery" },
      { href: "#", label: "About Lalchnd" },
    ],
  },
  {
    heading: "By Price",
    links: [
      { href: "#", label: "Under ₹10K" },
      { href: "#", label: "₹10K - 25K" },
      { href: "#", label: "₹25K - 50K" },
      { href: "#", label: "Above 50K" },
    ],
  },
]

export const goldJewlleryPages = [
  {
    heading: "By Category",
    links: [
      {
        href: "/products?metal=gold&category=earrings",
        label: "Earrings",
        icon: "earrings",
      },
      {
        href: "/products?metal=gold&category=rings",
        label: "Rings",
        icon: "rings",
      },
      {
        href: "/products?metal=gold&category=necklaces",
        label: "Necklaces",
        icon: "necklaces",
      },
      {
        href: "/products?metal=gold&category=bangles",
        label: "Bangles",
        icon: "bangles",
      },
      {
        href: "/products?metal=gold&category=mangalsutra",
        label: "Mangalasutra",
        icon: "mangalsutra",
      },
      {
        href: "/products?metal=gold&category=pendants",
        label: "Pendants",
        icon: "pendants",
      },
      {
        href: "/products?metal=gold&category=bracelets",
        label: "Bracelets",
        icon: "bracelets",
      },
      {
        href: "/products?metal=gold&category=chains",
        label: "Chains",
        icon: "chains",
      },
      {
        href: "/products?metal=gold&category=coins",
        label: "Coins",
        icon: "coins",
      },
      {
        href: "/products?metal=gold",
        label: "All Jewellery",
        icon: "all",
      },
    ],
  },

  {
    heading: "By Price",
    links: [
      {
        href: "/shop-default",
        label: "Under ₹25K",
        icon: "under25k",
      },
      {
        href: "/shop-default",
        label: "₹25K - 50K",
        icon: "range25k50k",
      },
      {
        href: "/shop-default",
        label: "₹50K - 1L",
        icon: "range50k1l",
      },
      {
        href: "/shop-default",
        label: "₹1L - 2L",
        icon: "range1l2l",
      },
    ],
  },

  {
    heading: "By Gender",
    links: [
      {
        href: "/products?metal=gold&gender=male",
        label: "Men",
        icon: "men",
      },
      {
        href: "/products?metal=gold&gender=female",
        label: "Women",
        icon: "women",
      },
      {
        href: "/products?metal=gold&gender=kids",
        label: "Kids",
        icon: "kids",
      },
      {
        href: "/products?metal=gold&gender=unisex",
        label: "Unisex",
        icon: "unisex",
      },
    ],
  },

  {
    heading: "By Occasion",
    links: [
      {
        href: "/products?metal=gold&occasion=daily-wear",
        label: "Daily Wear",
        icon: "dailyWear",
      },
      {
        href: "/products?metal=gold&occasion=wedding",
        label: "Wedding",
        icon: "heavyOccasion",
      },
      {
        href: "/products?metal=gold&occasion=light-occasion",
        label: "Light Occasions",
        icon: "lightOccasion",
      },
    ],
  },
];

export const silverJewlleryPages = [
  {
    heading: "By Category",
    links: [
      {
        href: "/products?metal=silver&category=earrings",
        label: "Earrings",
        icon: "earrings",
      },
      {
        href: "/products?metal=silver&category=rings",
        label: "Rings",
        icon: "rings",
      },
      {
        href: "/products?metal=silver&category=necklaces",
        label: "Necklaces",
        icon: "necklaces",
      },
      {
        href: "/products?metal=silver&category=bangles",
        label: "Bangles",
        icon: "bangles",
      },
      {
        href: "/products?metal=silver&category=mangalsutra",
        label: "Mangalasutra",
        icon: "mangalsutra",
      },
      {
        href: "/products?metal=silver&category=pendants",
        label: "Pendants",
        icon: "pendants",
      },
      {
        href: "/products?metal=silver&category=bracelets",
        label: "Bracelets",
        icon: "bracelets",
      },
      {
        href: "/products?metal=silver&category=chains",
        label: "Chains",
        icon: "chains",
      },
      {
        href: "/products?metal=silver&category=coins",
        label: "Coins",
        icon: "coins",
      },
      {
        href: "/products?metal=silver",
        label: "All Jewellery",
        icon: "all",
      },
    ],
  },

  {
    heading: "By Price",
    links: [
      {
        href: "/shop-default",
        label: "Under ₹25K",
        icon: "under25k",
      },
      {
        href: "/shop-default",
        label: "₹25K - 50K",
        icon: "range25k50k",
      },
      {
        href: "/shop-default",
        label: "₹50K - 1L",
        icon: "range50k1l",
      },
      {
        href: "/shop-default",
        label: "₹1L - 2L",
        icon: "range1l2l",
      },
    ],
  },

  {
    heading: "By Gender",
    links: [
      {
        href: "/products?metal=silver&gender=male",
        label: "Men",
        icon: "men",
      },
      {
        href: "/products?metal=silver&gender=female",
        label: "Women",
        icon: "women",
      },
      {
        href: "/products?metal=silver&gender=kids",
        label: "Kids",
        icon: "kids",
      },
      {
        href: "/products?metal=silver&gender=unisex",
        label: "Unisex",
        icon: "unisex",
      },
    ],
  },

  {
    heading: "By Occasion",
    links: [
      {
        href: "/products?metal=silver&occasion=daily-wear",
        label: "Daily Wear",
        icon: "dailyWear",
      },
      {
        href: "/products?metal=silver&occasion=wedding",
        label: "Wedding",
        icon: "heavyOccasion",
      },
      {
        href: "/products?metal=silver&occasion=light-occasion",
        label: "Light Occasions",
        icon: "lightOccasion",
      },
    ],
  },
];

export const diamondJewlleryPages = [
  {
    heading: "By Category",
    links: [
      {
        href: "/products?metal=diamond&category=earrings",
        label: "Earrings",
        icon: "earrings",
      },
      {
        href: "/products?metal=diamond&category=rings",
        label: "Rings",
        icon: "rings",
      },
      {
        href: "/products?metal=diamond&category=necklaces",
        label: "Necklaces",
        icon: "necklaces",
      },
      {
        href: "/products?metal=diamond&category=bangles",
        label: "Bangles",
        icon: "bangles",
      },
      {
        href: "/products?metal=diamond&category=mangalsutra",
        label: "Mangalasutra",
        icon: "mangalsutra",
      },
      {
        href: "/products?metal=diamond&category=pendants",
        label: "Pendants",
        icon: "pendants",
      },
      {
        href: "/products?metal=diamond&category=bracelets",
        label: "Bracelets",
        icon: "bracelets",
      },
      {
        href: "/products?metal=diamond&category=chains",
        label: "Chains",
        icon: "chains",
      },
      {
        href: "/products?metal=diamond&category=coins",
        label: "Coins",
        icon: "coins",
      },
      {
        href: "/products?metal=diamond",
        label: "All Jewellery",
        icon: "all",
      },
    ],
  },

  {
    heading: "By Price",
    links: [
      {
        href: "/shop-default",
        label: "Under ₹25K",
        icon: "under25k",
      },
      {
        href: "/shop-default",
        label: "₹25K - 50K",
        icon: "range25k50k",
      },
      {
        href: "/shop-default",
        label: "₹50K - 1L",
        icon: "range50k1l",
      },
      {
        href: "/shop-default",
        label: "₹1L - 2L",
        icon: "range1l2l",
      },
    ],
  },

  {
    heading: "By Gender",
    links: [
      {
        href: "/products?metal=diamond&gender=male",
        label: "Men",
        icon: "men",
      },
      {
        href: "/products?metal=diamond&gender=female",
        label: "Women",
        icon: "women",
      },
      {
        href: "/products?metal=diamond&gender=kids",
        label: "Kids",
        icon: "kids",
      },
      {
        href: "/products?metal=diamond&gender=unisex",
        label: "Unisex",
        icon: "unisex",
      },
    ],
  },

  {
    heading: "By Occasion",
    links: [
      {
        href: "/products?metal=diamond&occasion=daily-wear",
        label: "Daily Wear",
        icon: "dailyWear",
      },
      {
        href: "/products?metal=diamond&occasion=wedding",
        label: "Wedding",
        icon: "heavyOccasion",
      },
      {
        href: "/products?metal=diamond&occasion=light-occasion",
        label: "Light Occasions",
        icon: "lightOccasion",
      },
    ],
  },
];
export const payOnlineMenuLinks = [
  { href: "/store-mastercanteen", label: "Master Canteen Store" },
  { href: "/store-raghunathpur", label: "Raghunath Store" },
  { href: "/store-cantonment-road", label: "Contanoment Road Store" },
  { href: "/store-cda", label: "Cda Store" },
  { href: "/brahmapur-store", label: "Bramhapur Store" },
  { href: "/store-new-delhi", label: "New Delhi Store" },
];




export const moreMenuImages = [
  {
    id: 1,
    imgSrc: "/images/lalchnd/gallery/6.webp",
    hoverImgSrc: "/images/lalchnd/gallery/7.webp",
    title: "Explore Lalchnd",
  },
  {
    id: 2,
    imgSrc: "/images/lalchnd/gallery/8.webp",
    hoverImgSrc: "/images/lalchnd/gallery/9.webp",
    title: "wards & Achievements",
  },
]




export const otherPages = [
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/our-store", label: "Store Location" },
  { href: "/account-page", label: "My Account" },
  { href: "/faq", label: "FAQ" },
  { href: "/shop-cart", label: "Cart Page" },
  { href: "/before-you-leave", label: "Before You Leave" },
  { href: "/product-popup", label: "Products Popup" },
  { href: "/newspaper-popup", label: "Newspaper Popup" },
  { href: "/404", label: "404" },
  { href: "/coming-soon", label: "Coming Soon!" },
];

export const blogMenuLinks = [
  { href: "/blog-list-style-1", label: "Blog List Style 1" },
  { href: "/blog-list-style-2", label: "Blog List Style 2" },
  { href: "/blog-single/1", label: "Single Post" },
];

export const accountLinks = [
  { href: "/account-page", text: "Dashboard", isActive: true },
  { href: "/account-orders-empty", text: "My Orders", isActive: false },
  { href: "/wishlist", text: "My Wishlist", isActive: false },
  { href: "/account-addresses", text: "Addresses", isActive: false },
  { href: "/", text: "Log Out", isActive: false },
];




