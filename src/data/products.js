// products.js

// =========================
// MACBOOKS
// =========================

import macbookAir13 from "../assets/mac/macbookAir13.webp";
import macbookAir15 from "../assets/mac/macbook-air-15.jpeg";
import macbookPro14 from "../assets/mac/macbook-pro-14.jpeg";
import macbookPro16 from "../assets/mac/macbook-pro-16.jpeg";
import imac24 from "../assets/mac/imac-24.jpeg";
import macMini from "../assets/mac/mac-mini.jpg";

// =========================
// IPHONES
// =========================
import iphone16ProMax from "../assets/iphone/iphone16-pro-max.jpg";
import iphone16Pro from "../assets/iphone/iphone16-pro.jpg";
import iphone16Plus from "../assets/iphone/iphone16-plus.jpeg";
import iphone16 from "../assets/iphone/iphone16.jpeg";
import iphone15 from "../assets/iphone/iphone15.jpeg";
import iphoneSE from "../assets/iphone/iphone-se.jpg";

// =========================
// IPADS
// =========================
import ipadPro13 from "../assets/ipad/ipad-pro-13.jpeg";
import ipadPro11 from "../assets/ipad/ipad-pro-11.jpeg";
import ipadAir13 from "../assets/ipad/ipad-air-13.jpeg";
import ipadAir11 from "../assets/ipad/ipad-air-11.jpeg";
import ipad10 from "../assets/ipad/ipad10.jpeg";
import ipadMini from "../assets/ipad/ipad-mini.jpeg";

// =========================
// WATCHES
// =========================
import watchUltra2 from "../assets/watch/watch-ultra2.jpeg";
import watchSeries10 from "../assets/watch/watch-series10.jpeg";
import watchSeries9 from "../assets/watch/watch-series9.jpeg";
import watchSE from "../assets/watch/watch-se.jpeg";


// =========================
// AIRPODS
// =========================
import airpodsPro2 from "../assets/airpods/airpods-pro2.jpeg";
import airpods4 from "../assets/airpods/airpods4.jpeg";
import airpods3 from "../assets/airpods/airpods3.jpeg";
import airpodsMax from "../assets/airpods/airpods-max.jpeg";

// =========================
// ACCESSORIES
// =========================
import magsafe from "../assets/accessories/magsafe.jpeg";
import magicMouse from "../assets/accessories/magic-mouse.jpeg";
import magicKeyboard from "../assets/accessories/magic-keyboard.jpeg";
import applePencilPro from "../assets/accessories/apple-pencil-pro.jpeg";
import airtag from "../assets/accessories/airtag.jpeg";


