import { FaFacebookSquare, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-center footer p-10">
      <div>
        <a
          href="https://www.spacecledu.co.kr/"
          target="_blank"
          className="link link-hover"
          rel="noreferrer"
        >
          스페이스씨엘
        </a>
      </div>
      <div className="flex">
        <img src="/img/svg/visa.svg" alt="" />
        <img src="/img/svg/master.svg" alt="" />
        <img src="/img/svg/americanExpress.svg" alt="" />
        <img src="/img/svg/paypal.svg" alt="" />
        <img src="/img/svg/dinersClub.svg" alt="" />
        <img src="/img/svg/discover.svg" alt="" />
      </div>
      <div className="flex">
        <FaFacebookSquare className="h-[24px] w-[38px]" />
        <FaInstagram className="h-[24px] w-[38px]" />
        <FaGithub className="h-[24px] w-[38px]" />
      </div>
    </div>
  );
};

export default Footer;
