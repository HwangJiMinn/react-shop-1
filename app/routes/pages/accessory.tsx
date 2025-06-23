// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

import type { Product } from '~/common/product';
import Breadcrumb from '~/components/breadcrumb';
import ItemList from '~/components/itemList';

export const loader = async () => {
  const accessory = await fetch('https://fakestoreapi.com/products//category/jewelery');

  // const mensData: Product[] = await men.json();
  // const womensData: Product[] = await women.json();

  // const products = [...mensData, ...womensData];

  const products: Product[] = await accessory.json();

  if (!products) {
    return {
      products: [],
    };
  }

  return {
    products: products ? products : [],
  };
};

const Accessory = () => {
  const { products } = useLoaderData<typeof loader>();

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const men = await fetch(
  //       'https://fakestoreapi.com/products//category/men%27s%20clothing',
  //     );
  //     const women = await fetch(
  //       'https://fakestoreapi.com/products//category/women%27s%20clothing',
  //     );

  //     const products: Product[] = await Promise.all([men.json(), women.json()]).then(
  //       (data) => data.flat(),
  //     );

  //     return setProducts(products);
  //   };

  //   fetchData();
  // }, []);

  return (
    <section className="mx-auto p-4">
      <Breadcrumb category="홈" crumb="악세서리" />
      <article className="mx-auto mb-20 px-4 pt-2 pb-4">
        <ItemList title="악세서리" limit={12} data={products} />
      </article>
    </section>
  );
};

export default Accessory;