const products = [
  // =========================
  // MAC
  // =========================
  {
    id: 1,
    name: "MacBook Air 13-inch M4",
    category: "mac",
    image: macbookAir13,
    price: 99999,
    rating: 4.9,
    reviews: 1823,
    description:
      "Ultra-thin laptop powered by Apple M4 chip with incredible battery life.",
    specifications: {
      chip: "Apple M4",
      ram: "16GB",
      storage: "512GB SSD",
      display: "13.6-inch Liquid Retina",
      battery: "18 hours"
    }
  },
  {
    id: 2,
    name: "MacBook Air 15-inch M4",
    category: "mac",
    image: macbookAir15,
    price: 124999,
    rating: 4.8,
    reviews: 1245,
    description: "Larger display with M4 performance.",
    specifications: {
      chip: "Apple M4",
      ram: "16GB",
      storage: "512GB SSD",
      display: "15.3-inch Liquid Retina",
      battery: "18 hours"
    }
  },
  {
    id: 3,
    name: "MacBook Pro 14-inch",
    category: "mac",
    image: macbookPro14,
    price: 169999,
    rating: 4.9,
    reviews: 2312,
    description: "Professional laptop for developers and creators.",
    specifications: {
      chip: "Apple M4 Pro",
      ram: "24GB",
      storage: "1TB SSD"
    }
  },
  {
    id: 4,
    name: "MacBook Pro 16-inch",
    category: "mac",
    image: macbookPro16,
    price: 249999,
    rating: 5,
    reviews: 986,
    description: "Ultimate performance laptop.",
    specifications: {
      chip: "Apple M4 Max",
      ram: "36GB",
      storage: "1TB SSD"
    }
  },
  {
    id: 5,
    name: "iMac 24-inch",
    category: "mac",
    image: imac24,
    price: 134999,
    rating: 4.8,
    reviews: 804,
    description: "Beautiful all-in-one desktop.",
    specifications: {
      chip: "Apple M4",
      ram: "16GB",
      storage: "512GB SSD"
    }
  },
  {
    id: 6,
    name: "Mac mini",
    category: "mac",
    image: macMini,
    price: 59999,
    rating: 4.8,
    reviews: 932,
    description: "Compact desktop powerhouse.",
    specifications: {
      chip: "Apple M4",
      ram: "16GB",
      storage: "256GB SSD"
    }
  },

  // =========================
  // IPHONE
  // =========================

  {
    id: 7,
    name: "iPhone 16 Pro Max",
    category: "iphone",
    image: iphone16ProMax,
    price: 144900,
    rating: 5,
    reviews: 6123,
    description: "The most advanced iPhone ever.",
    specifications: {
      display: "6.9-inch OLED",
      chip: "A18 Pro",
      storage: "256GB",
      camera: "48MP Triple Camera"
    }
  },
  {
    id: 8,
    name: "iPhone 16 Pro",
    category: "iphone",
    image: iphone16Pro,
    price: 119900,
    rating: 4.9,
    reviews: 5022,
    description: "Pro performance in a compact size.",
    specifications: {
      display: "6.3-inch OLED",
      chip: "A18 Pro"
    }
  },
  {
    id: 9,
    name: "iPhone 16 Plus",
    category: "iphone",
    image: iphone16Plus,
    price: 89900,
    rating: 4.8,
    reviews: 3112,
    description: "Big display and long battery.",
    specifications: {
      display: "6.7-inch OLED",
      chip: "A18"
    }
  },
  {
    id: 10,
    name: "iPhone 16",
    category: "iphone",
    image: iphone16,
    price: 79900,
    rating: 4.8,
    reviews: 4023,
    description: "Powerful everyday iPhone.",
    specifications: {
      display: "6.1-inch OLED",
      chip: "A18"
    }
  },
  {
    id: 11,
    name: "iPhone 15",
    category: "iphone",
    image: iphone15,
    price: 69900,
    rating: 4.7,
    reviews: 5782,
    description: "Fantastic value flagship.",
    specifications: {
      chip: "A16 Bionic"
    }
  },
  {
    id: 12,
    name: "iPhone SE",
    category: "iphone",
    image: iphoneSE,
    price: 49900,
    rating: 4.6,
    reviews: 1980,
    description: "Compact and affordable.",
    specifications: {
      chip: "A15 Bionic"
    }
  },

  // =========================
  // IPAD
  // =========================

  {
    id: 13,
    name: "iPad Pro 13",
    category: "ipad",
    image: ipadPro13,
    price: 129900,
    rating: 5,
    reviews: 1540,
    description: "Most powerful iPad.",
    specifications: {
      chip: "M4",
      display: "Ultra Retina XDR"
    }
  },
  {
    id: 14,
    name: "iPad Pro 11",
    category: "ipad",
    image: ipadPro11,
    price: 99900,
    rating: 4.9,
    reviews: 1123,
    description: "Portable professional tablet.",
    specifications: { chip: "M4" }
  },
  {
    id: 15,
    name: "iPad Air 13",
    category: "ipad",
    image: ipadAir13,
    price: 79900,
    rating: 4.8,
    reviews: 823,
    description: "Large Air experience.",
    specifications: { chip: "M3" }
  },
  {
    id: 16,
    name: "iPad Air 11",
    category: "ipad",
    image: ipadAir11,
    price: 59900,
    rating: 4.8,
    reviews: 902,
    description: "Perfect for students.",
    specifications: { chip: "M3" }
  },
  {
    id: 17,
    name: "iPad 10th Gen",
    category: "ipad",
    image: ipad10,
    price: 34900,
    rating: 4.7,
    reviews: 1733,
    description: "Everyday iPad.",
    specifications: { chip: "A14 Bionic" }
  },
  {
    id: 18,
    name: "iPad mini",
    category: "ipad",
    image: ipadMini,
    price: 49900,
    rating: 4.8,
    reviews: 1100,
    description: "Small but powerful.",
    specifications: { chip: "A17 Pro" }
  },

  // =========================
  // WATCH
  // =========================

  {
    id: 19,
    name: "Apple Watch Ultra 2",
    category: "watch",
    image: watchUltra2,
    price: 89900,
    rating: 5,
    reviews: 1654,
    description: "Adventure-ready smartwatch."
  },
  {
    id: 20,
    name: "Apple Watch Series 10",
    category: "watch",
    image: watchSeries10,
    price: 46900,
    rating: 4.9,
    reviews: 2100,
    description: "Latest Apple Watch."
  },
  {
    id: 21,
    name: "Apple Watch Series 9",
    category: "watch",
    image: watchSeries9,
    price: 41900,
    rating: 4.8,
    reviews: 1742,
    description: "Powerful health companion."
  },
  {
    id: 22,
    name: "Apple Watch SE",
    category: "watch",
    image: watchSE,
    price: 24900,
    rating: 4.7,
    reviews: 2391,
    description: "Affordable Apple Watch."
  },

  // =========================
  // AIRPODS
  // =========================

  {
    id: 23,
    name: "AirPods Pro (2nd Gen)",
    category: "airpods",
    image: airpodsPro2,
    price: 24900,
    rating: 4.9,
    reviews: 5213,
    description: "Best noise cancellation."
  },
  {
    id: 24,
    name: "AirPods 4",
    category: "airpods",
    image: airpods4,
    price: 14900,
    rating: 4.8,
    reviews: 1900,
    description: "Latest AirPods."
  },
  {
    id: 25,
    name: "AirPods 3",
    category: "airpods",
    image: airpods3,
    price: 12900,
    rating: 4.7,
    reviews: 2410,
    description: "Spatial Audio experience."
  },
  {
    id: 26,
    name: "AirPods Max",
    category: "airpods",
    image: airpodsMax,
    price: 59900,
    rating: 4.8,
    reviews: 1231,
    description: "Premium over-ear headphones."
  },


  // =========================
  // ACCESSORIES
  // =========================

  {
    id: 27,
    name: "MagSafe Charger",
    category: "accessories",
    image: magsafe,
    price: 4500,
    rating: 4.7,
    reviews: 1830,
    description: "Fast wireless charging."
  },
  {
    id: 28,
    name: "Magic Mouse",
    category: "accessories",
    image: magicMouse,
    price: 7900,
    rating: 4.6,
    reviews: 1043,
    description: "Wireless multi-touch mouse."
  },
  {
    id: 29,
    name: "Magic Keyboard",
    category: "accessories",
    image: magicKeyboard,
    price: 14900,
    rating: 4.8,
    reviews: 821,
    description: "Comfortable typing experience."
  },
  {
    id: 30,
    name: "Apple Pencil Pro",
    category: "accessories",
    image: applePencilPro,
    price: 11900,
    rating: 4.9,
    reviews: 1501,
    description: "Ultimate precision."
  },
  {
    id: 31,
    name: "AirTag",
    category: "accessories",
    image: airtag,
    price: 3490,
    rating: 4.8,
    reviews: 3412,
    description: "Keep track of your belongings."
  }
];

export default products;