const SideMenu = () => {
  return (
    <div className="col-xxl-3 col-xl-3 col-lg-4">
      <div className="side-menu-main">
        <a href="index.html" className="side-menu-two-logo">
          <img className="logo" src="/images/svg/logo.svg" alt="logo" />
        </a>
        <div className="portfolio-girl-menu-main">
          <img src="/images/hthn.jpg" alt="avatar" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        </div>
        <div className="list-menu">
          <p className="side-menu-arya">Hoàng Thị Hằng Nga</p>
          <p className="web-arya">THIẾT KẾ WEB &amp; UI</p>
          <div className="media-main">
            <a href="https://www.facebook.com" className="media-icons">
              <img src="/images/svg/facebook.svg" alt="facebook" />
            </a>
            <a href="https://www.instagram.com" className="media-icons">
              <img src="/images/svg/insta.svg" alt="insta" />
            </a>
            <a href="https://x.com" className="media-icons">
              <img src="/images/svg/twitter.svg" alt="twitter" />
            </a>
            <a href="https://www.behance.net" className="media-icons">
              <img src="/images/svg/behance.svg" alt="behance" />
            </a>
            <a href="https://dribbble.com" className="media-icons">
              <img src="/images/svg/dribbale.svg" alt="dribbale" />
            </a>
            <a href="https://www.linkedin.com" className="media-icons">
              <img src="/images/svg/linkdin.svg" alt="linkdin" />
            </a>
          </div>
        </div>
        <div className="list-menu menu-list-main d-xl-none">
          <ul className="side-menu-ul">
            <li>
              <a href="#home">TRANG CHỦ<img src="/images/svg/home.svg" alt="home" /></a>
            </li>
            <li>
              <a href="#about">GIỚI THIỆU<img src="/images/svg/about.svg" alt="about" /></a>
            </li>
            <li>
              <a href="#services">DỊCH VỤ<img src="/images/svg/services.svg" alt="services" /></a>
            </li>
            <li>
              <a href="#portfolio">DỰ ÁN<img src="/images/svg/portfolio.svg" alt="portfolio" /></a>
            </li>
            <li>
              <a href="#testimonial">ĐÁNH GIÁ<img src="/images/svg/testimonial.svg" alt="testimonial" />
              </a>
            </li>
            <li>
              <a href="#resume">SƠ YẾU LÝ LỊCH<img src="/images/svg/resume.svg" alt="resume" /></a>
            </li>
            <li>
              <a href="#pricingPlan">BẢNG GIÁ<img src="/images/svg/pricingPlan.svg" alt="pricingPlan" />
              </a>
            </li>
            <li>
              <a href="#blog">TIN TỨC<img src="/images/svg/blog.svg" alt="blog" /></a>
            </li>
            <li>
              <a href="#contact">LIÊN HỆ<img src="/images/svg/contact.svg" alt="contact" /></a>
            </li>
          </ul>
        </div>
        <div className="list-menu">
          <p className="phone-text">GỌI CHO TÔI:</p>
          <a href="tel:(+1)5623894336" className="phone-num">
            <p>0358 871 575</p>
          </a>
          <p className="phone-text">EMAIL:</p>
          <a href="mailto:nga548833@gmail.com" className="phone-num">
            <p>nga548833@gmail.com</p>
          </a>
          <p className="phone-text">ĐỊA CHỈ:</p>
          <p className="phone-num">Từ Sơn, Bắc Ninh, Việt Nam</p>
          <div className="Hire-Me-side-menu">
            <a href="/pdf/olivia_resume.pdf" className="aryaBtn">
              Thuê tôi! <img className="hireMe-svg-side" src="/images/svg/hireMe-svg.svg" alt="download-svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
