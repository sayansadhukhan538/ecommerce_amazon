 const products = [
    { 
        id: 'product1',
        url: 'https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg', 
        title: {
            shortTitle: 'Smart Phone, iPhone, Apple',
            longTitle: 'Apple iPhone 13 (128GB) - (Product) RED'
        }, 
        price: {
            mrp: 69900,
            cost: 62999,
            discount: '10%'
        },
        description: '15 cm (6.1-inch) Super Retina XDR display. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos. Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording. 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording. A15 Bionic chip for lightning-fast performance',
        discount: 'From ₹61999', 
        tagline: 'Flat INR 2000 Off on HDFC BankCards' 
    },
    { 
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more' 
    },
    { 
        id: 'product3',
        url: 'https://m.media-amazon.com/images/I/613SAOPmLeL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/613SAOPmLeL._SL1500_.jpg', 
        title: {
            shortTitle: 'Smart Phone, Mobile, OnePlus',
            longTitle: 'OnePlus 11R 5G (Galactic Silver, 16GB RAM, 256GB Storage)'
        }, 
        price: {
            mrp: 44999,
            cost: 42499,
            discount: '14%'
        },
        description: 'Camera: Sensor: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera (FOV: 120 degree) and Macro Lens; 16MP Front (Selfie) Camera with EIS support. Camera Modes: Nightscape, Ultra HDR, Smart Scene Recognition, Portrait Mode, Pro Mode, Panorama, Tilt-Shift mode, Long Exposure, Dual-View Video, Retouch, Movie Mode, Raw file, Filters, Super Stable, Video Nightscape, Video HDR, Video Portrait, Focus Tracking, Timelapse, Macro mode. Display: 6.7 Inches; 120 Hz Super Fluid AMOLED; Resolution: 2772 X 1240 pixels ,450 ppi, 20.1:9, 10-bit Color Depth, HDR10+. Operating System: OxygenOS based on Android 13. Processor: Snapdragon 8+ Gen 1 Mobile Platform. 16GB LPDDR5X RAM, 256GB UFS3.1 STORAGE. Battery & Charging: 5000 mAh with 100W SUPERVOOC. In-Display Fingerprint Sensor',
        discount: 'From ₹499', 
        tagline: 'Smart Phone, Mobile, OnePlus Mobile, OnePlus 11R' 
    },
    
    { 
        id: 'product4',
        url: 'https://m.media-amazon.com/images/I/61Q0R5cdxWL._SL1500_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/61Q0R5cdxWL._SL1500_.jpg',
        title: {
            shortTitle: 'Smart Watches, Smart-band',
            longTitle: 'Noise ColorFit Pulse Grand Smart Watch with 1.69"(4.29cm) HD Display, 60 Sports Modes, 150 Watch Faces, Fast Charge, Spo2, Stress, Sleep, Heart Rate Monitoring & IP68 Waterproof (Jet Black)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '2000 Watts Hair Dryer with powerful AC motor creates ideal airflow & temperature for salon-style results. 2 Speed and 3 Temperature settings for convenient styling, Includes Cool & Hot Air. Includes Cool Shot Button that provides a burst of cold air to help set the desired hairstyle. Auto Shut-Off Function for Over Heating Protection. Comes with Diffuser, Concentrator Nozzle, Comb and 2.5 meter Long Cord. Concentrator Nozzle, to focus air flow for Precise Styling & Touch-ups. Diffuser helps to evenly and gently maximize volume whilst keeping it frizz-free. Comb help to Detangles hair with minimal tension and helps to straighten the hair while drying, 2 Years manufacturer’s warranty.',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more' 
    },
    { 
        id: 'product6',
        url: 'https://m.media-amazon.com/images/I/81KEKEDFUcL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/81KEKEDFUcL._SL1500_.jpg', 
        title: {
            shortTitle: 'Bagpack, Bag',
            longTitle: 'American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)'
        }, 
        price: {
            mrp: 2300,
            cost: 1049,
            discount: '54%'
        },
        description: 'Laptop Compatibility: No, Strap Type: Adjustable, Trolley Support: No. With Rain Cover : No. Outer Material: Polyester, Color: Black. Water Resistance: Water resistant , not Waterproof. Capacity: 32 liters; Dimensions: 31.5 x 22 x 49.5 Centimeters. Number of Wheels: 0, Number of compartments: 3. Warranty type: Manufacturer; 1 year International warranty valid for 1 year from the original date of. Mesh pockets on both sides to accommodate your sipper or bottle and umbrella. Mesh Padding on back & shoulder strap to provide comfort & better back support.',
        discount: 'From ₹599', 
        tagline: 'Bag, Duffle, American Tourister & more' 
    },
    { 
        id: 'product7',
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product8',
        url: 'https://m.media-amazon.com/images/I/51JFb7FctDL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/51JFb7FctDL._SL1500_.jpg', 
        title: {
            shortTitle: 'LG Smart AC, LG Air Conditioner, AC',
            longTitle: 'LG 1.5 Ton 5 Star AI DUAL Inverter Split AC (Copper, Super Convertible 6-in-1 Cooling, 2023 Model, White)'
        }, 
        price: {
            mrp: 75990,
            cost: 44490,
            discount: '41%'
        },
        description: 'Split Ac With Inverter Compressor: Variable Speed Compressor Which Adjusts Power Depending On Heat Load |With AI Convertible 6-in-1 user gets a flexibility to increase or decrease cooling capacity as per requirements.. Capacity: 1.5 Ton Suitable for medium sized rooms (151 to 180 sq ft.); Air Circulation: 653/1236 (In/Out) CFM & Ambient Temperature: 52 degree Celsius with 4 way air swing. Energy Rating : 5 Star - Best in class efficiency | Annual Energy Consumption: 685.26 Units Per Year| ISEER Value: 5.2 (Please Refer Energy Label On Product Page Or Contact Brand For More Details). Manufacturer Warranty: 10 Years on Compressor with Gas Charging, 5 Years on PCB and 1 Year on product (T&C). Copper With ocean black protection: Prevents from rust & corrosion; Increase durability; Uninterrupted cooling. Key Features: DUAL Inverter Compressor; AI Convertible 6-in-1 cooling; VIRAAT; HD Filter with Anti Virus Protection; ADC Sensor; Ocean Black Fin Anti Corrosive; Ocean Black Protection; EZ Clean Filter; Low Gas Detection; 100% Copper condenser. Special Features: 6 Fan Speed; Hi Grooved Copper; Stabilizer Free Operation within 120~290 V range; Smart Diagnosis System; Comfort Air; Magic Display; Fresh Dry; Auto Clean; Mute Function; On/Off Timer; Sleep mode; Auto Restart.',
        discount: 'From ₹45999', 
        tagline: 'Flat INR 1250 Off on Select CardsFlat INR 1250 Off on Select Cards' 
    },
    { 
        id: 'product9',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product10',
        url: 'https://m.media-amazon.com/images/I/81I3w4J6yjL._SL1500_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/81I3w4J6yjL._SL1500_.jpg', 
        title: {
            shortTitle: 'Smart Phone, Samsung',
            longTitle: 'Samsung Galaxy M33 5G (Mystique Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Without Charger'
        }, 
        price: {
            mrp: 24990,
            cost: 16999,
            discount: '32%'
        },
        description: 'Exynos 1280 Octa Core 2.4GHz 5nm Processor with the 12 band support for a True 5G experience. 16.72 centimeters (6.6-inch) LCD Display, FHD+ resolution, 1080x2400 pixels protected by Gorilla Glass 5. Versatile Quad camera setup-50MP (F1.8)+ 5MP (F2.2/UW- 123 FOV) + 2MP (F2.4/Depth) + 2MP (F2.4/Macro) QuadCamera| 8MP (F1.8) Front Camera. Massive 6000 mAh Battery | Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2+ Micro SD. Latest Android v12.0, One UI 4 operating system. Intelligent Voice Focus | Power Cool Technology | Auto Data Switching. Connector type: 3.5mm jack',
        discount: 'From ₹61999', 
        tagline: 'Flat INR 2000 Off on Axis Bank Credit Cards' 
    },

];

module.exports = products;