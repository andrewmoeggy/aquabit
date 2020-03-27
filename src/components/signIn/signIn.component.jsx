import React, { Component } from 'react';
import './signIn.styles.scss';

// import Button from '../button/button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      })
    } catch (err) {
      console.error(err);
    }

  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="signIn">
        <form>
          <span className='signIn-header'>Sign in with email password</span>
          <label className='signIn-form-label'>Email</label>
          <input
            className='signIn-form-input'
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label className='signIn-form-label'>Password</label>
          <input
            className='signIn-form-input'
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <div className="signIn-form--button-container">
            <input type='submit' onClick={this.handleSubmit} value='Submit' className='signIn-form-submit' />
            <input type='submit' onClick={signInWithGoogle} value='Sign in with Google' className='signIn-form-submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;