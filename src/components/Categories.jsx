import React, {useState} from 'react';

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const categories = ['All', 'French traditional', 'Organic', 'Sourdough'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  console.log(activeIndex);
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
