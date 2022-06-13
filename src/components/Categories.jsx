import React, { useState } from "react";

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ["All", "French traditional", "Organic", "Sourdough"];
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
