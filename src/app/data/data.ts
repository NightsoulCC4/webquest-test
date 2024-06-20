import { Data } from "./interfaces";

const getData = () => {
  const data: Data[] = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      name: "T-Shirt",
      price: 20,
      color: ["white", "blue"],
      sizes: "m",
      category: ["Casual", "Unisex", "Sportswear"],
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      name: "Jeans",
      price: 50,
      color: ["blue", "brown"],
      sizes: "l",
      category: ["Casual", "Winter", "Unisex"],
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      name: "Hoodie",
      price: 40,
      color: ["green", "beige"],
      sizes: "xl",
      category: ["Winter", "Sportswear", "Unisex"],
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      name: "Dress",
      price: 70,
      color: ["white", "blue"],
      sizes: "s",
      category: ["Casual", "Unisex"],
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      name: "Shorts",
      price: 25,
      color: ["beige", "brown"],
      sizes: "m",
      category: ["Sportswear", "Unisex"],
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      name: "Blazer",
      price: 100,
      color: ["blue", "brown"],
      sizes: "l",
      category: ["Casual", "Outerwear", "Unisex"],
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      name: "Skirt",
      price: 30,
      color: ["white", "green"],
      sizes: "m",
      category: ["Casual", "Winter", "Unisex"],
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      name: "Sweater",
      price: 45,
      color: ["brown", "beige"],
      sizes: "xl",
      category: ["Winter", "Outerwear"],
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      name: "Tank Top",
      price: 15,
      color: ["blue", "white"],
      sizes: "s",
      category: ["Sportswear", "Unisex"],
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
      name: "Jacket",
      price: 80,
      color: ["green", "brown"],
      sizes: "2xl",
      category: ["Winter", "Outerwear", "Sportswear"],
    },
  ];

  return data;
};

const getColor = () => {
  const data: string[] = ["White", "Beige", "Blue", "Brown", "Green", "Purple"];

  return data;
};

const getCategories = () => {
  const data: string[] = [
    "Winter",
    "Sportswear",
    "Unisex",
    "Outerwear",
    "Casual",
  ];

  return data;
};

const getSizes = () => {
  const data: string[] = ["XS", "S", "M", "L", "XL", "2XL"];

  return data;
};

export { getData, getColor, getCategories, getSizes };
