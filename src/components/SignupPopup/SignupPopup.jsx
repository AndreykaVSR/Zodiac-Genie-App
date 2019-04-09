import React, { Component } from 'react';
import SignupForm from '../SignupForm/SignupForm';
import './SignupPopup.css';

class SignupPopoup extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='SignupPopoup'>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
};

export default SignupPopoup;