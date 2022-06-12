import React, {useState} from 'react';

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['All', 'French traditional', 'Organic', 'Sourdough'];

  console.log(activeIndex);
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
