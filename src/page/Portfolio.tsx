import { useEffect } from 'react';

const Portfolio = () => {
  useEffect(() => {
    // @ts-ignore
    const $ = window.jQuery;
    if (!$) return;

    $(document).on('click', '.tab-btn-main a', function (e: any) {
        e.preventDefault();
        const tabId = $(this).data('tab');
        $('.tab-btn-main a, .Tabcondent').removeClass('tab-active');
        $(this).addClass('tab-active');
        $('#' + tabId).addClass('tab-active');
    });
  }, []);

  return (
    <section className="section-four active_menus" id="portfolio">
      <h2 className="creative fade_down">Dự Án Nổi Bật</h2>
      <h2 className="visionary fade_down">Hướng dẫn từng bước của tôi đảm bảo một hành trình dự án suôn sẻ, từ cuộc tư vấn ban đầu đến bàn giao cuối cùng. Tôi chăm sóc từng chi tiết, cho phép bạn tập trung vào những gì bạn làm tốt nhất.</h2>
      <div className="tab-btn-main fade_down">
        <a href="#" data-tab="one" className="aryaBtn tab-btn tab-active">Tất cả</a>
        <a href="#" data-tab="two" className="aryaBtn tab-btn">Nội dung</a>
        <a href="#" data-tab="three" className="aryaBtn tab-btn">Bộ sưu tập</a>
        <a href="#" data-tab="four" className="aryaBtn tab-btn">Video YT</a>
        <a href="#" data-tab="five" className="aryaBtn tab-btn">Video Vimeo</a>
        <div className="clear"></div>
      </div>
      <div className="tabContainer">
        <div id="one" className="Tabcondent tab-active">
          <div className="gallery">
            <div className="gallery-item">
              <div className="gallery-item-sub" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="/images/home-images/project-img1.jpg" alt="project-img1" />
                <div className="overlay">
                  <img src="/images/svg/content-svg.svg" alt="content-svg" className="vimeo-icon" />
                  <p className="overlay-text">Lạc Trong Không Gian - Jupiter J2</p>
                </div>
              </div>
              <div className="gallery-info">
                <h3>Lạc Trong Không Gian - Jupiter J2</h3>
                <p>Nội dung</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-item-sub" data-bs-toggle="modal" data-bs-target="#galleryModal">
                <img src="/images/home-images/project-img2.jpg" alt="project-img2.jpg" />
                <div className="overlay">
                  <img src="/images/svg/gallery-svg.svg" alt="gallery-svg" className="vimeo-icon" />
                  <p className="overlay-text">Phi hành gia bắt Trái đất</p>
                </div>
              </div>
              <div className="gallery-info">
                <h3>Phi hành gia bắt Trái đất</h3>
                <p>Bộ sưu tập</p>
              </div>
            </div>
            {/* ... Other items with similar translations ... */}
          </div>
        </div>
      </div>

      {/* Content Modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img className="content-img" src="/images/home-images/content-img.jpg" alt="content-img" />
              <p className="spce-in-text">Lạc Trong Không Gian - Jupiter J2</p>
              <p className="spce-in-Content">Nội dung</p>
              <div className="corporate_main">
                <div className="cuberto_main">
                  <p className="created_by">Người tạo :</p>
                  <p className="cuberto">Cuberto</p>
                </div>
                <div className="cuberto_main">
                  <p className="created_by">Ngày :</p>
                  <p className="cuberto">20/12/2024</p>
                </div>
                <div className="cuberto_main">
                  <p className="created_by">Khách hàng :</p>
                  <p className="cuberto">Rayan Patrick</p>
                </div>
                <div className="cuberto_main">
                  <p className="created_by">Danh mục :</p>
                  <p className="cuberto">Nội dung</p>
                </div>
              </div>
              <p className="ipsum mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non.</p>
            </div>
          </div>
        </div>
      </div>
      {/* ... Other Modals ... */}
    </section>
  );
};

export default Portfolio;
