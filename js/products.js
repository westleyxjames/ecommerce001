const products = [
  {
    id: '1',
    name: 'Floral Summer Dress',
    price: 68.00,
    image: 'https://images.unsplash.com/photo-1771963042241-f93b3e037d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBmbG9yYWwlMjBzdW1tZXIlMjBkcmVzc3xlbnwxfHx8fDE3NzIwMjI3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Dresses',
    description: 'Light and breezy floral print dress perfect for summer days. Features a flattering silhouette and comfortable fit.',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    colors: ['#ff69b4', '#87ceeb', '#ffd700'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Floral print design',
      'Lightweight fabric',
      'Comfortable fit',
      'Perfect for summer',
      'Easy care'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Care': 'Machine wash cold',
      'Fit': 'True to size',
      'Origin': 'Made in USA'
    }
  },
  {
    id: '2',
    name: 'Elegant Midi Dress',
    price: 89.00,
    image: 'https://images.unsplash.com/photo-1728485299033-a3b6e98cb5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVsZWdhbnQlMjBtaWRpJTIwZHJlc3MlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzcyMDIzMTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Dresses',
    description: 'Sophisticated midi dress with elegant draping. Perfect for formal occasions and special events.',
    rating: 4.9,
    reviews: 203,
    inStock: true,
    colors: ['#000000', '#8b4513', '#2f4f4f'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Elegant design',
      'Premium fabric',
      'Flattering fit',
      'Versatile styling',
      'Quality construction'
    ],
    specifications: {
      'Material': 'Polyester blend',
      'Care': 'Dry clean only',
      'Fit': 'Regular',
      'Origin': 'Imported'
    }
  },
  {
    id: '3',
    name: 'Classic Denim Jacket',
    price: 79.00,
    image: 'https://images.unsplash.com/photo-1734415480316-d4eca40f4c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBjYXN1YWwlMjBkZW5pbSUyMGphY2tldHxlbnwxfHx8fDE3NzIwMjI3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Jackets',
    description: 'Timeless denim jacket for everyday wear. Versatile piece that pairs with any outfit.',
    rating: 4.7,
    reviews: 178,
    inStock: true,
    colors: ['#4682b4', '#2c2c2c', '#b0c4de'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Classic design',
      'Durable denim',
      'Multiple pockets',
      'Comfortable fit',
      'Year-round wear'
    ],
    specifications: {
      'Material': '100% Cotton Denim',
      'Care': 'Machine wash cold',
      'Fit': 'Regular',
      'Origin': 'USA'
    }
  },
  {
    id: '4',
    name: 'White Cotton Blouse',
    price: 54.00,
    image: 'https://images.unsplash.com/photo-1664918327329-a483043036e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjB3aGl0ZSUyMGJsb3VzZXxlbnwxfHx8fDE3NzIwMjI3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Tops',
    description: 'Crisp white blouse for professional and casual settings. Essential wardrobe staple.',
    rating: 4.6,
    reviews: 245,
    inStock: true,
    colors: ['#ffffff', '#f5f5dc', '#e6e6fa'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Crisp cotton fabric',
      'Classic collar',
      'Button-front design',
      'Versatile styling',
      'Easy care'
    ],
    specifications: {
      'Material': '100% Cotton',
      'Care': 'Machine wash cold',
      'Fit': 'True to size',
      'Origin': 'Imported'
    }
  },
  {
    id: '5',
    name: 'Striped Casual Shirt',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1703863128768-261ed05ff8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBzdHJpcGVkJTIwc2hpcnR8ZW58MXx8fHwxNzcyMDIyNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Tops',
    description: 'Classic striped shirt with modern fit. Perfect for casual and smart-casual looks.',
    rating: 4.5,
    reviews: 134,
    inStock: true,
    colors: ['#4169e1', '#ff6347', '#32cd32'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Striped pattern',
      'Relaxed fit',
      'Breathable fabric',
      'Easy to style',
      'All-season wear'
    ],
    specifications: {
      'Material': 'Cotton blend',
      'Care': 'Machine wash cold',
      'Fit': 'Relaxed',
      'Origin': 'Imported'
    }
  },
  {
    id: '6',
    name: 'Black Evening Dress',
    price: 129.00,
    image: 'https://images.unsplash.com/photo-1767899281330-9d59ebaf89b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBibGFjayUyMGRyZXNzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIwMjI3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Dresses',
    description: 'Stunning black dress for evening events. Elegant silhouette with premium finish.',
    rating: 4.9,
    reviews: 289,
    inStock: true,
    colors: ['#000000', '#8b0000', '#191970'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Evening wear',
      'Premium fabric',
      'Elegant design',
      'Flattering cut',
      'Special occasion'
    ],
    specifications: {
      'Material': 'Premium polyester',
      'Care': 'Dry clean only',
      'Fit': 'Fitted',
      'Origin': 'Imported'
    }
  },
  {
    id: '7',
    name: 'Pink Cozy Cardigan',
    price: 64.00,
    image: 'https://images.unsplash.com/photo-1702324765025-c3adbfce330c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBwaW5rJTIwY2FyZGlnYW58ZW58MXx8fHwxNzcyMDIyNzE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sweaters',
    description: 'Soft and cozy cardigan in beautiful pink. Perfect for layering during cooler months.',
    rating: 4.7,
    reviews: 167,
    inStock: true,
    colors: ['#ff69b4', '#ffc0cb', '#db7093'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Soft knit fabric',
      'Button-front',
      'Cozy and warm',
      'Versatile layering',
      'Easy care'
    ],
    specifications: {
      'Material': 'Acrylic blend',
      'Care': 'Machine wash cold',
      'Fit': 'Regular',
      'Origin': 'Imported'
    }
  },
  {
    id: '8',
    name: 'Blue Maxi Dress',
    price: 94.00,
    image: 'https://images.unsplash.com/photo-1703001523704-e6a9d32b3067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBibHVlJTIwbWF4aSUyMGRyZXNzfGVufDF8fHx8MTc3MjAyMjcyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Dresses',
    description: 'Flowing maxi dress in beautiful blue. Comfortable and stylish for any occasion.',
    rating: 4.8,
    reviews: 221,
    inStock: true,
    colors: ['#4169e1', '#87ceeb', '#191970'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Maxi length',
      'Flowing fabric',
      'Comfortable fit',
      'Beautiful color',
      'Easy to style'
    ],
    specifications: {
      'Material': 'Rayon blend',
      'Care': 'Machine wash cold',
      'Fit': 'Relaxed',
      'Origin': 'Imported'
    }
  },
  {
    id: '9',
    name: 'High Waist Jeans',
    price: 72.00,
    image: 'https://images.unsplash.com/photo-1716032583442-ee716d40fc1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBoaWdoJTIwd2Fpc3QlMjBqZWFuc3xlbnwxfHx8fDE3NzIwMjI3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Bottoms',
    description: 'Classic high waist jeans with modern fit. Flattering silhouette and premium denim.',
    rating: 4.6,
    reviews: 312,
    inStock: true,
    colors: ['#4682b4', '#000000', '#87ceeb'],
    sizes: ['24', '25', '26', '27', '28', '29', '30'],
    features: [
      'High waist design',
      'Stretch denim',
      'Flattering fit',
      'Quality construction',
      'Versatile style'
    ],
    specifications: {
      'Material': '98% Cotton, 2% Elastane',
      'Care': 'Machine wash cold',
      'Fit': 'True to size',
      'Origin': 'USA'
    }
  },
  {
    id: '10',
    name: 'Wide Leg Pants',
    price: 76.00,
    image: 'https://images.unsplash.com/photo-1764764860028-fd5bee169217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjB3aWRlJTIwbGVnJTIwcGFudHN8ZW58MXx8fHwxNzcyMDIyNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Bottoms',
    description: 'Trendy wide leg pants for comfortable style. Perfect for both casual and dressy occasions.',
    rating: 4.7,
    reviews: 189,
    inStock: true,
    colors: ['#2c2c2c', '#8b4513', '#708090'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Wide leg design',
      'Comfortable fit',
      'Flowy fabric',
      'High waist',
      'Versatile styling'
    ],
    specifications: {
      'Material': 'Polyester blend',
      'Care': 'Machine wash cold',
      'Fit': 'Relaxed',
      'Origin': 'Imported'
    }
  },
  {
    id: '11',
    name: 'Leather Jacket',
    price: 189.00,
    image: 'https://images.unsplash.com/photo-1664894626606-283ad185a726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBsZWF0aGVyJTIwamFja2V0fGVufDF8fHx8MTc3MjAyMjcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Jackets',
    description: 'Premium leather jacket with timeless design. Investment piece for your wardrobe.',
    rating: 4.9,
    reviews: 267,
    inStock: true,
    colors: ['#000000', '#8b4513', '#2f4f4f'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Genuine leather',
      'Classic design',
      'Premium quality',
      'Multiple pockets',
      'Timeless style'
    ],
    specifications: {
      'Material': 'Genuine leather',
      'Care': 'Professional clean',
      'Fit': 'Regular',
      'Origin': 'Imported'
    }
  },
  {
    id: '12',
    name: 'Green Midi Dress',
    price: 82.00,
    image: 'https://images.unsplash.com/photo-1512976129159-611da2035ba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBncmVlbiUyMGRyZXNzfGVufDF8fHx8MTc3MjAyMjcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Dresses',
    description: 'Beautiful green dress with elegant styling. Perfect for spring and summer events.',
    rating: 4.8,
    reviews: 198,
    inStock: true,
    colors: ['#228b22', '#9acd32', '#006400'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Beautiful color',
      'Elegant design',
      'Comfortable fit',
      'Quality fabric',
      'Versatile styling'
    ],
    specifications: {
      'Material': 'Polyester blend',
      'Care': 'Machine wash cold',
      'Fit': 'True to size',
      'Origin': 'Imported'
    }
  },
  {
    id: '13',
    name: 'Gold Chain Necklace',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1611012756377-05e2e4269fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBqZXdlbHJ5fGVufDF8fHx8MTc3MTk3MTc0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Jewelry',
    description: 'Elegant gold chain necklace. Perfect for layering or wearing alone.',
    rating: 4.7,
    reviews: 145,
    inStock: true,
    colors: ['#ffd700', '#c0c0c0', '#cd7f32'],
    sizes: ['One Size'],
    features: [
      'Gold finish',
      'Durable chain',
      'Adjustable length',
      'Hypoallergenic',
      'Gift ready'
    ],
    specifications: {
      'Material': 'Gold-plated brass',
      'Length': '16-18 inches',
      'Care': 'Keep dry',
      'Origin': 'USA'
    }
  },
  {
    id: '14',
    name: 'Pearl Stud Earrings',
    price: 36.00,
    image: 'https://images.unsplash.com/photo-1704957205757-50bb01eb3183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFybCUyMGVhcnJpbmdzJTIwamV3ZWxyeXxlbnwxfHx8fDE3NzE5NDI1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Jewelry',
    description: 'Classic pearl stud earrings. Timeless elegance for any occasion.',
    rating: 4.9,
    reviews: 234,
    inStock: true,
    colors: ['#ffffff', '#fffaf0', '#f0e68c'],
    sizes: ['One Size'],
    features: [
      'Genuine pearls',
      'Sterling silver posts',
      'Classic design',
      'Hypoallergenic',
      'Gift boxed'
    ],
    specifications: {
      'Material': 'Sterling silver, pearls',
      'Size': '8mm',
      'Care': 'Keep dry',
      'Origin': 'Imported'
    }
  },
  {
    id: '15',
    name: 'Gold Bangle Bracelet',
    price: 52.00,
    image: 'https://images.unsplash.com/photo-1767921777873-81818b812a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYnJhY2VsZXQlMjBqZXdlbHJ5fGVufDF8fHx8MTc3MjAwMjU2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Jewelry',
    description: 'Elegant gold bangle bracelet. Perfect for stacking or wearing solo.',
    rating: 4.6,
    reviews: 178,
    inStock: true,
    colors: ['#ffd700', '#c0c0c0', '#cd7f32'],
    sizes: ['S', 'M', 'L'],
    features: [
      'Gold finish',
      'Stackable design',
      'Comfortable fit',
      'Durable construction',
      'Gift ready'
    ],
    specifications: {
      'Material': 'Gold-plated brass',
      'Diameter': '2.5 inches',
      'Care': 'Keep dry',
      'Origin': 'Imported'
    }
  },
  {
    id: '16',
    name: 'Summer Sundress',
    price: 58.00,
    image: 'https://images.unsplash.com/photo-1587742288498-36ba2fb5e8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBzdW5kcmVzc3xlbnwxfHx8fDE3NzIwMjI3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Dresses',
    description: 'Light and airy sundress perfect for warm weather. Comfortable and stylish.',
    rating: 4.5,
    reviews: 167,
    inStock: true,
    colors: ['#ffb6c1', '#87ceeb', '#fff68f'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Lightweight fabric',
      'Comfortable fit',
      'Easy to wear',
      'Perfect for summer',
      'Machine washable'
    ],
    specifications: {
      'Material': 'Cotton blend',
      'Care': 'Machine wash cold',
      'Fit': 'Relaxed',
      'Origin': 'Imported'
    }
  },
  {
    id: '17',
    name: 'Yellow Floral Dress',
    price: 74.00,
    image: 'https://images.unsplash.com/photo-1589623538462-ca38cd06a72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjB5ZWxsb3clMjBkcmVzc3xlbnwxfHx8fDE3NzIwMjI3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Dresses',
    description: 'Bright yellow dress with cheerful design. Stand out in style.',
    rating: 4.7,
    reviews: 192,
    inStock: true,
    colors: ['#ffd700', '#ff8c00', '#fff68f'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Bright color',
      'Floral details',
      'Comfortable fit',
      'Eye-catching design',
      'Quality fabric'
    ],
    specifications: {
      'Material': 'Polyester blend',
      'Care': 'Machine wash cold',
      'Fit': 'True to size',
      'Origin': 'Imported'
    }
  },
  {
    id: '18',
    name: 'Silk Camisole Top',
    price: 62.00,
    image: 'https://images.unsplash.com/photo-1731131368081-b0d11bf07bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNpbGslMjBjYW1pJTIwdG9wJTIwZmFzaGlvbnxlbnwxfHx8fDE3NzIwMjMxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Tops',
    description: 'Luxurious silk camisole for elegant styling. Perfect for layering or solo wear.',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    colors: ['#000000', '#ffffff', '#ff69b4'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Silk fabric',
      'Luxurious feel',
      'Versatile styling',
      'Adjustable straps',
      'Premium quality'
    ],
    specifications: {
      'Material': '100% Silk',
      'Care': 'Hand wash cold',
      'Fit': 'True to size',
      'Origin': 'Imported'
    }
  },
  {
    id: '19',
    name: 'Cozy Knit Sweater',
    price: 68.00,
    image: 'https://images.unsplash.com/photo-1760551938736-968cca6553c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBjb3p5JTIwc3dlYXRlcnxlbnwxfHx8fDE3NzIwMjI3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sweaters',
    description: 'Warm and cozy knit sweater for cold days. Soft fabric and comfortable fit.',
    rating: 4.9,
    reviews: 289,
    inStock: true,
    colors: ['#8b4513', '#2f4f4f', '#696969'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Soft knit fabric',
      'Warm and cozy',
      'Comfortable fit',
      'Quality construction',
      'Easy care'
    ],
    specifications: {
      'Material': 'Wool blend',
      'Care': 'Hand wash cold',
      'Fit': 'Relaxed',
      'Origin': 'Imported'
    }
  },
  {
    id: '20',
    name: 'Plaid Mini Skirt',
    price: 46.00,
    image: 'https://images.unsplash.com/photo-1770364017831-23979fa37896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBsYWlkJTIwc2tpcnQlMjBvdXRmaXR8ZW58MXx8fHwxNzcyMDIzMTM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Bottoms',
    description: 'Classic plaid mini skirt with modern fit. Fun and flirty style.',
    rating: 4.6,
    reviews: 134,
    inStock: true,
    colors: ['#8b4513', '#000000', '#708090'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      'Plaid pattern',
      'Mini length',
      'Comfortable fit',
      'Versatile styling',
      'Quality fabric'
    ],
    specifications: {
      'Material': 'Polyester blend',
      'Care': 'Machine wash cold',
      'Fit': 'True to size',
      'Origin': 'Imported'
    }
  }
];
