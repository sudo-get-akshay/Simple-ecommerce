// Simple - Premium Minimalist Lifestyle Products Database

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
      "https://images.unsplash.com/photo-1622445262465-2481c4574875?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=600"
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
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&q=80&w=600"
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
      "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&q=80&w=600"
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
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600"
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
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?auto=format&fit=crop&q=80&w=600"
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
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600"
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
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=600"
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
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600"
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
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1588444839799-beca81d13a56?auto=format&fit=crop&q=80&w=600"
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
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600"
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
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1606229365731-980075ae8f00?auto=format&fit=crop&q=80&w=600"
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
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600"
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
