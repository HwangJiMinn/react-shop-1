import { Suspense } from 'react';

import type { Product } from '~/common/product';

import ProductList from './productList';
import ProductLoading from './productLoading';

type Items = {
  title: string;
  limit: number;
  data: Array<Product>;
  scroll?: boolean;
};

const ItemList = ({ title, limit, data, scroll }: Items) => {
  let product: Product[] = data || [];

  switch (title) {
    case '패션':
      product = product.filter(
        (item) =>
          item.category === "women's clothing" || item.category === "men's clothing",
      );
      break;
    case '액세서리':
      product = product.filter((item) => item.category === 'jewelery');
      break;
    case '디지털':
      product = product.filter((item) => item.category === 'electronics');
      break;
    default:
      break;
  }

  return (
    <>
      <h2 className="mb-5 text-center text-3xl font-bold">{title}</h2>
      <div className="grid grid-cols-4 gap-6" data-scroll={scroll}>
        <Suspense fallback={<ProductLoading limit={limit} />}>
          <ProductList products={product} limit={limit} />
        </Suspense>
      </div>
    </>
  );
};

export default ItemList;
