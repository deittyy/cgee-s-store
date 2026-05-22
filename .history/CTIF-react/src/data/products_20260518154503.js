// src/data/products.js
const baseUrl = 'https://ik.imagekit.io/vmbswzj1s/clothing';

export const allProducts = [
  {
    id: 1,
    name: "Handwoven Purple Agbada",
    price: 129,
    frontImg: `${baseUrl}/agbada-front.jpg`,
    backImg: `${baseUrl}/agbada-back.jpg`,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Purple", "Grey", "White"]
  },
  {
    id: 2,
    name: "Multiversal Dashiki",
    price: 99,
    frontImg: `${baseUrl}/dashiki-front.jpg`,
    backImg: `${baseUrl}/dashiki-back.jpg`,
    inStock: true,
    sizes: ["M", "L", "XL"],
    colors: ["Grey", "Black"]
  },
  // ... continue for all 22 products
];