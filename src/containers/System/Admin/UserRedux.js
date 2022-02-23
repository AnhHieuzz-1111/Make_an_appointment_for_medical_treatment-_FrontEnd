import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { getALlCodeService } from "../../../services/userService";
import { LANGUAGES } from "../../../utils/constant";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
    };
  }

  componentDidMount() {
    try {
      return new Promise(async () => {
        let res = await getALlCodeService("gender");
        console.log("check res: ", res.data);
        if (res && res.errCode === 0) {
          this.setState({
            genderArr: res.data,
          });
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let genders = this.state.genderArr;
    let language = this.props.language;
    return (
      <div className="user-redux-container">
        <div className="title">
          <div>User</div>
        </div>
        <div className="user-redux-body">
          <div className="container">
            <div className="from-row">
              <form>
                <div class="row">
                  <div className="col-12 my-2">
                    <h5>
                      <FormattedMessage id="manage-user.add" />
                    </h5>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">
                      <FormattedMessage id="manage-user.email" />
                    </label>
                    <input type="email" class="form-control" id="inputEmail4" />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">
                      <FormattedMessage id="manage-user.password" />
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="form-group col-md-6">
                    <label for="inputAddress">
                      <FormattedMessage id="manage-user.first-name" />
                    </label>
                    <input type="text" class="form-control" id="inputAddress" />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputAddress2">
                      <FormattedMessage id="manage-user.last-name" />
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress2"
                    />
                  </div>
                </div>

                <div className="row">
                  <div class="form-group col-md-12">
                    <label for="inputAddress2">
                      <FormattedMessage id="manage-user.address" />
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress2"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-3">
                    <label for="inputAddress2">
                      <FormattedMessage id="manage-user.phone-number" />
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress2"
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputState">
                      <FormattedMessage id="manage-user.gender" />
                    </label>
                    <select id="inputState" class="form-control">
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
                  <div class="form-group col-md-3">
                    <label for="inputState">
                      <FormattedMessage id="manage-user.position" />
                    </label>
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="form-group col-md-3">
                    <label for="inputState">
                      <FormattedMessage id="manage-user.role" />
                    </label>
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputState">
                    <FormattedMessage id="manage-user.image" />
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary mt-3"
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
