const phones = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 13",
    price: 799,
    rating: 4.8,
    discount: 10,
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg",
    color: "Midnight",
    storage: "128GB",
  },
  {
    id: 2,
    brand: "Samsung",
    model: "Galaxy S21",
    price: 699,
    rating: 4.7,
    discount: 15,
    image:
      "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-5g-1.jpg",
    color: "Phantom Gray",
    storage: "256GB",
  },
  {
    id: 3,
    brand: "Google",
    model: "Pixel 6",
    price: 599,
    rating: 4.6,
    discount: 5,
    image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-1.jpg",
    color: "Stormy Black",
    storage: "128GB",
  },
  {
    id: 4,
    brand: "OnePlus",
    model: "9 Pro",
    price: 899,
    rating: 4.5,
    discount: 8,
    image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-pro-1.jpg",
    color: "Morning Mist",
    storage: "256GB",
  },
  {
    id: 5,
    brand: "Xiaomi",
    model: "Mi 11",
    price: 749,
    rating: 4.4,
    discount: 12,
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi11-1.jpg",
    color: "Midnight Gray",
    storage: "128GB",
  },
  {
    id: 6,
    brand: "Sony",
    model: "Xperia 1 III",
    price: 1099,
    rating: 4.3,
    discount: 7,
    image: "https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-1-iii-01.jpg",
    color: "Frosted Black",
    storage: "256GB",
  },
  {
    id: 7,
    brand: "LG",
    model: "Velvet",
    price: 499,
    rating: 4.2,
    discount: 20,
    image: "https://fdn2.gsmarena.com/vv/pics/lg/lg-velvet-1.jpg",
    color: "Aurora Gray",
    storage: "128GB",
  },
  {
    id: 8,
    brand: "Motorola",
    model: "Edge+",
    price: 999,
    rating: 4.1,
    discount: 10,
    image:
      "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge-plus-1.jpg",
    color: "Thunder Grey",
    storage: "256GB",
  },
  {
    id: 9,
    brand: "Nokia",
    model: "8.3",
    price: 699,
    rating: 4.0,
    discount: 15,
    image: "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-83-5g-1.jpg",
    color: "Polar Night",
    storage: "128GB",
  },
  {
    id: 10,
    brand: "Huawei",
    model: "P40 Pro",
    price: 899,
    rating: 4.5,
    discount: 5,
    image: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p40-pro-01.jpg",
    color: "Silver Frost",
    storage: "256GB",
  },
  {
    id: 11,
    brand: "Oppo",
    model: "Find X3 Pro",
    price: 1099,
    rating: 4.6,
    discount: 8,
    image: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x3-pro-1.jpg",
    color: "Gloss Black",
    storage: "256GB",
  },
  {
    id: 12,
    brand: "Vivo",
    model: "X60 Pro",
    price: 749,
    rating: 4.3,
    discount: 12,
    image: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-x60-pro-2.jpg",
    color: "Midnight Black",
    storage: "128GB",
  },
  {
    id: 13,
    brand: "Realme",
    model: "GT",
    price: 599,
    rating: 4.2,
    discount: 15,
    image:
      "https://imgs.search.brave.com/IWOTtUc9-hFd0u69g7QARYWBd7lcGkyPjV8wX8m8t8o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/cmVhbG1lLWd0LW5l/bzYtc2UuanBn",
    color: "Dashing Blue",
    storage: "128GB",
  },
  {
    id: 14,
    brand: "Asus",
    model: "ROG Phone 5",
    price: 999,
    rating: 4.7,
    discount: 5,
    image: "https://fdn2.gsmarena.com/vv/pics/asus/asus-rog-phone-5-1.jpg",
    color: "Phantom Black",
    storage: "256GB",
  },
  {
    id: 15,
    brand: "BlackBerry",
    model: "Key2",
    price: 649,
    rating: 4.0,
    discount: 20,
    image: "https://fdn2.gsmarena.com/vv/pics/blackberry/blackberry-key2-1.jpg",
    color: "Silver",
    storage: "64GB",
  },
  {
    id: 16,
    brand: "ZTE",
    model: "Axon 30 Ultra",
    price: 749,
    rating: 4.1,
    discount: 10,
    image: "https://fdn2.gsmarena.com/vv/pics/zte/zte-axon-30-ultra-1.jpg",
    color: "Black",
    storage: "128GB",
  },
  {
    id: 17,
    brand: "Lenovo",
    model: "Legion Phone Duel",
    price: 899,
    rating: 4.4,
    discount: 7,
    image:
      "https://imgs.search.brave.com/uBzYXxhJxjoPn9MGXSrbhjF3CJV-IPlsR64kRSxFAY0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2l6bW9jaGluYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDcvTGVub3Zv/LUxlZ2lvbi1Qcm8t/MS01MDB4NTAwLmpw/Zw",
    color: "Vengeance Red",
    storage: "256GB",
  },
  {
    id: 18,
    brand: "TCL",
    model: "20 Pro 5G",
    price: 549,
    rating: 4.0,
    discount: 15,
    image:
      "https://imgs.search.brave.com/RJFSBoxe5jQaQDS2wRV_VqRC3Jj_5nyAXIsBKHrl2qY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/dGNsLTIwLXByby01/Zy5qcGc",
    color: "Marine Blue",
    storage: "256GB",
  },
  {
    id: 19,
    brand: "Sharp",
    model: "Aquos R6",
    price: 1099,
    rating: 4.2,
    discount: 5,
    image:
      "https://imgs.search.brave.com/UiPSbfV5y51MX9szCRMMbyiNwC-5E37IY2a8Vk5WFQk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/c2hhcnAtYXF1b3Mt/c2Vuc2U3LmpwZw",
    color: "Black",
    storage: "128GB",
  },
  {
    id: 20,
    brand: "Meizu",
    model: "18 Pro",
    price: 799,
    rating: 4.1,
    discount: 10,
    image: "https://fdn2.gsmarena.com/vv/pics/meizu/meizu-18-pro-1.jpg",
    color: "Dream White",
    storage: "256GB",
  },
  {
    id: 21,
    brand: "Poco",
    model: "F3",
    price: 349,
    rating: 4.5,
    discount: 18,
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-poco-f3-1.jpg",
    color: "Arctic White",
    storage: "128GB",
  },
  {
    id: 22,
    brand: "Infinix",
    model: "Note 10 Pro",
    price: 259,
    rating: 4.2,
    discount: 22,
    image:
      "https://imgs.search.brave.com/pUNC5VIC5_95bNJzWJFFKfL-Gf2y8iTfUdTY-xcD_L0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/aW5maW5peC1ub3Rl/LTEwLXByby0uanBn",
    color: "Nordic Secret",
    storage: "128GB",
  },
  {
    id: 23,
    brand: "Tecno",
    model: "Camon 17 Pro",
    price: 299,
    rating: 4.0,
    discount: 20,
    image: "https://fdn2.gsmarena.com/vv/pics/tecno/tecno-camon-17-pro-1.jpg",
    color: "California Dream",
    storage: "256GB",
  },
  {
    id: 24,
    brand: "iQOO",
    model: "7",
    price: 499,
    rating: 4.3,
    discount: 15,
    image: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-iqoo-7-1.jpg",
    color: "Storm Black",
    storage: "128GB",
  },
  {
    id: 25,
    brand: "Nubia",
    model: "Red Magic 6",
    price: 599,
    rating: 4.4,
    discount: 10,
    image: "https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-6-1.jpg",
    color: "Eclipse Black",
    storage: "256GB",
  },
  {
    id: 26,
    brand: "Honor",
    model: "50",
    price: 449,
    rating: 4.1,
    discount: 12,
    image:
      "https://imgs.search.brave.com/Ao1O-3Fc6vVEisCwa7UWeXI5NUnPVXRfcXFToWV2WUU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9ub3IuY29tL2Nv/bnRlbnQvZGFtL2hv/bm9yL2NvbW1vbi9w/cm9kdWN0LWxpc3Qv/cHJvZHVjdC1zZXJp/ZXMvaG9ub3ItOTAv/aG9ub3ItOTAtc2ls/dmVyLWJhY2sucG5n",
    color: "Frost Crystal",
    storage: "128GB",
  },
  {
    id: 27,
    brand: "Fairphone",
    model: "4",
    price: 579,
    rating: 3.9,
    discount: 5,
    image:
      "https://imgs.search.brave.com/cUJsw_ROv7MSNJMqdjGXe4PJUVaeACxsrHauRYTQRVs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/ZmFpcnBob25lNC5q/cGc",
    color: "Green",
    storage: "128GB",
  },
  {
    id: 28,
    brand: "Cat",
    model: "S62 Pro",
    price: 649,
    rating: 4.0,
    discount: 8,
    image: "https://fdn2.gsmarena.com/vv/pics/cat/cat-s62-pro-1.jpg",
    color: "Black",
    storage: "128GB",
  },
  {
    id: 29,
    brand: "Doogee",
    model: "S96 Pro",
    price: 389,
    rating: 4.1,
    discount: 25,
    image: "https://fdn2.gsmarena.com/vv/pics/doogee/doogee-s96-pro-1.jpg",
    color: "Fire Orange",
    storage: "128GB",
  },
  {
    id: 30,
    brand: "Ulefone",
    model: "Armor 11T 5G",
    price: 399,
    rating: 3.8,
    discount: 30,
    image:
      "https://fdn2.gsmarena.com/vv/pics/ulefone/ulefone-armor-11t-5g-1.jpg",
    color: "Black",
    storage: "256GB",
  },
];

export default phones;

export const getProductById = (id) => {
  return phones.find((phone) => phone.id === id);
};
