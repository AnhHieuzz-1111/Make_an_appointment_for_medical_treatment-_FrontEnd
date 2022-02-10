import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>Chuyên khoa</b>
                </div>
                <div className="subs-title">Tìm bác sĩ theo chuyên khoa</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Cơ sở y tế</b>
                </div>
                <div className="subs-title">Chọn bệnh viện phòng khám</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Bác sĩ</b>
                </div>
                <div className="subs-title">Chọn bác sĩ giỏi</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Gói khám</b>
                </div>
                <div className="subs-title">Khám sức khỏe tổng quát</div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <span>Hỗ trợ</span>
              </div>
              <div className="flag">VN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="first-title">NỀN TẢNG Y TẾ</div>
            <div className="second-title">CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
            <div className="search">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Tìm bệnh viên" />
            </div>
          </div>
          <div className="content-down">
            <div className="option">
              <div className="option-child">
                <div className="speciality">
                  <div className="icon-speciality"></div>
                  <div className="text-speciality">Khám chuyên khoa</div>
                </div>
                <div className="remote">
                  <div className="icon-remote"></div>
                  <div className="text-remote">Khám từ xa</div>
                </div>
                <div className="general">
                  <div className="icon-general"></div>
                  <div className="text-general">Khám tổng quát</div>
                </div>
                <div className="medical">
                  <div className="icon-medical"></div>
                  <div className="text-medical">Xét nghiệm y học</div>
                </div>
                <div className="health">
                  <div className="icon-health"></div>
                  <div className="text-health">Sức khỏe tinh thần</div>
                </div>
                <div className="dentistry">
                  <div className="icon-dentistry"></div>
                  <div className="text-dentistry">Khám nha khoa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
