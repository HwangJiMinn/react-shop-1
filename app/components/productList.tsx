import { Link } from 'react-router';

import type { Product } from '~/common/product';

type ProductListType = {
  products: Product[];
  limit: number;
};

const ProductList = ({ products, limit }: ProductListType) => {
  console.log(products);
  return products.length > 0 ? (
    products.slice(0, limit).map((item) => {
      return (
        <Link
          to={`product/${item.id}`}
          key={item.id}
          className="card-border card-compact card border-gray-800"
        >
          <figure className="flex h-80 overflow-hidden bg-white">
            <img
              src={item.image}
              alt={item.title}
              className="transition-transform duration-300"
            />
          </figure>
          <div className="card-body bg-gray-800">
            <p className="card-title text-base">{item.title}</p>
            <p className="text-base">${item.price.toFixed(0)}</p>
          </div>
        </Link>
      );
    })
  ) : (
    <div />
  );
};

export default ProductList;
