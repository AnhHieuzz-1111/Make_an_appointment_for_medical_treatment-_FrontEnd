import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { getALlCodeService } from "../../../services/userService";
import { LANGUAGES } from "../../../utils/constant";
import * as actions from "../../../store/actions";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
    };
  }

  async componentDidMount() {
    // this.props.dispatch(actions.fetchGenderStart());
    this.props.getGenderStart();

    // try {
    //   return new Promise(async () => {
    //     let res = await getALlCodeService("gender");
    //     if (res && res.errCode === 0) {
    //       this.setState({
    //         genderArr: res.data,
    //       });
    //     }
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // => render => componentDidUpdate
    // compare with current(this) = [] and last(prev) = [3]
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux,
      });
    }
  }

  render() {
    let genders = this.state.genderArr;
    let language = this.props.language;
    console.log("check props from redux: ", this.props.genderRedux);
    return (
      <div className="user-redux-container">
        <div className="title">
          <div>User</div>
        </div>
        <div className="user-redux-body">
          <div className="container">
            <div className="from-row">
              <form>
                <div className="row">
                  <div className="col-12 my-2">
                    <h5>
                      <FormattedMessage id="manage-user.add" />
                    </h5>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">
                      <FormattedMessage id="manage-user.email" />
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">
                      <FormattedMessage id="manage-user.password" />
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputAddress">
                      <FormattedMessage id="manage-user.first-name" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputAddress2">
                      <FormattedMessage id="manage-user.last-name" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-md-12">
                    <label htmlFor="inputAddress2">
                      <FormattedMessage id="manage-user.address" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-3">
                    <label htmlFor="inputAddress2">
                      <FormattedMessage id="manage-user.phone-number" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputState">
                      <FormattedMessage id="manage-user.gender" />
                    </label>
                    <select id="inputState" className="form-control">
                      {genders &&
                        genders.length > 0 &&
                        genders.map((item, index) => {
                          return (
                            <option key={index}>
                              {language === LANGUAGES.VI
                                ? item.valueVi
                                : item.valueEn}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputState">
                      <FormattedMessage id="manage-user.position" />
                    </label>
                    <select id="inputState" className="form-control">
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputState">
                      <FormattedMessage id="manage-user.role" />
                    </label>
                    <select id="inputState" className="form-control">
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputState">
                    <FormattedMessage id="manage-user.image" />
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-3"
                  style={{ width: 55 }}
                >
                  <FormattedMessage id="manage-user.save" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    // processLogout: () => dispatch(actions.processLogout()),
    // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
