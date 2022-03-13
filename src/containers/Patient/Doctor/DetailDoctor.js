import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import "./DetailDoctor.scss";
import { getDetailInfoDoctor } from "../../../services/userService";
import { LANGUAGES } from "../../../utils/constant";

class DetailDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailDoctor: {},
    };
  }

  //component render
  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      let res = await getDetailInfoDoctor(id);
      if (res && res.errCode === 0) {
        this.setState({
          detailDoctor: res.data,
        });
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    let { detailDoctor } = this.state;
    let { language } = this.props;
    let nameVi = "",
      nameEn = "";
    if (detailDoctor && detailDoctor.positionData) {
      nameVi = `${detailDoctor.positionData.valueVi} || ${detailDoctor.lastName}  ${detailDoctor.firstName}`;
      nameEn = `${detailDoctor.positionData.valueEn} ||  ${detailDoctor.lastName} ${detailDoctor.firstName}`;
    }
    console.log("state: ", this.state);
    return (
      <>
        <HomeHeader isShowBanner={false} />
        <div className="doctor-detail-container">
          <div className="doctor-detail-cover">
            <div className="position-current">
              <i class="fas fa-home"></i>
              <div className="current-left">Khám chuyên khoa</div>
              <div className="current-right">Sức khỏe tâm thần</div>
            </div>
            <div className="doctor-intro">
              <div
                className="img-doctor"
                style={{
                  backgroundImage: `url(${
                    detailDoctor && detailDoctor.image ? detailDoctor.image : ""
                  })`,
                }}
              ></div>
              <div className="intro-content">
                <div className="up">
                  {language === LANGUAGES.VI ? nameVi : nameEn}
                </div>
                <div className="down">
                  {detailDoctor &&
                    detailDoctor.Markdown &&
                    detailDoctor.Markdown.description && (
                      <span>{detailDoctor.Markdown.description}</span>
                    )}
                </div>
                <div className="doctor-fb">
                  <i className="far fa-thumbs-up icon-like">Thích</i>
                </div>
              </div>
            </div>
            <div className="doctor-schedule"></div>
          </div>
          <div className="doctor-detail-cover-2">
            <div className="futher-review-doctor">
              <div className="doctor-detail-info">
                {detailDoctor &&
                  detailDoctor.Markdown &&
                  detailDoctor.Markdown.contentHTML && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: detailDoctor.Markdown.contentHTML,
                      }}
                    ></div>
                  )}
              </div>
              <div className="doctor-comment"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
