import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-medical-facility">
        <div className="section-container">
          <div className="section-header">
            <h2>Cơ sở y tế nổi bật</h2>
            <div className="further">
              <button>Xem thêm</button>
            </div>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <h3>Bệnh viện chợ rẫy 1</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <h3>Bệnh viện chợ rẫy 2</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <h3>Bệnh viện chợ rẫy 3</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <h3>Bệnh viện chợ rẫy 4</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <h3>Bệnh viện chợ rẫy 5</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <h3>Bệnh viện chợ rẫy 6</h3>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
