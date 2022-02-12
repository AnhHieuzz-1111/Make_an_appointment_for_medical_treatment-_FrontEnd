import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logoVietnamese from "../../assets/images/vietnamese.svg";
import logoEngland from "../../assets/images/england.svg";
import { FormattedMessage } from 'react-intl';
import {LANGUAGES} from "../../utils/constant";
import { changeLanguageApp } from "../../store/actions/appActions";

class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language)
    //fire redux event: actions
  }
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
                  <b><FormattedMessage id="homeheader.specialty"/></b>
                </div>
                <div className="subs-title"><FormattedMessage id="homeheader.searchdoctor"/></div>
              </div>
              <div className="child-content">
                <div>
                  <b><FormattedMessage id="homeheader.health-facility"/></b>
                </div>
                <div className="subs-title"><FormattedMessage id="homeheader.select-clinic-hospital"/></div>
              </div>
              <div className="child-content">
                <div>
                  <b><FormattedMessage id="homeheader.doctor"/></b>
                </div>
                <div className="subs-title"><FormattedMessage id="homeheader.select-good-doctor"/></div>
              </div>
              <div className="child-content">
                <div>
                  <b><FormattedMessage id="homeheader.examination-package"/></b>
                </div>
                <div className="subs-title"><FormattedMessage id="homeheader.examine-general-health"/></div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <span><FormattedMessage id="homeheader.support"/></span>
              </div>
              <div className="language-vi"><img src={logoVietnamese} onClick={() => { this.changeLanguage(LANGUAGES.VI) }}/></div>
              <div className="language-en"><img src={logoEngland} onClick={()=>{ this.changeLanguage(LANGUAGES.EN) }}/></div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="first-title"><FormattedMessage id="banner.medical-foundation"/></div>
            <div className="second-title"><FormattedMessage id="banner.comprehensive-health-care"/></div>
            <div className="search">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Tìm kiếm thông tin ..." />
            </div>
          </div>
          <div className="content-down">
            <div className="option">
              <div className="option-child">
                <div className="speciality">
                  <div className="icon-speciality"></div>
                  <div className="text-speciality"><FormattedMessage id="banner.specialist-examination"/></div>
                </div>
                <div className="remote">
                  <div className="icon-remote"></div>
                  <div className="text-remote"><FormattedMessage id="banner.remote-examination"/></div>
                </div>
                <div className="general">
                  <div className="icon-general"></div>
                  <div className="text-general"><FormattedMessage id="banner.general-examination"/></div>
                </div>
                <div className="medical">
                  <div className="icon-medical"></div>
                  <div className="text-medical"><FormattedMessage id="banner.medical-test"/></div>
                </div>
                <div className="health">
                  <div className="icon-health"></div>
                  <div className="text-health"><FormattedMessage id="banner.mental-health"/></div>
                </div>
                <div className="dentistry">
                  <div className="icon-dentistry"></div>
                  <div className="text-dentistry"><FormattedMessage id="banner.dentistry-examination"/></div>
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
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
