import React, { Component } from "react";
import { connect } from "react-redux";
import "./Speciality.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Speciality extends Component {
  render() {
    let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="section-speciality">
        <div className="speciality-container">
          <div className="speciality-header">
            <h2>Chuyên khoa phổ biến</h2>
            <div className="further"><button>Xem thêm</button></div>
          </div>
          <div className="speciality-body">
            <Slider {...settings}>
              <div className="speciality-customize">
                <div className="bg-image"></div>
                <div>Cơ xương khớp 1</div>
              </div>
              <div className="speciality-customize">
                <div className="bg-image"></div>
                <div>Cơ xương khớp 2</div>
              </div>
              <div className="speciality-customize">
                <div className="bg-image"></div>
                <div>Cơ xương khớp 3</div>
              </div>
              <div className="speciality-customize">
                <div className="bg-image"></div>
                <div>Cơ xương khớp 4</div>
              </div>
              <div className="speciality-customize">
                <div className="bg-image"></div>
                <div>Cơ xương khớp 5</div>
              </div>
              <div className="speciality-customize">
                <div className="bg-image"></div>
                <div>Cơ xương khớp 6</div>
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
