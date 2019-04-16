import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './SignupForm.css';

class SignupForm extends Component {

  state = {
    message: '',
    name: '',
    dob: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state); 
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      this.props.history.push('/horoscope');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.dob && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className="SignupForm">
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Type Your Full Name Here" 
                value={this.state.name} 
                name="name" 
                onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input 
              type="text" 
              className="form-control" 
              placeholder="Type Your D.O.B. Here" 
              value={this.state.dob} 
              name="dob" 
              onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input 
              type="email" 
              className="form-control" 
              placeholder="Type Your Email Here" 
              value={this.state.email} 
              name="email" 
              onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input 
              type="password" 
              className="form-control" 
              placeholder="Type Your Password Here" 
              value={this.state.password} 
              name="password" 
              onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input 
              type="password" 
              className="form-control" 
              placeholder="Confirm Your Password" 
              value={this.state.passwordConf} 
              name="passwordConf" 
              onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button 
              className="btn" 
              disabled={this.isFormInvalid()}>Sign Up</button>
              &nbsp;&nbsp;
              <button 
                className="btnCancel">
                <Link className="btnCancel" to='/'>Cancel</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default SignupForm;
