import React, { Component, createContext } from "react";

export const UserContext = createContext();

class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: null,
      isLogin: false,
    };

    this.setLogin = this.setLogin.bind(this);
    this.checkIsLogin = this.checkIsLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    this.checkIsLogin();
  }

  checkIsLogin() {
    const isToken = localStorage.getItem("token");

    if (isToken) {
      this.setState({ isLogin: true });
    }

    this.setState({ isLoading: false });
  }

  setLogin(token) {
    this.setState({ isLogin: true });
  }

  handleLogOut() {
    localStorage.removeItem("token");
    window.location.href = "";
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          setLogin: this.setLogin,
          handleLogOut: this.handleLogOut,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
