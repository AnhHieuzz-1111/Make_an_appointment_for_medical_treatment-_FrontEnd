import React, { Component } from "react";
import { connect } from "react-redux";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <div className="cover-footer">
          <div className="left-footer">
            <p>&copy; 2022 Bookingcare</p>
          </div>
          <div className="right-footer">
            <div className="ft-facebook">
              <a className="fb" target="blank" href="https://www.facebook.com/bookingcare">
                <i className="fab fa-facebook facebook"></i>
              </a>
            </div>
            <div className="ft-youtube">
              <a className="yt" target="blank" href="https://www.youtube.com/channel/UC9l2RhMEPCIgDyGCH8ijtPQ">
                <i className="fab fa-youtube youtube"></i>
              </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
