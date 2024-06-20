import React, { FC } from "react";
import { ImageCard } from "../data/interfaces";

const ImageCard: FC<ImageCard> = ({ data, colors, categories, size }) => {
  const filterData = data?.filter((el) => {
    const { color, category } = el;

    const colorMatch =
      colors?.length === 0 || color?.some((color) => colors?.includes(color));
    const categoryMatch =
      categories?.length === 0 ||
      category?.some((category) => categories?.includes(category));
    const sizeMatch = size?.length === 0 || size?.includes(el?.sizes);

    return colorMatch && categoryMatch && sizeMatch;
  });

  return (
    <>
      {filterData?.map((el, index) => {
        const { color, category } = el;

        return (
          <div className="group relative" key={index}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={el?.image}
                alt="product image"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <div>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {el?.sizes} {el?.name}
                  </div>
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {color?.map((el) => el + " ")}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {category?.map((el) => el + " ")}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">${el?.price}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ImageCard;
