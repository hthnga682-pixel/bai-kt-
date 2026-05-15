import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const button = document.querySelector('.bottom-top-button') as HTMLElement;
    if (!button) return;

    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    button.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      button.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <footer>
        <div className="rights-reserved">
          <h2>Bản quyền thuộc về
            <a href="https://1.envato.market/website-portfolio" target="_blank"> The_Krishna.</a>
          </h2>
          <div className="home-media-icon-main-head">
            <a href="#" target="_blank">Điều khoản &amp; Điều kiện</a>
            <a href="#" target="_blank">Chính sách bảo mật</a>
          </div>
        </div>
      </footer>
      <button className="bottom-top-button">
        <img src="/images/svg/arrow-up.svg" alt="arrow-up" />
      </button>
    </>
  );
};

export default Footer;