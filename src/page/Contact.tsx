const Contact = () => {
  return (
    <section className="section-nine active_menus" id="contact">
      <h3 className="creative brand fade_down">Hãy trò chuyện <span> Với Chúng tôi</span></h3>
      <h3 className="visionary fade_down">Chúng tôi là công ty sáng tạo hàng đầu về xây dựng thương hiệu. Chúng tôi cung cấp đầy đủ các dịch vụ để giúp khách hàng cải thiện thứ hạng trên công cụ tìm kiếm và thúc đẩy nhiều lưu lượng truy cập hơn đến trang web của họ.</h3>
      <div className="contact-box-grid">
        <div className="contact-sec-box zoom_in">
          <p className="call-us-contact">
            <img className="call-us-contact-img" src="/images/svg/call.svg" alt="call" /> Gọi cho tôi
          </p>
          <p className="day-time">Thứ Hai đến Thứ Sáu 8:30 - 17:00</p>
          <a href="tel:(+1)5623894336" className="call-num">
            <p>(+1) 5623 894 336</p>
          </a>
        </div>
        <div className="contact-sec-box zoom_in">
          <p className="call-us-contact">
            <img className="call-us-contact-img" src="/images/svg/email.svg" alt="call" /> Nhắn tin cho tôi
          </p>
          <p className="day-time">Đội ngũ thân thiện của chúng tôi luôn sẵn sàng giúp đỡ.</p>
          <a href="mailto:hello@aryaStone.com" className="call-num">
            <p>hello@aryaStone.com</p>
          </a>
        </div>
        <div className="contact-sec-box zoom_in">
          <p className="call-us-contact">
            <img className="call-us-contact-img" src="/images/svg/loaction.svg" alt="loaction" /> Địa chỉ văn phòng
          </p>
          <p className="day-time">Hãy đến chào chúng tôi tại trụ sở văn phòng.</p>
          <p className="call-num">180 East 45th Street 17, New York, NY 10065</p>
        </div>
      </div>
      <iframe className="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11661.278162829134!2d-76.16113884753138!3d43.0557465765357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3add89232d3%3A0x516c4febad79a023!2sNear%20Northeast%2C%20Syracuse%2C%20NY%2013203%2C%20USA!5e0!3m2!1sen!2sin!4v1704092010021!5m2!1sen!2sin" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <h3 className="creative brand got">Bạn có ý tưởng? <span> Tôi có kỹ năng</span></h3>
      <h3 className="visionary">Chúng tôi là công ty sáng tạo hàng đầu về xây dựng thương hiệu. Chúng tôi cung cấp đầy đủ các dịch vụ để giúp khách hàng cải thiện thứ hạng trên công cụ tìm kiếm và thúc đẩy nhiều lưu lượng truy cập hơn đến trang web của họ.</h3>
      <form id="contact-form">
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
        <div className="input-main">
          <div className="labal-input">
            <p className="labal">CHỦ ĐỀ*</p>
            <input type="text" placeholder="Chủ đề của bạn" name="subject" autoComplete="off" />
          </div>
        </div>
        <div className="input-main">
          <div className="labal-input">
            <p className="labal">TIN NHẮN*</p>
            <input type="text" placeholder="Viết tin nhắn của bạn..." name="message" autoComplete="off" />
          </div>
        </div>
        <div className="download-btn">
          <a href="#" className="aryaBtn">
            Gửi Tin Nhắn <img src="/images/svg/right-arrow.svg" alt="right-arrow" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
