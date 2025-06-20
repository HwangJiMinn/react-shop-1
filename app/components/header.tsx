import { FaCartArrowDown } from 'react-icons/fa6';
import { Link } from 'react-router';

const Header = () => {
  const menu = [
    { name: 'fashion', title: '패션' },
    { name: 'accessory', title: '악세서리' },
    { name: 'digital', title: '디지털' },
  ];
  return (
    <div className="fixed z-10 navbar w-full bg-black">
      <div className="mx-[50px] flex w-full items-center">
        <h1 className="mx-1">
          <Link to="/" className="text-lg font-bold whitespace-nowrap text-white">
            React Shop
          </Link>
        </h1>
        <div className="ml-2 flex flex-1">
          {menu.map((item) => {
            return (
              <Link
                to={`/${item.name}`}
                key={item.name}
                className="rounded-btn btn text-white btn-ghost btn-sm"
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="flex px-2">
          <span className="relative">
            <Link to="/cart" className="btn ml-1 btn-ghost">
              <FaCartArrowDown className="h-6 w-6" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
