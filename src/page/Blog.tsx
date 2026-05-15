const Blog = () => {
  return (
    <section className="section-eight active_menus" id="blog">
      <h3 className="creative brand fade_down">Tin Tức <span>Mới Nhất</span></h3>
      <h3 className="visionary fade_down">Khách hàng hạnh phúc của chúng tôi cung cấp những phản hồi có tác động và tích cực về các dịch vụ, hỗ trợ khách hàng, v.v.</h3>
      <div className="row blog-row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div className="blog-box" data-bs-toggle="modal" data-bs-target="#BlogModal">
            <p className="date-blog">31 Tháng 3, 2025</p>
            <h3 className="blog-title">7 Ngôn ngữ Phát triển Web Tuyệt vời nên học trong năm nay</h3>
            <p className="Integer-blog">Integer ultrices potenti ornare pulvinar id ultrices nec. Amet ornare vestibulum in cursus. Ut a at posuere mauris aenean a purus aliquet.</p>
            <img className="blog-img" src="/images/home-images/blog-img1.jpg" alt="blog-img1" />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div className="blog-box" data-bs-toggle="modal" data-bs-target="#BlogModal">
            <p className="date-blog">25 Tháng 3, 2025</p>
            <h3 className="blog-title">Cách Tối ưu hóa Website để có Hiệu suất Tốt hơn</h3>
            <p className="Integer-blog">Integer ultrices potenti ornare pulvinar id ultrices nec. Amet ornare vestibulum in cursus. Ut a at posuere mauris aenean a purus aliquet.</p>
            <img className="blog-img" src="/images/home-images/blog-img2.jpg" alt="blog-img2" />
          </div>
        </div>
      </div>

      {/* Blog Modal */}
      <div className="modal fade" id="BlogModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img className="content-img" src="/images/home-images/blog-img1.jpg" alt="blog-img1" />
              <p className="date-blog">31 Tháng 3, 2025</p>
              <h3 className="blog-title">7 Ngôn ngữ Phát triển Web Tuyệt vời nên học trong năm nay</h3>
              <p className="Integer-blog">Integer ultrices potenti ornare pulvinar id ultrices nec. Amet ornare vestibulum in cursus. Ut a at posuere mauris aenean a purus aliquet.</p>
              <div className="corporate_main">
                <div className="cuberto_main">
                  <p className="created_by">Người tạo :</p>
                  <p className="cuberto">Ren Tech</p>
                </div>
                <div className="cuberto_main">
                  <p className="created_by">Ngày :</p>
                  <p className="cuberto">31 Tháng 3, 2025</p>
                </div>
                <div className="cuberto_main">
                  <p className="created_by">Danh mục :</p>
                  <p className="cuberto">Tin tức</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
