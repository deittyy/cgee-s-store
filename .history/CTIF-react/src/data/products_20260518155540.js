// src/data/products.js
const baseUrl = "https://ik.imagekit.io/vmbswzj1s";

export const allProducts = [
  {
    id: 1,
    name: "Handwoven Purple Agbada",
    price: 129,
    frontImg: `${baseUrl}/clothing/14.png`,
    backImg: `${baseUrl}/clothing13.png`,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Purple", "Grey", "White"],
  },
  {
    id: 2,
    name: "Multiversal",
    price: 99,
    frontImg: `${baseUrl}/12.png`,
    backImg: `${baseUrl}/11.png`,
    inStock: true,
    sizes: ["M", "L", "XL"],
    colors: ["Grey", "Black"],
  },
  // ... continue for all 22 products
];