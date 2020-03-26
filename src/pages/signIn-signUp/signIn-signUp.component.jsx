import React, { Component } from 'react';
import './signIn-signUp.styles.scss';

import SignIn from '../../components/signIn/signIn.component';

class SignInSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export default SignInSignUp;