// Simple - Premium Minimalist Lifestyle Products Database

// SVG Vector Image Generation Helper (Offline-friendly, zero network dependencies)
function generateProductSvg(name, category, type, angle = 1) {
  let iconMarkup = '';
  
  if (type === 'charger') {
    if (angle === 1) {
      iconMarkup = `
        <circle cx="200" cy="200" r="100" fill="none" stroke="%23c5a880" stroke-width="2" opacity="0.4"/>
        <circle cx="200" cy="200" r="85" fill="none" stroke="%23121212" stroke-width="2"/>
        <circle cx="200" cy="200" r="50" fill="none" stroke="%23121212" stroke-width="1.5" stroke-dasharray="4 4"/>
        <circle cx="200" cy="200" r="25" fill="none" stroke="%23c5a880" stroke-width="2"/>
        <circle cx="200" cy="200" r="6" fill="%23121212"/>
      `;
    } else {
      iconMarkup = `
        <ellipse cx="200" cy="200" rx="100" ry="40" fill="none" stroke="%23121212" stroke-width="2"/>
        <ellipse cx="200" cy="190" rx="90" ry="35" fill="none" stroke="%23c5a880" stroke-width="1.5" opacity="0.4"/>
        <line x1="200" y1="200" x2="200" y2="280" stroke="%23121212" stroke-width="2"/>
        <path d="M100 200 L100 220 A 100 40 0 0 0 300 220 L300 200" fill="none" stroke="%23121212" stroke-width="2"/>
      `;
    }
  } else if (type === 'keyboard') {
    if (angle === 1) {
      iconMarkup = `
        <rect x="80" y="140" width="240" height="120" rx="12" fill="none" stroke="%23121212" stroke-width="3"/>
        <rect x="90" y="150" width="220" height="100" rx="6" fill="none" stroke="%23c5a880" stroke-width="1.5" opacity="0.4"/>
        <line x1="105" y1="170" x2="295" y2="170" stroke="%23121212" stroke-width="2" stroke-dasharray="14 6"/>
        <line x1="105" y1="195" x2="295" y2="195" stroke="%23121212" stroke-width="2" stroke-dasharray="16 4"/>
        <line x1="105" y1="220" x2="295" y2="220" stroke="%23121212" stroke-width="2" stroke-dasharray="8 8"/>
        <line x1="140" y1="238" x2="260" y2="238" stroke="%23c5a880" stroke-width="4" stroke-linecap="round"/>
      `;
    } else {
      iconMarkup = `
        <polygon points="60,220 280,180 340,220 120,260" fill="none" stroke="%23121212" stroke-width="2.5" stroke-linejoin="round"/>
        <polygon points="60,200 280,160 280,180 60,220" fill="none" stroke="%23121212" stroke-width="2" stroke-linejoin="round"/>
        <polygon points="340,200 280,160 280,180 340,220" fill="none" stroke="%23121212" stroke-width="2" stroke-linejoin="round"/>
        <line x1="120" y1="210" x2="270" y2="190" stroke="%23c5a880" stroke-width="3" opacity="0.6"/>
      `;
    }
  } else if (type === 'mat') {
    if (angle === 1) {
      iconMarkup = `
        <rect x="70" y="120" width="260" height="160" rx="16" fill="none" stroke="%23121212" stroke-width="2.5"/>
        <path d="M80 135 C 130 185, 170 145, 230 225 C 270 265, 300 245, 320 265" fill="none" stroke="%23c5a880" stroke-width="2" opacity="0.6"/>
        <rect x="240" y="150" width="55" height="95" rx="8" fill="none" stroke="%23121212" stroke-width="1.5"/>
        <circle cx="267" cy="230" r="4" fill="%23121212"/>
      `;
    } else {
      iconMarkup = `
        <polygon points="60,250 260,150 340,190 140,290" fill="none" stroke="%23121212" stroke-width="2" stroke-linejoin="round"/>
        <path d="M100 230 C 150 190, 200 210, 260 170" fill="none" stroke="%23c5a880" stroke-width="2" opacity="0.5"/>
      `;
    }
  } else if (type === 'headphones') {
    if (angle === 1) {
      iconMarkup = `
        <path d="M110 220 C 110 110, 290 110, 290 220" fill="none" stroke="%23121212" stroke-width="5" stroke-linecap="round"/>
        <path d="M125 220 C 125 130, 275 130, 275 220" fill="none" stroke="%23c5a880" stroke-width="1.5" opacity="0.5"/>
        <rect x="85" y="190" width="35" height="65" rx="16" fill="none" stroke="%23121212" stroke-width="2.5"/>
        <rect x="280" y="190" width="35" height="65" rx="16" fill="none" stroke="%23121212" stroke-width="2.5"/>
        <line x1="120" y1="220" x2="280" y2="220" stroke="%23121212" stroke-width="1.5" stroke-dasharray="3 3"/>
      `;
    } else {
      iconMarkup = `
        <path d="M150 220 C 150 140, 270 140, 310 210" fill="none" stroke="%23121212" stroke-width="4"/>
        <rect x="130" y="190" width="30" height="60" rx="15" transform="rotate(-15 145 220)" fill="none" stroke="%23121212" stroke-width="2.5"/>
        <rect x="290" y="170" width="30" height="60" rx="15" transform="rotate(15 305 200)" fill="none" stroke="%23121212" stroke-width="2.5"/>
      `;
    }
  } else if (type === 'mouse') {
    if (angle === 1) {
      iconMarkup = `
        <rect x="130" y="110" width="140" height="180" rx="70" fill="none" stroke="%23121212" stroke-width="3"/>
        <line x1="200" y1="110" x2="200" y2="175" stroke="%23121212" stroke-width="2"/>
        <path d="M130 175 C 160 185, 240 185, 270 175" fill="none" stroke="%23121212" stroke-width="1.5"/>
        <rect x="194" y="130" width="12" height="28" rx="6" fill="none" stroke="%23c5a880" stroke-width="2"/>
      `;
    } else {
      iconMarkup = `
        <path d="M140 250 C 130 150, 270 150, 260 250 Z" fill="none" stroke="%23121212" stroke-width="3" stroke-linejoin="round"/>
        <rect x="195" y="155" width="10" height="25" rx="5" fill="%23c5a880"/>
        <path d="M136 210 C 170 215, 230 215, 264 210" fill="none" stroke="%23121212" stroke-width="1.5"/>
      `;
    }
  } else if (type === 'organizer') {
    if (angle === 1) {
      iconMarkup = `
        <polygon points="100,240 300,240 320,190 80,190" fill="none" stroke="%23121212" stroke-width="2.5" stroke-linejoin="round"/>
        <line x1="120" y1="215" x2="280" y2="215" stroke="%23c5a880" stroke-width="3" stroke-linecap="round"/>
        <rect x="140" y="130" width="22" height="60" rx="3" fill="none" stroke="%23121212" stroke-width="2"/>
        <rect x="175" y="110" width="28" height="80" rx="3" fill="none" stroke="%23121212" stroke-width="2"/>
        <circle cx="250" cy="160" r="16" fill="none" stroke="%23121212" stroke-width="1.5" stroke-dasharray="2 2"/>
      `;
    } else {
      iconMarkup = `
        <rect x="110" y="150" width="180" height="100" rx="8" fill="none" stroke="%23121212" stroke-width="2"/>
        <line x1="110" y1="210" x2="290" y2="210" stroke="%23121212" stroke-width="1.5"/>
        <line x1="170" y1="150" x2="170" y2="210" stroke="%23121212" stroke-width="1.5"/>
        <line x1="230" y1="150" x2="230" y2="210" stroke="%23121212" stroke-width="1.5"/>
      `;
    }
  } else if (type === 'bottle') {
    if (angle === 1) {
      iconMarkup = `
        <rect x="140" y="130" width="120" height="190" rx="20" fill="none" stroke="%23121212" stroke-width="3"/>
        <rect x="170" y="90" width="60" height="40" rx="6" fill="none" stroke="%23121212" stroke-width="2.5"/>
        <circle cx="200" cy="110" r="8" fill="none" stroke="%23c5a880" stroke-width="2"/>
        <line x1="140" y1="280" x2="260" y2="280" stroke="%23c5a880" stroke-width="1.5" stroke-dasharray="4 4"/>
      `;
    } else {
      iconMarkup = `
        <path d="M160 120 L160 300 A 40 40 0 0 0 240 300 L240 120 Z" fill="none" stroke="%23121212" stroke-width="2.5"/>
        <rect x="180" y="80" width="40" height="40" rx="4" fill="none" stroke="%23c5a880" stroke-width="2"/>
      `;
    }
  } else if (type === 'diffuser') {
    if (angle === 1) {
      iconMarkup = `
        <path d="M140 260 C 140 150, 260 150, 260 260 Z" fill="none" stroke="%23121212" stroke-width="3" stroke-linejoin="round"/>
        <rect x="130" y="260" width="140" height="16" rx="4" fill="none" stroke="%23c5a880" stroke-width="2"/>
        <path d="M200 130 C 190 100, 210 70, 200 40" fill="none" stroke="%23121212" stroke-width="2" stroke-dasharray="3 3" opacity="0.6"/>
      `;
    } else {
      iconMarkup = `
        <ellipse cx="200" cy="240" rx="70" ry="25" fill="none" stroke="%23121212" stroke-width="2.5"/>
        <path d="M130 240 L130 180 C 130 140, 270 140, 270 180 L270 240" fill="none" stroke="%23121212" stroke-width="2"/>
        <circle cx="200" cy="180" r="10" fill="none" stroke="%23c5a880" stroke-width="2"/>
      `;
    }
  } else if (type === 'wallet') {
    if (angle === 1) {
      iconMarkup = `
        <rect x="110" y="130" width="180" height="140" rx="10" fill="none" stroke="%23121212" stroke-width="3"/>
        <path d="M110 180 C 150 160, 250 160, 290 180" fill="none" stroke="%23c5a880" stroke-width="2"/>
        <path d="M110 210 C 150 190, 250 190, 290 210" fill="none" stroke="%23121212" stroke-width="1.5" stroke-dasharray="2 2"/>
        <line x1="200" y1="130" x2="200" y2="160" stroke="%23121212" stroke-width="1.5"/>
      `;
    } else {
      iconMarkup = `
        <rect x="130" y="110" width="140" height="180" rx="8" transform="rotate(45 200 200)" fill="none" stroke="%23121212" stroke-width="2"/>
        <line x1="200" y1="110" x2="200" y2="290" stroke="%23c5a880" stroke-width="2"/>
      `;
    }
  } else if (type === 'stand') {
    if (angle === 1) {
      iconMarkup = `
        <rect x="70" y="170" width="260" height="50" rx="6" fill="none" stroke="%23121212" stroke-width="3"/>
        <rect x="95" y="180" width="210" height="30" rx="2" fill="none" stroke="%23c5a880" stroke-width="1.5" opacity="0.3"/>
        <line x1="90" y1="220" x2="90" y2="250" stroke="%23121212" stroke-width="3" stroke-linecap="round"/>
        <line x1="310" y1="220" x2="310" y2="250" stroke="%23121212" stroke-width="3" stroke-linecap="round"/>
        <!-- Keyboard slide-in indicator -->
        <rect x="110" y="235" width="180" height="12" rx="2" fill="none" stroke="%23121212" stroke-width="1" stroke-dasharray="2 2"/>
      `;
    } else {
      iconMarkup = `
        <polygon points="60,210 280,160 340,200 120,250" fill="none" stroke="%23121212" stroke-width="2.5" stroke-linejoin="round"/>
        <line x1="60" y1="210" x2="60" y2="230" stroke="%23121212" stroke-width="3"/>
        <line x1="120" y1="250" x2="120" y2="270" stroke="%23121212" stroke-width="3"/>
        <line x1="340" y1="200" x2="340" y2="220" stroke="%23121212" stroke-width="3"/>
      `;
    }
  } else if (type === 'hub') {
    if (angle === 1) {
      iconMarkup = `
        <rect x="120" y="150" width="160" height="100" rx="10" fill="none" stroke="%23121212" stroke-width="3"/>
        <path d="M200 150 C 200 110, 160 80, 100 80" fill="none" stroke="%23c5a880" stroke-width="2"/>
        <rect x="145" y="190" width="22" height="18" rx="2" fill="none" stroke="%23121212" stroke-width="1.5"/>
        <rect x="189" y="190" width="22" height="18" rx="2" fill="none" stroke="%23121212" stroke-width="1.5"/>
        <rect x="233" y="190" width="22" height="18" rx="2" fill="none" stroke="%23121212" stroke-width="1.5"/>
      `;
    } else {
      iconMarkup = `
        <polygon points="100,220 250,150 300,190 150,260" fill="none" stroke="%23121212" stroke-width="2.5" stroke-linejoin="round"/>
        <line x1="150" y1="260" x2="100" y2="280" stroke="%23c5a880" stroke-width="2"/>
      `;
    }
  } else {
    if (angle === 1) {
      iconMarkup = `
        <rect x="120" y="110" width="140" height="190" rx="8" fill="none" stroke="%23121212" stroke-width="3"/>
        <line x1="260" y1="140" x2="280" y2="260" stroke="%23c5a880" stroke-width="4" stroke-linecap="round"/>
        <rect x="225" y="180" width="35" height="35" rx="3" fill="none" stroke="%23121212" stroke-width="2"/>
        <line x1="145" y1="150" x2="215" y2="150" stroke="%23121212" stroke-width="1.5" stroke-dasharray="3 3"/>
        <line x1="145" y1="180" x2="200" y2="180" stroke="%23121212" stroke-width="1.5" stroke-dasharray="3 3"/>
      `;
    } else {
      iconMarkup = `
        <rect x="120" y="110" width="140" height="180" rx="6" fill="none" stroke="%23121212" stroke-width="2"/>
        <line x1="140" y1="110" x2="140" y2="290" stroke="%23121212" stroke-width="2"/>
        <line x1="150" y1="110" x2="150" y2="290" stroke="%23c5a880" stroke-width="1" opacity="0.4"/>
      `;
    }
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stop-color="%23FFFFFF"/>
          <stop offset="100%" stop-color="%23F4F3F0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(%23grad)"/>
      <g stroke-linecap="round" stroke-linejoin="round">
        ${iconMarkup}
      </g>
      <text x="30" y="360" font-family="'Outfit', sans-serif" font-size="11" font-weight="600" fill="%23121212" letter-spacing="2.5">SIMPLE.</text>
      <text x="370" y="360" font-family="'Inter', sans-serif" font-size="9" fill="%236A6864" text-anchor="end" letter-spacing="0.5">${category.toUpperCase()}</text>
    </svg>
  `;

  // Compress spacing and return escaped data URL
  const cleanedSvg = svg.replace(/\s+/g, ' ').trim();
  return "data:image/svg+xml;utf8," + cleanedSvg;
}

export const products = [
  {
    id: "simple-wireless-charger",
    name: "Simple Wireless Charger",
    price: 3499,
    rating: 4.8,
    reviewsCount: 142,
    category: "charging",
    tag: "Best Seller",
    shortDescription: "Sleek wireless charging pad crafted from solid American walnut wood and aircraft-grade aluminum.",
    description: "Form meets function in the Simple Wireless Charger. Featuring a premium solid American walnut top, precision-milled aluminum base, and built-in MagSafe-compatible alignment magnets, it provides up to 15W of fast wireless power. The braided nylon cable adds extra durability, making it the perfect focal point for any minimalist desk setup.",
    images: [
      generateProductSvg("Simple Wireless Charger", "charging", "charger", 1),
      generateProductSvg("Simple Wireless Charger", "charging", "charger", 2)
    ],
    specs: {
      "Material": "Solid Walnut, CNC Aluminum, Braided Nylon",
      "Output": "5W / 7.5W / 10W / 15W Fast Charge",
      "Connection": "USB-C (1.5m integrated cable)",
      "Dimensions": "90mm x 90mm x 12mm",
      "Weight": "180g"
    },
    reviews: [
      { user: "Sarah K.", rating: 5, date: "2026-06-15", text: "Stunning addition to my desk. The walnut wood grain is beautiful and matches my desk riser perfectly." },
      { user: "David M.", rating: 4, date: "2026-06-02", text: "Charges fast and the MagSafe alignment is strong. Docked one star because the cable is non-detachable." }
    ]
  },
  {
    id: "simple-mechanical-keyboard",
    name: "Simple Mechanical Keyboard",
    price: 8999,
    rating: 4.9,
    reviewsCount: 96,
    category: "workspace",
    tag: "Premium",
    shortDescription: "A compact 60% mechanical keyboard featuring silent linear switches and solid brass plate.",
    description: "The Simple Mechanical Keyboard is designed for quiet focus. It features a compact 60% layout to optimize desk space, silent linear switches factory-lubed for buttery smoothness, and an internal brass plate for a deep, muted sound signature. Encased in a solid CNC-milled anodized aluminum chassis, it is topped with custom dye-sublimated PBT keycaps.",
    images: [
      generateProductSvg("Simple Mechanical Keyboard", "workspace", "keyboard", 1),
      generateProductSvg("Simple Mechanical Keyboard", "workspace", "keyboard", 2)
    ],
    specs: {
      "Layout": "60% ANSI Layout (61 keys)",
      "Switches": "Silent Linear (Pre-lubed, 45g actuation)",
      "Keycaps": "Cherry Profile Dye-Sub PBT",
      "Connectivity": "Detachable USB-C",
      "Backlight": "Subtle Warm White LED (Adjustable)"
    },
    reviews: [
      { user: "Marcus L.", rating: 5, date: "2026-07-01", text: "Absolutely phenomenal typing experience. The sound is a quiet 'thock' that doesn't annoy my colleagues." },
      { user: "Emma T.", rating: 5, date: "2026-06-20", text: "The weight of this keyboard is substantial. It stays locked to the desk and feels like a luxury instrument." }
    ]
  },
  {
    id: "simple-merino-desk-mat",
    name: "Simple Merino Desk Mat",
    price: 2499,
    rating: 4.7,
    reviewsCount: 204,
    category: "workspace",
    tag: "Essential",
    shortDescription: "Soft, water-resistant desk mat made from premium 100% Merino wool felt.",
    description: "Protect your workspace and enhance mouse tracking with the Simple Merino Desk Mat. Made from 100% genuine Merino wool felt, it offers natural water resistance, thermal insulation, and a soft, comfortable surface for your wrists. The underside is lined with biodegradable natural rubber dots to ensure it stays firmly in place.",
    images: [
      generateProductSvg("Simple Merino Desk Mat", "workspace", "mat", 1),
      generateProductSvg("Simple Merino Desk Mat", "workspace", "mat", 2)
    ],
    specs: {
      "Material": "100% Merino Wool Felt, Cork-Rubber Backing",
      "Thickness": "4mm",
      "Dimensions": "900mm x 300mm (Medium Large)",
      "Maintenance": "Lint-roll or spot clean with mild detergent",
      "Color": "Minimalist Slate Grey"
    },
    reviews: [
      { user: "Alex B.", rating: 5, date: "2026-07-10", text: "Incredibly soft felt. Doesn't scratch or feel itchy. Mouse glides perfectly." },
      { user: "Clara H.", rating: 4, date: "2026-06-18", text: "Looks great. Be sure to follow the cleaning instructions, wool can shrink if you wash it wrong." }
    ]
  },
  {
    id: "simple-anc-headphones",
    name: "Simple ANC Headphones",
    price: 14999,
    rating: 4.9,
    reviewsCount: 312,
    category: "audio",
    tag: "Top Rated",
    shortDescription: "Premium wireless over-ear headphones with custom hybrid Active Noise Cancellation.",
    description: "Escape the noise and immerse yourself in pure sound. The Simple ANC Headphones feature advanced hybrid active noise cancellation, custom-tuned 40mm beryllium drivers, and a comfortable, lightweight over-ear design. Constructed with memory foam ear cushions covered in vegan leather, it provides up to 45 hours of playback on a single charge.",
    images: [
      generateProductSvg("Simple ANC Headphones", "audio", "headphones", 1),
      generateProductSvg("Simple ANC Headphones", "audio", "headphones", 2)
    ],
    specs: {
      "Drivers": "40mm Beryllium Dynamic Drivers",
      "ANC": "Hybrid Active Noise Cancellation (up to 40dB)",
      "Battery Life": "45 Hours (ANC Off) / 35 Hours (ANC On)",
      "Bluetooth": "Version 5.2 (Supports aptX Adaptive, AAC)",
      "Charging": "USB-C Quick Charge (10 mins = 5 hours)"
    },
    reviews: [
      { user: "Julian R.", rating: 5, date: "2026-07-05", text: "The noise cancellation is up there with the best, but the sound profile is much more balanced. Not artificially bass-boosted." },
      { user: "Sofia V.", rating: 5, date: "2026-06-29", text: "Stunning aesthetic. I got the sandstone white color and it looks incredibly clean and futuristic." }
    ]
  },
  {
    id: "simple-ergonomic-mouse",
    name: "Simple Ergonomic Mouse",
    price: 3999,
    rating: 4.6,
    reviewsCount: 88,
    category: "workspace",
    tag: "Ergonomic",
    shortDescription: "Ultra-quiet, ergonomic wireless mouse with stainless steel scroll wheel.",
    description: "Designed to conform to your natural grip, the Simple Ergonomic Mouse features a hand-sculpted profile that reduces wrist strain during long working hours. Click buttons are equipped with silent switches that damp noise while retaining a tactile click. The solid stainless steel scroll wheel provides precise, weighted scrolling.",
    images: [
      generateProductSvg("Simple Ergonomic Mouse", "workspace", "mouse", 1),
      generateProductSvg("Simple Ergonomic Mouse", "workspace", "mouse", 2)
    ],
    specs: {
      "Sensor": "High-precision Optical (800 - 4000 DPI)",
      "Buttons": "5 Buttons (Silent switches)",
      "Scroll Wheel": "Precision Stainless Steel, electromagnetic friction",
      "Connectivity": "Bluetooth + 2.4GHz Wireless (USB Receiver included)",
      "Battery": "Rechargeable Li-Po (Type-C, up to 70 days)"
    },
    reviews: [
      { user: "Oliver P.", rating: 4, date: "2026-05-12", text: "Very comfortable to hold. The silent click is awesome for late-night editing. Wish there was an custom app for button remapping." },
      { user: "Rachel G.", rating: 5, date: "2026-05-09", text: "Super clean looking mouse. Pairs instantly with my Mac." }
    ]
  },
  {
    id: "simple-desk-organizer",
    name: "Simple Desk Organizer",
    price: 2199,
    rating: 4.8,
    reviewsCount: 115,
    category: "workspace",
    tag: "New",
    shortDescription: "Modular desktop tray kit with aluminum base and solid oak dividers.",
    description: "Keep your workspace tidy with the modular Simple Desk Organizer. It features a heavy, sandblasted aluminum base tray and three solid oak partition blocks that slide along magnetic tracks. Customize the layout to store your pens, cards, keys, and phone in one elegant, cohesive station.",
    images: [
      generateProductSvg("Simple Desk Organizer", "workspace", "organizer", 1),
      generateProductSvg("Simple Desk Organizer", "workspace", "organizer", 2)
    ],
    specs: {
      "Material": "Anodized Aluminum Base, Solid White Oak",
      "Modules": "1 Pen Holder, 1 Phone Dock, 1 Catch-all Tray",
      "Dimensions": "260mm x 180mm x 35mm",
      "Base Weight": "450g (weighted design)"
    },
    reviews: [
      { user: "Ethan S.", rating: 5, date: "2026-07-04", text: "Excellent build quality. Heavy enough that it doesn't slide around when grabbing items. Wood smells great." }
    ]
  },
  {
    id: "simple-smart-bottle",
    name: "Simple Smart Water Bottle",
    price: 3299,
    rating: 4.5,
    reviewsCount: 74,
    category: "lifestyle",
    tag: "Smart Tech",
    shortDescription: "Self-cleaning insulated bottle with subtle LED hydration reminders.",
    description: "Stay hydrated effortlessly. The Simple Smart Water Bottle features double-wall vacuum insulation to keep drinks cold for 24 hours. The smart cap is equipped with a non-intrusive glow ring that pulses gently to remind you to drink water, and contains a UV-C LED that sanitizes the bottle interior with a 60-second cycle.",
    images: [
      generateProductSvg("Simple Smart Water Bottle", "lifestyle", "bottle", 1),
      generateProductSvg("Simple Smart Water Bottle", "lifestyle", "bottle", 2)
    ],
    specs: {
      "Capacity": "600ml (20 oz)",
      "Material": "18/8 Food-grade Stainless Steel, BPA-free plastic",
      "Sanitization": "Built-in UV-C LED (99.9% purification)",
      "Battery": "Magnetic USB Charge (1 charge = 1 month)",
      "Insulation": "Double-wall vacuum (24h cold, 12h hot)"
    },
    reviews: [
      { user: "Lucas T.", rating: 4, date: "2026-06-11", text: "Love the self-cleaning function, no more musty smell! The hydration ring is a bit faint in bright office light though." }
    ]
  },
  {
    id: "simple-ceramic-diffuser",
    name: "Simple Ceramic Diffuser",
    price: 2999,
    rating: 4.8,
    reviewsCount: 189,
    category: "lifestyle",
    tag: "Wellness",
    shortDescription: "Handcrafted stone ceramic diffuser for elegant ultrasonic aromatherapy.",
    description: "Crafted from handcrafted porcelain, the Simple Ceramic Diffuser doubles as a sculptural centerpiece. It uses ultrasonic vibrations to atomize water and essential oils, dispersing a cool, aromatic mist without heat. Features an optional warm ambient LED glow that mimics candlelight.",
    images: [
      generateProductSvg("Simple Ceramic Diffuser", "lifestyle", "diffuser", 1),
      generateProductSvg("Simple Ceramic Diffuser", "lifestyle", "diffuser", 2)
    ],
    specs: {
      "Cover": "Handcrafted Stoneware Porcelain",
      "Capacity": "120ml water tank",
      "Runtime": "3 hours (continuous) / 6 hours (interval)",
      "Coverage": "Up to 500 sq ft",
      "Safety": "Auto-shutoff when water runs out"
    },
    reviews: [
      { user: "Nora B.", rating: 5, date: "2026-07-02", text: "Looks like a piece of high-end art. Extremely quiet, and the light is so soothing at night." }
    ]
  },
  {
    id: "simple-leather-wallet",
    name: "Simple Leather Wallet",
    price: 1999,
    rating: 4.7,
    reviewsCount: 220,
    category: "lifestyle",
    tag: "Daily Carry",
    shortDescription: "Ultra-slim card sleeve in vegetable-tanned leather with RFID shield.",
    description: "The Simple Leather Wallet is the ultimate minimalist companion. Measuring just 6mm thick, it fits comfortably in your front pocket. Hand-stitched from premium Italian vegetable-tanned leather, it will develop a unique, rich patina over time. Houses up to 6 cards and folded cash, secured by an internal RFID protection shield.",
    images: [
      generateProductSvg("Simple Leather Wallet", "lifestyle", "wallet", 1),
      generateProductSvg("Simple Leather Wallet", "lifestyle", "wallet", 2)
    ],
    specs: {
      "Leather": "Italian Vegetable-tanned Full Grain Leather",
      "Capacity": "6 card slots + central cash sleeve",
      "Thickness": "6mm (empty)",
      "Protection": "RFID Blocking Layer",
      "Stitching": "Hand-waxed linen thread"
    },
    reviews: [
      { user: "Leo N.", rating: 5, date: "2026-07-08", text: "Forces you to downsize your wallet junk. Fits 5 cards and 3 bills perfectly. Leather smells amazing!" }
    ]
  },
  {
    id: "simple-monitor-stand",
    name: "Simple Monitor Stand",
    price: 5999,
    rating: 4.9,
    reviewsCount: 84,
    category: "workspace",
    tag: "Ergonomic",
    shortDescription: "Solid oak monitor riser designed to improve posture and clear desk clutter.",
    description: "Raise your monitor to ergonomic eye level while reclaiming valuable desk real estate. The Simple Monitor Stand is CNC-machined from solid American oak wood with reinforced steel legs. Underneath, it provides spacious storage to slide away your keyboard and mouse when the workday is finished.",
    images: [
      generateProductSvg("Simple Monitor Stand", "workspace", "stand", 1),
      generateProductSvg("Simple Monitor Stand", "workspace", "stand", 2)
    ],
    specs: {
      "Material": "Solid American Oak, Powder-coated Steel Legs",
      "Max Load": "40kg (88 lbs)",
      "Dimensions": "550mm x 220mm x 110mm",
      "Clearance": "90mm vertical height underneath riser",
      "Finish": "Water-resistant matte polyurethane varnish"
    },
    reviews: [
      { user: "Fiona G.", rating: 5, date: "2026-06-25", text: "Beautiful grain. Sturdy enough for my 32-inch monitor without any sagging." }
    ]
  },
  {
    id: "simple-usb-hub",
    name: "Simple USB-C Hub",
    price: 2799,
    rating: 4.6,
    reviewsCount: 103,
    category: "charging",
    tag: "Workspace",
    shortDescription: "6-in-1 space-saving aluminum USB-C hub with braided cable connection.",
    description: "Expand your laptop's connectivity without adding bulk. The Simple USB-C Hub is encased in a bead-blasted aluminum shell designed to match modern space gray devices. It features HDMI 4K60Hz output, 100W Power Delivery pass-through charging, 2x USB 3.0 ports, and dedicated SD/MicroSD card readers.",
    images: [
      generateProductSvg("Simple USB-C Hub", "charging", "hub", 1),
      generateProductSvg("Simple USB-C Hub", "charging", "hub", 2)
    ],
    specs: {
      "Ports": "1x HDMI (4K @ 60Hz), 1x USB-C PD (100W), 2x USB-A 3.0, SD & TF Card slots",
      "Material": "CNC Aluminum, TPE reinforcement",
      "Cable Length": "150mm braided cord",
      "Dimensions": "110mm x 35mm x 12mm",
      "Weight": "65g"
    },
    reviews: [
      { user: "Arthur P.", rating: 4, date: "2026-06-05", text: "Compact, gets a bit warm when running PD and HDMI simultaneously, but performance is solid and flicker-free." }
    ]
  },
  {
    id: "simple-journal-set",
    name: "Simple Journal Set",
    price: 1799,
    rating: 4.8,
    reviewsCount: 154,
    category: "lifestyle",
    tag: "Essential",
    shortDescription: "Refillable vegan leather notebook combined with a heavy solid brass pen.",
    description: "Commit your ideas to paper with the Simple Journal Set. It features a tactile, water-resistant vegan leather cover enclosing a 160-page dotted journal made from eco-friendly, ink-bleed resistant recycled stone paper. Paired with a heavy, solid brass gel pen that will age beautifully and develop its own patina.",
    images: [
      generateProductSvg("Simple Journal Set", "lifestyle", "journal", 1),
      generateProductSvg("Simple Journal Set", "lifestyle", "journal", 2)
    ],
    specs: {
      "Paper": "120 GSM Dotted Stone Paper (160 pages)",
      "Cover": "Refillable Vegan Polyurethane Leather",
      "Pen Material": "Solid C3604 Brass",
      "Refill": "0.5mm black gel ink (Standard G2 refill size)",
      "Closure": "Hidden magnetic strap"
    },
    reviews: [
      { user: "Iris D.", rating: 5, date: "2026-06-30", text: "The stone paper is unbelievably smooth to write on. Pen has a lovely, reassuring weight." }
    ]
  }
];
