import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router';

interface sliderItem {
  name: string;
  title: string;
  text: string;
}

const Slide = () => {
  const items = [
    {
      name: 'fashion',
      title: '물빠진 청바지!',
      text: '이제 막 도착한 패션 청바지를 구경해 보세요.',
    },
    {
      name: 'digital',
      title: '신속한 업무처리!',
      text: '다양한 디지털 상품을 둘러보세요.',
    },
    {
      name: 'accessory',
      title: '액세서리',
      text: '예쁜 액세서리들을 구경해 보세요.',
    },
  ];

  return (
    <Carousel
      autoPlay
      showThumbs={false}
      interval={6000}
      infiniteLoop={true}
      showStatus={false}
      className="carousel-container"
    >
      {items.map((item: sliderItem) => {
        return (
          <div key={item.name} className="carousel-slide z-10">
            <div className="absolute right-auto bottom-1/3 left-auto mb-10 w-full px-10 text-left">
              <h2 className="text-4xl font-bold text-white">{item.title}</h2>
              <p className="my-2 text-white">{item.text}</p>
              <Link to={`/${item.name}`} className="btn mt-3 btn-md">
                바로가기
              </Link>
            </div>
            <img src={`/img/carousel/img_shop_${item.name}.jpeg`} alt={item.name} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slide;
