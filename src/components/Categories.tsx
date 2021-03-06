import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
}

export const Categories: React.FC <CategoriesProps> = ({value, onChangeCategory}) => {
  const categories = ["All", "French traditional", "Organic", "Sourdough"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
