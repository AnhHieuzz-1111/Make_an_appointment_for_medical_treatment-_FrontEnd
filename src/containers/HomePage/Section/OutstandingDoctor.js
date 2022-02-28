import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import * as actions from "../../../store/actions";
import { LANGUAGES } from "../../../utils/constant";
class OutstandingDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorsArr: [],
    };
  }

  componentDidMount() {
    this.props.loadOutStandingDoctors();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.outstandingDoctorsRedux !== this.props.outstandingDoctorsRedux
    ) {
      this.setState({
        doctorsArr: this.props.outstandingDoctorsRedux,
      });
    }
  }

  render() {
    let allDoctors = this.state.doctorsArr;
    let { language } = this.props;
    allDoctors = allDoctors.concat(allDoctors).concat(allDoctors);
    console.log("all doctors: ", allDoctors);
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="section-container">
          <div className="section-header">
            <h2>Bác sĩ nổi bật tuần qua</h2>
            <div className="further">
              <button>Tìm kiếm</button>
            </div>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              {allDoctors &&
                allDoctors.length > 0 &&
                allDoctors.map((item, index) => {
                  let imageBase64 = "";
                  if (item.image) {
                    imageBase64 = new Buffer(item.image, "base64").toString("binary");
                  }
                  let nameVi = `${item.positionData.valueVi} || ${item.lastName}  ${item.firstName}`;
                  let nameEn = `${item.positionData.valueEn} ||  ${item.lastName} ${item.firstName}`;
                  return (
                    <div className="section-customize" key={index}>
                      <div className="customize-border">
                        <div className="outer-bg">
                          <div className="bg-image section-outstanding-doctor" 
                            style={{backgroundImage: `url(${imageBase64})`}}
                          />
                        </div>
                        <div className="position text-center">
                          <h3>{language === LANGUAGES.VI ? nameVi : nameEn}</h3>
                          <h4>Khoa thần kinh 1</h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
    outstandingDoctorsRedux: state.admin.outstandingDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOutStandingDoctors: () => dispatch(actions.fetchOutStandingDoctor()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
