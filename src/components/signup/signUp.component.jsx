import React, { Component } from 'react';
import Button from '../../components/button/button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('paswords dont match')
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (err) {
      console.error(err);
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="displayName"
            value={displayName}
            label='Display Name'
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            value={email}
            label='Email'
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            label='Password'
            onChange={this.handleChange}
          />
          <input
            type="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            label='Confirm Password'
            onChange={this.handleChange}
          />
          <Button type='submit'>Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
