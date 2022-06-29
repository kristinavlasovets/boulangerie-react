import React from 'react';
import { Link } from 'react-router-dom';


export const CartEmpty = ()  => {
  return (
    <div className="cart cart--empty">
        <h2>
          Cart is empty <i>😕</i>
        </h2>
        <p>
        Most likely, you have not ordered a baguette yet.
          <br />
        To order baguettes, go to the main page.
        </p>
        <img src="https://images.squarespace-cdn.com/content/v1/5a986116e22c88d3bdfec687/1519935779909-HACPA3EMMIDM5TR0XRDC/image-asset.png?format=100w" alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>back</span>
        </Link>
      </div>
  )
}

