const Pricing = () => {
  return (
    <section className="section-Seven active_menus" id="pricingPlan">
      <h2 className="creative brand pb-0 fade_down">Bảng <span>Giá</span></h2>
      <div className="pricing-section-main zoom_in">
        <div className="basic-plain-box-main">
          <div className="basic-plain-box">
            <img src="/images/svg/basic-plain.svg" alt="basic-plain" />
            <p className="basic-plain-text">Gói Cơ Bản</p>
          </div>
          <div className="basic-plain-box-sub">
            <p className="mon">25<sup>$</sup><span>/tháng</span></p>
          </div>
        </div>
        <div className="development-box">
          <div>
            <h3 className="pricing-plaines-name">Phát triển Web</h3>
            <h3 className="pricing-plaines-name">Phát triển Di động</h3>
            <h3 className="pricing-plaines-name">Quảng cáo</h3>
            <h3 className="pricing-plaines-name">Thiết kế Đồ họa</h3>
            <h3 className="pricing-plaines-name mb-0">Quản lý Dự án</h3>
          </div>
          <div className="choose-plain-btn-main">
            <div className="aryaBtn-toggle-main">
              <a href="#" className="aryaBtn choose-plan" data-bs-toggle="modal" data-bs-target="#PricingModal">
                Chọn Gói <img src="/images/svg/right-arrow.svg" alt="right-arrow" />
              </a>
            </div>
            <p className="taxes">10% thuế sẽ được cộng thêm sau giá</p>
          </div>
        </div>
      </div>
      <div className="pricing-section-main zoom_in">
        <div className="basic-plain-box-main">
          <div className="basic-plain-box basic-plain-box2">
            <img src="/images/svg/strandard-plan.svg" alt="strandard-plan" />
            <p className="basic-plain-text">Gói Tiêu Chuẩn</p>
          </div>
          <div className="basic-plain-box-sub">
            <p className="mon">75<sup>$</sup><span>/tháng</span></p>
          </div>
        </div>
        <div className="development-box">
          <div>
            <h3 className="pricing-plaines-name">Phát triển Web</h3>
            <h3 className="pricing-plaines-name">Phát triển Di động</h3>
            <h3 className="pricing-plaines-name">Quảng cáo</h3>
            <h3 className="pricing-plaines-name">Thiết kế Đồ họa</h3>
            <h3 className="pricing-plaines-name mb-0">Quản lý Dự án</h3>
          </div>
          <div className="choose-plain-btn-main">
            <div className="aryaBtn-toggle-main">
              <a href="#" className="aryaBtn choose-plan" data-bs-toggle="modal" data-bs-target="#PricingModal">
                Chọn Gói <img src="/images/svg/right-arrow.svg" alt="right-arrow" />
              </a>
            </div>
            <p className="taxes">10% thuế sẽ được cộng thêm sau giá</p>
          </div>
        </div>
      </div>

      {/* Select Plan Modal */}
      <div className="modal fade" id="PricingModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="spce-in-text text-gallery">Chọn Gói Dịch Vụ</p>
              <form id="select-plan">
                <div className="input-main">
                  <div className="labal-input">
                    <p className="labal">HỌ TÊN*</p>
                    <input type="text" placeholder="Họ và tên của bạn" name="YourName" autoComplete="off" />
                  </div>
                  <div className="labal-input">
                    <p className="labal">EMAIL*</p>
                    <input type="text" placeholder="Địa chỉ Email" name="EmailID" autoComplete="off" />
                  </div>
                </div>
                <div className="input-main m-0">
                  <div className="input-main mt-0 mb-0">
                    <div className="labal-input">
                      <p className="labal">Số điện thoại*</p>
                      <input type="text" placeholder="Số điện thoại" name="subject" autoComplete="off" />
                    </div>
                  </div>
                  <div className="input-main mt-0 mb-0">
                    <div className="labal-input">
                      <p className="labal">Chọn Gói*</p>
                      <div className="wrapper">
                        <div className="formDropDown">Chọn Gói
                          <img className="arrow-icon-form" src="/images/svg/down-arrow.svg" alt="arrow-icon-form" />
                        </div>
                        <div className="position-relative">
                          <ul className="formDropDown-ul-list">
                            <li>
                              <a href="#">Gói Cơ bản - $25/tháng</a>
                            </li>
                            <li>
                              <a href="#">Gói Tiêu chuẩn - $75/tháng</a>
                            </li>
                            <li>
                              <a href="#">Gói Vàng - $125/tháng</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-btn-main">
                  <a href="#" className="aryaBtn">Gửi Đi
                    <img src="/images/svg/right-arrow.svg" alt="right-arrow" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
