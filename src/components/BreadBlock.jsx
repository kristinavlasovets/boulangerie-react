import React, {useState} from "react";

export const BreadBlock = ({ title, price }) => {
  const [breadCount, setBreadCount] = useState(0);
  const onClickAdd = () => {
    setBreadCount(breadCount + 1)
  }
  return (
    <div className="bread-block">
      <h4 className="bread-block__title">{title}</h4>
      <img
        className="bread-block__image"
        src="https://www.campaillette.com/wp-content/uploads/2021/06/img_pointe_paysanne.jpg"
        alt="Bread"
      />
      <div className="bread-block__selector">
        <ul>
          <li className="active">wheat</li>
          <li className="disabled"> </li>
        </ul>
        <ul>
          <li className="active">8 oz.</li>
          <li className="disabled">12 oz.</li>
          <li className="disabled">20 oz.</li>
        </ul>
      </div>
      <div className="bread-block__bottom">
        <div className="bread-block__price">from {price} €</div>
        <button onClick={onClickAdd} className=" button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          <i>{breadCount}</i>
        </button>
      </div>
    </div>
  );
};
