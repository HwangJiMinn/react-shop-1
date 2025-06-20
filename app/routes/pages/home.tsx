import { useLoaderData } from 'react-router';

import type { Product } from '~/common/product';
import ItemList from '~/components/itemList';
import Slide from '~/components/slide';

export const loader = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await response.json();
  return {
    products,
  };
};

const Home = () => {
  const { products } = useLoaderData<typeof loader>();
  return (
    <>
      <Slide />
      <section className="mx-auto mt-10 px-4 pb-4">
        <ItemList title="패션" limit={4} data={products} scroll={true} />
      </section>
    </>
  );
};

export default Home;
