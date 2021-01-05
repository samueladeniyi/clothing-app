import React, { useState } from "react";
import ShopData from "./ShopData";
import Preview from "./Preview";

function Shop() {
  const [state, setState] = useState(ShopData);

  return (
    <div className="shop-page">
      {state.map(({ id, ...otherStateProps }) => (
        <Preview key={id} {...otherStateProps} />
      ))}
    </div>
  );
}

export default Shop;
