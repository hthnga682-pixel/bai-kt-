import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // @ts-ignore
    const $ = window.jQuery;
    if (!$) return;

    let counted = 0;
    const handleScroll = () => {
      const counterEl = document.querySelector('.counter');
      if (!counterEl) return;
      
      // @ts-ignore
      const oTop = $(counterEl).offset().top - window.innerHeight;
      // @ts-ignore
      if (counted === 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function (this: any) {
          // @ts-ignore
          const $this = $(this);
          const countTo = $this.attr('data-count');
          // @ts-ignore
          $({ countNum: $this.text() }).animate(
            { countNum: countTo },
            {
              duration: 800,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              }
            }
          );
        });
        counted = 1;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-two overflow-hidden active_menus" id="about">
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <h2 className="creative brand fade_down">Về Tôi</h2>
          <h2 className="visionary fade_down">Tôi là một Nhà thiết kế &amp; Phát triển Web chuyên nghiệp với niềm đam mê tạo ra các trang web đẹp và chức năng. Tôi có kỹ năng trong nhiều công nghệ khác nhau và cam kết mang lại kết quả tốt nhất.</h2>
          <div className="row pt-2 fade_down">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="personal-info">
                <p className="personal-info-text">Tên : <span>Hoàng Thị Hằng Nga</span></p>
                <p className="personal-info-text">Email : <span>nga548833@gmail.com</span></p>
                <p className="personal-info-text mb-0">Điện thoại : <span>0358 871 575</span></p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="personal-info personal-info-two">
                <p className="personal-info-text">Ngày sinh : <span>22 Tháng 03, 2006</span></p>
                <p className="personal-info-text">Địa chỉ : <span>Từ Sơn, Bắc Ninh, Việt Nam</span></p>
                <p className="personal-info-text mb-0">Kinh nghiệm : <span>5+ Năm</span></p>
              </div>
            </div>
          </div>
          <div className="download-btn pt-4 fade_down">
            <a href="/pdf/olivia_resume.pdf" className="aryaBtn">
              Tải CV <img src="/images/svg/download-svg.svg" alt="download-svg" />
            </a>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="counter-main counter">
            <div className="counter-box zoom_in">
              <p className="count-num"><span className="count" data-count="12">0</span>+</p>
              <p className="Experience-text">Năm Kinh Nghiệm</p>
            </div>
            <div className="counter-box project-done zoom_in">
              <p className="count-num"><span className="count" data-count="350">0</span>+</p>
              <p className="Experience-text">Dự Án Hoàn Thành</p>
            </div>
            <div className="counter-box zoom_in">
              <p className="count-num"><span className="count" data-count="150">0</span>+</p>
              <p className="Experience-text">Khách Hàng Hài Lòng</p>
            </div>
            <div className="counter-box project-done mb-0 zoom_in">
              <p className="count-num"><span className="count" data-count="15">0</span>+</p>
              <p className="Experience-text">Giải Thưởng Đạt Được</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
