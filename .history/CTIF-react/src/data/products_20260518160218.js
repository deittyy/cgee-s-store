// src/data/products.js
const baseUrl = "https://ik.imagekit.io/vmbswzj1s";

export const allProducts = [
  {
    id: 14,
    name: "Your Product Name",
    price: 99,
    frontImg: `${baseUrl}/tr:f-auto,q-auto/clothing/14.png`,
    backImg: `${baseUrl}/tr:f-auto,q-auto/clothing/13.png`,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Purple", "Grey"],
  },
];
