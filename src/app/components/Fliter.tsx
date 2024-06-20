import React, { FC } from "react";
import { Fliter } from "../data/interfaces";
import { getCategories, getColor, getSizes } from "../data/data";

const Fliter: FC<Fliter> = ({
  title,
  colors,
  setColors,
  categories,
  setCategories,
  size,
  setSize,
}) => {
  const colorFiliter: string[] = getColor();
  const categoryFiliter: string[] = getCategories();
  const sizeFilter: string[] = getSizes();

  return (
    <aside>
      <h2 className="sr-only">{title}</h2>
      <div className="hidden lg:block">
        <form className="space-y-10 divide-y divide-gray-200">
          <div>
            <fieldset>
              <legend className="block text-sm font-medium text-gray-900">
                Color
              </legend>
              <div className="space-y-3 pt-6">
                {colorFiliter?.map((el: string, index: number) => {
                  return (
                    <div className="flex items-center" key={index}>
                      <input
                        value={el}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={(e) => {
                          if (e?.target?.checked) {
                            setColors([...colors, e.target.value.toLowerCase()]);
                          } else {
                            const index = colors?.indexOf(e.target.value.toLowerCase());
                            if (index > -1) {
                              colors?.splice(index, 1);
                              setColors([...colors]);
                            }
                          }
                        }}
                      />
                      <label
                        htmlFor="color-0"
                        className="ml-3 text-sm text-gray-600"
                      >
                        {el}
                      </label>
                    </div>
                  );
                })}
              </div>
            </fieldset>
          </div>
          <div className="pt-10">
            <fieldset>
              <legend className="block text-sm font-medium text-gray-900">
                Category
              </legend>
              <div className="space-y-3 pt-6">
                {categoryFiliter?.map((el: string, index: number) => {
                  return (
                    <div className="flex items-center" key={index}>
                      <input
                        value={el}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={(e) => {
                          if (e?.target?.checked) {
                            setCategories([...categories, e?.target?.value]);
                          } else {
                            const index = categories?.indexOf(e?.target?.value);
                            if (index > -1) {
                              categories?.splice(index, 1);
                              setCategories([...categories]);
                            }
                          }
                        }}
                      />
                      <label
                        htmlFor="category-0"
                        className="ml-3 text-sm text-gray-600"
                      >
                        {el}
                      </label>
                    </div>
                  );
                })}
              </div>
            </fieldset>
          </div>
          <div className="pt-10">
            <fieldset>
              <legend className="block text-sm font-medium text-gray-900">
                Sizes
              </legend>
              <div className="space-y-3 pt-6">
                {sizeFilter?.map((el: string, index: number) => {
                  return (
                    <div className="flex items-center" key={index}>
                      <input
                        value={el}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={(e) => {
                          if (e?.target?.checked) {
                            setSize([...size, e.target.value.toLowerCase()]);
                          } else {
                            const index = size?.indexOf(e.target.value.toLowerCase());
                            if (index > -1) {
                              size?.splice(index, 1);
                              setSize([...size]);
                            }
                          }
                        }}
                      />
                      <label
                        htmlFor="sizes-0"
                        className="ml-3 text-sm text-gray-600"
                      >
                        {el}
                      </label>
                    </div>
                  );
                })}
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </aside>
  );
};

export default Fliter;
