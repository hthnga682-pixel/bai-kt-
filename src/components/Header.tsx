import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const hidePreloader = () => {
      const svg = document.getElementById("loade-svg");
      // @ts-ignore
      const gsap = window.gsap;
      
      if (gsap && svg) {
        const tl = gsap.timeline();
        const shapes = {
          start: "M0 502S175 272 500 272s500 230 500 230V0H0Z",
          end: "M0 2S175 1 500 1s500 1 500 1V0H0Z"
        };

        tl.to(".loading", {
          delay: 0.5,
          y: -50,
          opacity: 0,
          duration: 0.6
        })
          .to(svg, {
            duration: 0.6,
            attr: { d: shapes.start },
            ease: "power1.easeIn"
          })
          .to(svg, {
            duration: 0.6,
            attr: { d: shapes.end },
            ease: "power1.easeOut"
          })
          .to(".preloader", {
            y: -1000,
            duration: 0.8
          })
          .set(".preloader", {
            zIndex: -1,
            display: "none"
          });
      } else {
        // Fallback: hide preloader immediately if GSAP isn't found
        const preloader = document.querySelector('.preloader') as HTMLElement;
        if (preloader) {
          preloader.style.display = 'none';
        }
      }
    };

    // Hamburger Menu Toggle
    // @ts-ignore
    const $ = window.jQuery;
    if ($) {
      const $menuToggle = $('#menu-toggle');
      const $sideMenu = $('.side-menu-main');
      const $hamburger = $('.hamburger');

      $menuToggle.on('click', function () {
        $sideMenu.toggleClass('show');
        $hamburger.toggleClass('is-active', $sideMenu.hasClass('show'));
      });

      // Close menu when clicking links
      $(document).on('click', '.menu-list-main li', function () {
        $sideMenu.removeClass('show');
        $hamburger.removeClass('is-active');
      });
    }

    // Trigger preloader hide logic after component mounts
    const timer = setTimeout(hidePreloader, 500);
    return () => {
      clearTimeout(timer);
      if ($) {
        $('#menu-toggle').off('click');
        $(document).off('click', '.menu-list-main li');
      }
    };
  }, []);

  return (
    <>
      {/* ====================================== Preloader ===================================== */}
      <div className="preloader">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="loade-svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
        </svg>
        <div className="loader-main">
          <div className="loading">
            <span data-text="L">L</span>
            <span data-text="O">O</span>
            <span data-text="A">A</span>
            <span data-text="D">D</span>
            <span data-text="I">I</span>
            <span data-text="N">N</span>
            <span data-text="G">G</span>
          </div>
        </div>
      </div>

      {/* ====================================== Header ===================================== */}
      <div className="container" id="mainHeader">
        <header>
          <a href="index.html" className="main-header-logo">
            <img className="logo" src="/images/svg/logo.svg" alt="logo" />
          </a>
          <div className="aryaBtn-toggle-main mt-0">
            <ul className="side-menu-ul" id="menu-list-header">
              <li className="menu-btn">
                <a href="#home">TRANG CHỦ</a>
              </li>
              <li className="menu-btn">
                <a href="#about">GIỚI THIỆU</a>
              </li>
              <li className="menu-btn">
                <a href="#services">DỊCH VỤ</a>
              </li>
              <li className="menu-btn">
                <a href="#portfolio">DỰ ÁN</a>
              </li>
              <li className="menu-btn">
                <a href="#testimonial">ĐÁNH GIÁ</a>
              </li>
              <li className="menu-btn">
                <a href="#resume">SƠ YẾU LÝ LỊCH</a>
              </li>
              <li className="menu-btn">
                <a href="#pricingPlan">BẢNG GIÁ</a>
              </li>
              <li className="menu-btn">
                <a href="#blog">TIN TỨC</a>
              </li>
              <li className="menu-btn">
                <a href="#contact">LIÊN HỆ</a>
              </li>
            </ul>
            <button className="aryaBtn-toggle" id="menu-toggle">
              <span className="hamburger" id="hamburger-1">
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </span>
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;