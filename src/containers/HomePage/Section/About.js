import React, { Component } from "react";
import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-body">
          <div className="section-about-header">
            <h2>Truyền thông nói về BookingCare</h2>
          </div>
          <div className="section-about-content">
            <div className="content-left">
              <iframe
                width="570px"
                height="320px"
                src="https://www.youtube.com/embed/1sHF_Fa9-0E"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="content-right">
              <ul>
                <li>
                  <a
                    target="blank"
                    href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm"
                  >
                    <i className="truyenthong-bt truyenthong-suckhoedoisong"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm"
                  >
                    <i className="truyenthong-bt truyenthong-vtv1"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://ictnews.vietnamnet.vn/cuoc-song-so/nen-tang-dat-lich-kham-online-bookingcare-muon-tang-truong-nguoi-dung-gap-5-lan-nam-2017-370270.html"
                  >
                    <i className="truyenthong-bt truyenthong-ictnews"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://video.vnexpress.net/tin-tuc/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html"
                  >
                    <i className="truyenthong-bt truyenthong-vnexpress"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://vtc.vn/dat-kham-chuyen-khoa-va-hanh-trinh-ho-tro-cac-benh-vien-qua-tai-ar434101.html"
                  >
                    <i className="truyenthong-bt truyenthong-vtcnews"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://ehealth.gov.vn/?action=News&newsId=46094"
                  >
                    <i className="truyenthong-bt truyenthong-cnntbyt"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://infonet.vietnamnet.vn/khoe-dep/da-co-hon-20-000-luot-benh-nhan-dat-lich-kham-qua-bookingcare-175080.html"
                  >
                    <i className="truyenthong-bt truyenthong-infonet"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://vtv.vn/video/ca-phe-khoi-nghiep-16-8-2018-317687.htm"
                  >
                    <i className="truyenthong-bt truyenthong-vtv1"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://www.youtube.com/watch?v=mstAc81lpMc"
                  >
                    <i className="truyenthong-bt truyenthong-vtcgo"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://vtv.vn/video/ca-phe-khoi-nghiep-21-02-2018-282723.htm"
                  >
                    <i className="truyenthong-bt truyenthong-vtv1"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
