import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./TableManageUser.scss";
import * as actions from "../../../store/actions";

class TableManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersRedux: [],
    };
  }

  componentDidMount() {
    this.props.fetchAllUserRedux();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.listUsers !== this.props.listUsers) {
      this.setState({
        usersRedux: this.props.listUsers,
      });
    }
  }

  handleDeleteUser = (user) => {
      this.props.deleteUserRedux(user.id);
  }

  handleEditUser = (user) => {
    this.props.handleEditUserFromParentKey(user)
  }

  render() {
    let usersArr = this.state.usersRedux;
    return (
      <table id="TableManageUser">
        <tbody>
          <tr>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
          {usersArr &&
            usersArr.length > 0 &&
            usersArr.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.email}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>
                  <td>
                    <button 
                        onClick={() => this.handleEditUser(item) }
                        className="btn-edit">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button 
                        onClick={() => this.handleDeleteUser(item)}
                    className="btn-delete">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listUsers: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUserRedux: () => dispatch(actions.fetchAllUserStart()),
    deleteUserRedux: (id) =>  dispatch(actions.deleteUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
