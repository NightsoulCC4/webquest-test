"use client";

import { useState } from "react";
import Fliter from "./components/Fliter";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import { getData } from "./data/data";

export default function Home() {
  const data = getData();

  const [colors, setColors] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [size, setSize] = useState<string[]>([]);

  console.log(colors, categories, size);

  return (
    <main className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
      <Header
        title={"Products"}
        description={
          "Checkout out the latest release of Basic Tees, new and improved with four openings!"
        }
      />
      <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        <Fliter
          title={"Fliters"}
          colors={colors}
          setColors={setColors}
          categories={categories}
          setCategories={setCategories}
          size={size}
          setSize={setSize}
        />
        <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <ImageCard data={data} colors={colors} categories={categories} size={size} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
