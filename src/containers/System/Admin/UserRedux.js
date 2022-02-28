import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
// import { getALlCodeService } from "../../../services/userService";
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../../utils";
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import TableManageUser from "./TableManageUser";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      positionsArr: [],
      rolesArr: [],
      previewImageURL: "",
      isOpen: false,

      //personal information in form
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      gender: "",
      position: "",
      role: "",
      avatar: "",

      action: "",
      userEditId: ",",
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();
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
    // compare with current(this) = [n] and last(prev) = []
    if (prevProps.genderRedux !== this.props.genderRedux) {
      let tempGenderArr = this.props.genderRedux;
      this.setState({
        genderArr: tempGenderArr,
        gender:
          tempGenderArr && tempGenderArr.length > 0 ? tempGenderArr[0].keyMap : "",
      });
    }

    if (prevProps.positionRedux !== this.props.positionRedux) {
      let tempPositionArr = this.props.positionRedux;
      this.setState({
        positionsArr: tempPositionArr,
        position:
          tempPositionArr && tempPositionArr.length > 0
            ? tempPositionArr[0].keyMap
            : "",
      });
    }

    if (prevProps.roleRedux !== this.props.roleRedux) {
      let tempRoleArr = this.props.roleRedux;
      this.setState({
        rolesArr: tempRoleArr,
        role: tempRoleArr && tempRoleArr.length > 0 ? tempRoleArr[0].keyMap : "",
      });
    }

    if (prevProps.listUsers !== this.props.listUsers) {
      let tempGenderArr = this.props.genderRedux;
      let tempPositionArr = this.props.positionRedux;
      let tempRoleArr = this.props.roleRedux;
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        gender:
          tempGenderArr && tempGenderArr.length > 0 ? tempGenderArr[0].keyMap : "",
        position:
          tempPositionArr && tempPositionArr.length > 0
            ? tempPositionArr[0].keyMap
            : "",
        role: tempRoleArr && tempRoleArr.length > 0 ? tempRoleArr[0].keyMap : "",
        avatar: "",
        previewImageURL: "",
        action: CRUD_ACTIONS.CREATE,
      });
    }
  }

  handleOnchangeImage = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      let objectURL = URL.createObjectURL(file);
      this.setState({
        previewImageURL: objectURL,
        avatar: base64,
      });
    }
  };

  openPreviewImage = () => {
    if (!this.state.previewImageURL) return;
    this.setState({
      isOpen: true,
    });
  };

  onChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  checkValidateInput = () => {
    let isValid = true;
    let arrCheck = [
      "email",
      "password",
      "firstName",
      "lastName",
      "phoneNumber",
      "address",
    ];
    for (let i = 0; i < arrCheck.length; i++) {
      if (!this.state[arrCheck[i]]) {
        isValid = false;
        alert("This input is required: " + arrCheck[i]);
        break;
      }
    }
    return isValid;
  };

  handleSaveUser = (e) => {
    let isValid = this.checkValidateInput();
    if (isValid === false) return;

    //fire redux create user
    let action = this.state.action;
    if (action === CRUD_ACTIONS.CREATE) {
      this.props.createNewUser({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        phonenumber: this.state.phoneNumber,
        gender: this.state.gender,
        roleId: this.state.role,
        positionId: this.state.position,
        avatar: this.state.avatar,
      });
    }

    //fire redux edit user
    if (action === CRUD_ACTIONS.EDIT) {
      this.props.editUserRedux({
        id: this.state.userEditId,
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        phonenumber: this.state.phoneNumber,
        gender: this.state.gender,
        roleId: this.state.role,
        positionId: this.state.position,
        avatar: this.state.avatar,
      });
    }
  };

  handleEditUserFromParent = (user) => {
    let imageBase64 = "";
    if (user.image) {
      imageBase64 = new Buffer(user.image, "base64").toString("binary");
    }

    this.setState({
      email: user.email,
      password: "HARDCODE",
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phonenumber,
      address: user.address,
      gender: user.gender,
      position: user.positionId,
      role: user.roleId,
      avatar: "",
      previewImageURL: imageBase64,
      action: CRUD_ACTIONS.EDIT,
      userEditId: user.id,
    });
  };

  render() {
    let genders = this.state.genderArr;
    let roles = this.state.rolesArr;
    let positions = this.state.positionsArr;
    let language = this.props.language;
    let isGetGenders = this.props.isLoadingGender;

    let {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      address,
      gender,
      position,
      role,
      // avatar,
    } = this.state;

    return (
      <div className="user-redux-container">
        <div className="title">
          <div>User</div>
        </div>
        <div className="user-redux-body">
          <div className="container">
            <div className="from-row">
              <div className="row">
                {/* <div className="col-12 my-1">
                  <h5>
                    <FormattedMessage id="manage-user.add" />
                  </h5>
                </div> */}
                <div className="col-12 my-2">
                  {isGetGenders === true ? "Loading genders" : ""}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">
                    <FormattedMessage id="manage-user.email" />
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    value={email}
                    onChange={(event) => {
                      this.onChangeInput(event, "email");
                    }}
                    disabled={
                      this.state.action === CRUD_ACTIONS.EDIT ? true : false
                    }
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
                    value={password}
                    onChange={(event) => {
                      this.onChangeInput(event, "password");
                    }}
                    disabled={
                      this.state.action === CRUD_ACTIONS.EDIT ? true : false
                    }
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputFirstName">
                    <FormattedMessage id="manage-user.first-name" />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    value={firstName}
                    onChange={(event) => {
                      this.onChangeInput(event, "firstName");
                    }}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputLastName">
                    <FormattedMessage id="manage-user.last-name" />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    value={lastName}
                    onChange={(event) => {
                      this.onChangeInput(event, "lastName");
                    }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="inputAddress">
                    <FormattedMessage id="manage-user.address" />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    value={address}
                    onChange={(event) => {
                      this.onChangeInput(event, "address");
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-3">
                  <label htmlFor="inputPhoneNumber">
                    <FormattedMessage id="manage-user.phone-number" />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPhoneNumber"
                    value={phoneNumber}
                    onChange={(event) => {
                      this.onChangeInput(event, "phoneNumber");
                    }}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="inputGender">
                    <FormattedMessage id="manage-user.gender" />
                  </label>
                  <select
                    id="inputGender"
                    className="form-control"
                    value={gender}
                    onChange={(event) => {
                      this.onChangeInput(event, "gender");
                    }}
                  >
                    {genders &&
                      genders.length > 0 &&
                      genders.map((item, index) => {
                        return (
                          <option key={index} value={item.keyMap}>
                            {language === LANGUAGES.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="inputPosition">
                    <FormattedMessage id="manage-user.position" />
                  </label>
                  <select
                    id="inputPosition"
                    className="form-control"
                    value={position}
                    onChange={(event) => {
                      this.onChangeInput(event, "position");
                    }}
                  >
                    {positions &&
                      positions.length > 0 &&
                      positions.map((item, index) => {
                        return (
                          <option key={index} value={item.keyMap}>
                            {language === LANGUAGES.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="inputRole">
                    <FormattedMessage id="manage-user.role" />
                  </label>
                  <select
                    id="inputRole"
                    className="form-control"
                    value={role}
                    onChange={(event) => {
                      this.onChangeInput(event, "role");
                    }}
                  >
                    {roles &&
                      roles.length > 0 &&
                      roles.map((item, index) => {
                        return (
                          <option key={index} value={item.keyMap}>
                            {language === LANGUAGES.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
              <div className="form-group image-save">
                <div className="image-save-left">
                  <label htmlFor="inputState">
                    <FormattedMessage id="manage-user.image" />
                  </label>
                  <div className="preview-img-container">
                    <input
                      id="previewImg"
                      type="file"
                      hidden
                      onChange={(event) => this.handleOnchangeImage(event)}
                    />
                    <label className="upload-file" htmlFor="previewImg">
                      <FormattedMessage id="manage-user.upload" />
                      <i className="fas fa-upload"></i>
                    </label>
                    <div
                      className="preview-image"
                      style={{
                        backgroundImage: `url(${this.state.previewImageURL})`,
                        cursor:
                          this.state.previewImageURL !== ""
                            ? "pointer"
                            : "default",
                      }}
                      onClick={() => this.openPreviewImage()}
                    ></div>
                  </div>
                </div>
                <div className="image-save-right">
                  <button
                    className={
                      this.state.action === CRUD_ACTIONS.EDIT
                        ? "btn btn-warning mt-3"
                        : "btn btn-primary mt-3"
                    }
                    onClick={() => this.handleSaveUser()}
                    style={
                      this.state.action === CRUD_ACTIONS.EDIT
                        ? {
                            width: 70,
                            color: "white",
                            backgroundColor: "#ffcc00",
                          }
                        : { width: 55 }
                    }
                  >
                    {this.state.action === CRUD_ACTIONS.EDIT ? (
                      <FormattedMessage id="manage-user.edit" />
                    ) : (
                      <FormattedMessage id="manage-user.save" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-4">
              <TableManageUser
                handleEditUserFromParentKey={this.handleEditUserFromParent} //function ko có dấu đóng mở ngoặc
                action={this.state.action}
              />
            </div>
          </div>
        </div>
        {this.state.isOpen === true && (
          <Lightbox
            mainSrc={this.state.previewImageURL}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    isLoadingGender: state.admin.isLoadingGender,
    positionRedux: state.admin.positions,
    roleRedux: state.admin.roles,
    listUsers: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),
    createNewUser: (data) => dispatch(actions.createNewUser(data)),
    fetchAllUserRedux: () => dispatch(actions.fetchAllUserStart()),
    editUserRedux: (data) => dispatch(actions.editUser(data)),

    // processLogout: () => dispatch(actions.processLogout()),
    // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
