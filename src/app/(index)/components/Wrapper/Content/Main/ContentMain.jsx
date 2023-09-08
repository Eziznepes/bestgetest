"use client";

import Offers from "./Offers";
import ProdDesc from "./ProdDesc";
import Product from "./Product";
import ProsCons from "./ProsCons";

export default function ContentMain({ product }) {
  return (
    <div className="content">
      <div className="contentMain">
        <Product product={product} />
        <Offers />
        <ProdDesc />
        <ProsCons />
      </div>
    </div>
  );
}
