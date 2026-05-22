// src/data/products.js
// const baseUrl = "https://ik.imagekit.io/vmbswzj1s/clothing";

export const allProducts = [
  {
    id: 1,
    name: "Handwoven Purple Agbada",
    price: 129,
    frontImg: `url(https://ik.imagekit.io/vmbswzj1s/clothing/12.png?updatedAt=1779113955411)`,
    backImg: `${baseUrl}/13.png`,
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