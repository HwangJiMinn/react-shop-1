import { Outlet } from 'react-router';

import Footer from '~/components/footer';
import Header from '~/components/header';

const Index = () => {
  return (
    <div>
      <Header />
      <section className="pt-16" style={{ minHeight: 'calc(100vh - 64px - 104px)' }}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
