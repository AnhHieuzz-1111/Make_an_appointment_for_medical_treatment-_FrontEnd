import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class Speciality extends Component {
  render() {
    return (
      <div className="section-share section-speciality">
        <div className="section-container">
          <div className="section-header">
            <h2>Chuyên khoa phổ biến</h2>
            <div className="further"><button>Xem thêm</button></div>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-speciality"></div>
                <h3>Cơ xương khớp</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-speciality2"></div>
                <h3>Thần kinh</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-speciality3"></div>
                <h3>Tiêu hóa</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-speciality4"></div>
                <h3>Tim mạch</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-speciality"></div>
                <h3>Cơ xương khớp 5</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-speciality"></div>
                <h3>Cơ xương khớp 6</h3>
              </div>
            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Speciality);
