import { useEffect } from 'react';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonial from './Testimonial';
import Resume from './Resume';
import Pricing from './Pricing';
import Blog from './Blog';
import Contact from './Contact';

const Home = () => {
  useEffect(() => {
    // Typing Text Js
    const itypedElement = document.querySelector('.ityped');
    // @ts-ignore
    if (window.ityped && itypedElement && !itypedElement.classList.contains('ityped-initialized')) {
      // @ts-ignore
      itypedElement.innerHTML = '';
      // @ts-ignore
      itypedElement.classList.add('ityped-initialized');
      // @ts-ignore
      window.ityped.init(itypedElement, {
        strings: ['XIN CHÀO!', 'TÔI LÀ HẰNG NGA', 'Thiết kế Web & UI!'],
        loop: true,
        showCursor: true
      });
    }

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        target.classList.toggle('show', isIntersecting);
      });
    });

    const hiddenElements = document.querySelectorAll('.fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* ====================================== Section-One (Hero) ===================================== */}
      <section className="section-one active_menus" id="home">
        <div className="row section-one-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <p className="hi-there fade_down">Xin chào! <span>👋</span></p>
            <h1 className="creative fade_down">Thiết kế Web &amp; UI Sáng tạo.</h1>
            <h2 className="visionary fade_down">Tôi là một nhà thiết kế sáng tạo có tầm nhìn, nổi tiếng với khả năng biến các khái niệm thành những câu chuyện hình ảnh hấp dẫn. Niềm đam mê sâu sắc với thế giới thiết kế cho phép tôi tạo ra những câu chuyện lôi cuốn thông qua sự khéo léo nghệ thuật của mình.</h2>
            <div className="download-btn">
              <a href="/pdf/olivia_resume.pdf" className="aryaBtn">
                Tải CV <img src="/images/svg/download-svg.svg" alt="download-svg" />
              </a>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 portfolio-girl-img-col">
            <div className="position-relative zoom_in">
              <img className="portfolio-girl-img" src="/images/hthn.jpg" alt="avatar" style={{ width: '380px', height: '380px', objectFit: 'cover', maxWidth: '100%' }} />
              <div className="girl-name" style={{ height: 'auto', minWidth: 'max-content', left: '0', bottom: '20px' }}>
                <p className="ityped">TÔI LÀ HẰNG NGA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imported Sections */}
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Resume />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
