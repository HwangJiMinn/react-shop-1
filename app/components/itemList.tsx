import type { Product } from '~/common/product';

import ProductList from './productList';

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
      product = product.filter((item) => item.category === 'accessory');
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
        <ProductList products={product} limit={limit} />
      </div>
    </>
  );
};

export default ItemList;
