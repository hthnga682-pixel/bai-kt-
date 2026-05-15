import { useEffect } from 'react';

const Testimonial = () => {
  useEffect(() => {
    // @ts-ignore
    const $ = window.jQuery;
    if (!$) return;

    const initSlider = () => {
      const $testimonial = $('.testimonial');
      if ($testimonial.length > 0) {
        // @ts-ignore
        $testimonial.slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
          dots: true,
          speed: 1000,
        });
      }
    };

    const timer = setTimeout(initSlider, 100);
    
    return () => {
      clearTimeout(timer);
      // @ts-ignore
      if ($('.testimonial').hasClass('slick-initialized')) {
        // @ts-ignore
        $('.testimonial').slick('unslick');
      }
    };
  }, []);

  return (
    <section className="section-five active_menus" id="testimonial">
      <h3 className="creative brand fade_down">Khách hàng của chúng tôi <span>rất thích làm việc với chúng tôi, và</span>
        Tôi Tin Rằng Bạn Cũng Sẽ Như Vậy!
      </h3>
      <h3 className="visionary fade_down">Những khách hàng hạnh phúc của chúng tôi đưa ra những phản hồi tích cực và có tác động lớn về dịch vụ, hỗ trợ khách hàng của chúng tôi, v.v.</h3>
      <div className="testimonial zoom_in">
        <div className="testimonial-box">
          <img className="client-img" src="/images/home-images/client-img1.jpg" alt="client-img1" />
          <div className="slider-text-group">
            <div className="am-text-main">
              <p>Dịch vụ Tuyệt vời!</p>
              <img src="/images/svg/qote.svg" alt="qote" />
            </div>
            <p className="Neque">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam eius tempora in labore et dolore magnam aliquam quaerat voluptatem. minima a quis nostrum exercitationem ullam.</p>
            <p className="client-name">Robert Alikson <span>(Giám đốc điều hành tại Envato)</span></p>
          </div>
        </div>
        <div className="testimonial-box">
          <img className="client-img" src="/images/home-images/client-img2.jpg" alt="client-img2" />
          <div className="slider-text-group">
            <div className="am-text-main">
              <p>Dịch vụ Tuyệt vời!</p>
              <img src="/images/svg/qote.svg" alt="qote" />
            </div>
            <p className="Neque">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam eius tempora in labore et dolore magnam aliquam quaerat voluptatem. minima a quis nostrum exercitationem ullam.</p>
            <p className="client-name">Olivia Segio <span>(Giám đốc điều hành tại Envato)</span></p>
          </div>
        </div>
      </div>
      <div className="section-title">
        <div className="line"></div>
        <div className="title-box">KHÁCH HÀNG TUYỆT VỜI CỦA TÔI</div>
        <div className="line"></div>
      </div>
      <div className="logos logos2">
        <div className="logos-slide">
          <div className="marquee__content">
            <div className="marquee-img-main">
              <img className="brand-logos" src="/images/home-images/client-logo1.png" alt="client-logo1" />
            </div>
            <div className="marquee-img-main">
              <img className="brand-logos" src="/images/home-images/client-logo2.png" alt="client-logo2" />
            </div>
            <div className="marquee-img-main">
              <img className="brand-logos" src="/images/home-images/client-logo3.png" alt="client-logo3" />
            </div>
            <div className="marquee-img-main">
              <img className="brand-logos" src="/images/home-images/client-logo4.png" alt="client-logo4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
