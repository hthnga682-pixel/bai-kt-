import { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    const progressItems = document.querySelectorAll(".progress-item");
    const colors = ['#bce70c', '#ff759c', '#00cc97', '#ffdb59', '#6f39fd'];

    progressItems.forEach((item, index) => {
      const skillName = item.getAttribute("data-skill");
      if (item.querySelector('.skill-label')) return;
      const skillLabel = document.createElement("div");
      skillLabel.className = "skill-label";
      skillLabel.textContent = skillName;
      item.appendChild(skillLabel);

      const color = colors[index % colors.length];
      // @ts-ignore
      item.style.background = `conic-gradient(${color} 0%, #EDF0F4 0%)`;
    });

    const progressSection = document.querySelector("#progress");
    if (!progressSection) return;

    const observerOptions = { threshold: 0.3 };
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressItems.forEach((item, index) => {
            const skillValue = parseInt(item.getAttribute("data-value") || "0");
            const color = colors[index % colors.length];
            let count = 0;
            const interval = setInterval(() => {
              if (count >= skillValue) {
                clearInterval(interval);
              } else {
                count++;
                // @ts-ignore
                item.style.background = `conic-gradient(${color} ${count}%, #EDF0F4 ${count}%)`;
              }
            }, 20);
          });
          observer.unobserve(progressSection);
        }
      });
    }, observerOptions);

    observer.observe(progressSection);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-six active_menus" id="resume">
      <div className="row resume-sec-row">
        <div className="col-xxl-6 col-lg-6">
          <h2 className="creative brand fade_up">Học Vấn</h2>
          <div className="education fade_up">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">Thạc sĩ Thiết kế</p>
              <p className="cursus university">Đại học Cambridge / 2010 - 2014</p>
              <p className="cursus">Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst.</p>
            </div>
          </div>
          <div className="education position-relative fade_up">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">Cử nhân Khoa học</p>
              <p className="cursus university">Đại học Cambridge / 2014 - 2016</p>
              <p className="cursus">Porttitor euismod at semper ut massa. Lorem varius magna volutpat nunc. Et faucibus scelerisque donec eleifenda.</p>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-lg-6">
          <h2 className="creative brand fade_up">Kinh Nghiệm</h2>
          <div className="education fade_up">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">TRƯỞNG NHÓM THIẾT KẾ &amp; PHÁT TRIỂN</p>
              <p className="cursus university">Envato / 2020 - Hiện tại</p>
              <p className="cursus">Ipsum erat duis leo lectus tellus neque dictumst. Dignissim tortor quis nisl mi lectus facilisis ac eget.</p>
            </div>
          </div>
          <div className="education position-relative fade_up">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">NHÂN VIÊN THIẾT KẾ CẤP CAO</p>
              <p className="cursus university">Apple / 2019 - 2020</p>
              <p className="cursus">Congue dolor gravida eu tristique netus posuere dolor. Penatibus imperdiet egestas ut sit scelerisque sapien a.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="coding-skill-section">
        <h2 className="creative brand pb-0 fade_down">Kỹ Năng <span>Chính</span></h2>
        <div id="progress">
          <div className="progress-item fade_down" data-skill="Thiết kế" data-value="79"></div>
          <div className="progress-item fade_down" data-skill="Phát triển" data-value="92"></div>
          <div className="progress-item fade_down" data-skill="Kiểm thử" data-value="85"></div>
          <div className="progress-item fade_down" data-skill="Marketing" data-value="80"></div>
          <div className="progress-item fade_down" data-skill="Nhiếp ảnh" data-value="76"></div>
        </div>
      </div>
      <div className="coding-skill-section">
        <h2 className="creative brand pb-0 fade_down">Kỹ Năng <span>Thiết kế</span></h2>
        <div className="design-skill-sub-section">
          <div className="design-skills-img-main flip_up show">
            <img src="/images/home-images/figma-img.png" alt="figma-img" />
            <div className="skill-counter-main">
              <p>94%</p>
              <p>HTML, CSS</p>
            </div>
          </div>
          <div className="design-skills-img-main photoshop flip_up show">
            <img src="/images/home-images/photoshop-img.png" alt="photoshop-img" />
            <div className="skill-counter-main photoshop-text">
              <p>98%</p>
              <p>PHOTOSHOP</p>
            </div>
          </div>
        </div>
      </div>
      <div className="awards-section overflow-hidden">
        <h2 className="creative pb-0 fade_down">Giải Thưởng.</h2>
        <div className="row awards-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img className="winner-award" src="/images/home-images/winner-award.png" alt="winner-award" />
                      <p className="award-yer">2025</p>
                    </div>
                    <p className="award-interior">Awwwards Nội thất</p>
                    <p className="award-winner-text">Người chiến thắng</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, perferendis!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
