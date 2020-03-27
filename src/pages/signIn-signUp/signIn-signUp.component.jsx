import React, { Component } from 'react';
import './signIn-signUp.styles.scss';

import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signup/signUp.component'

class SignInSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='signin-signup'>
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default SignInSignUp;