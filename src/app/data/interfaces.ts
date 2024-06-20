import { SetStateAction, Dispatch } from "react";

export interface Data {
  image: string;
  name: string;
  price: number;
  color: string[];
  sizes: string;
  category: string[];
}

export interface Header {
  title: string;
  description: string;
}

export interface ImageCard {
  data: Data[];
  colors: string[];
  categories: string[];
  size: string[];
}

export interface Fliter {
  title: string;
  colors: string[];
  setColors: Dispatch<SetStateAction<string[]>>;
  categories: string[];
  setCategories: Dispatch<SetStateAction<string[]>>;
  size: string[];
  setSize: Dispatch<SetStateAction<string[]>>;
}
