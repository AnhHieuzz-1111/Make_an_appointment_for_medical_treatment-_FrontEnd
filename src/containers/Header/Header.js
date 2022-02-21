import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import logoVietnamese from "../../assets/images/vietnamese.svg";
import logoEngland from "../../assets/images/england.svg";
import { LANGUAGES } from "../../utils/constant";
import { FormattedMessage } from "react-intl";

class Header extends Component {
  handleChangeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  render() {
    const { processLogout, userInfo } = this.props;
    console.log('check userInfo: ', userInfo)
    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>
        <div className="languages">
          <span className="welcome">
            <FormattedMessage id="homeheader.welcome"/>, {userInfo && userInfo.firstName ? userInfo.firstName : ""}!
          </span>
          <div className="language-vi">
            <img
              src={logoVietnamese}
              onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}
            />
          </div>
          <div className="language-en">
            <img
              src={logoEngland}
              onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}
            />
          </div>
          {/* nút logout */}
          <div
            className="btn btn-logout"
            onClick={processLogout}
            title="Log out"
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageAppRedux: (language) =>
      dispatch(actions.changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
