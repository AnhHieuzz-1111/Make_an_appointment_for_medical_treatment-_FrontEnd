import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class HandBook extends Component {
  render() {
    return (
      <div className="section-share section-handbook">
        <div className="section-container">
          <div className="section-header">
            <h2>Cẩm nang</h2>
            <div className="further">
              <button className="futher-handbook">Tất cả bài viết</button>
            </div>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <h3>Cơ xương khớp 1</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <h3>Cơ xương khớp 2</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <h3>Cơ xương khớp 3</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <h3>Cơ xương khớp 4</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <h3>Cơ xương khớp 5</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
