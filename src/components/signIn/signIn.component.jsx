import React, { Component } from 'react';
import './signIn.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    })
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
          <input type='submit' value='Submit' className='signIn-form-submit' />
        </form>
      </div>
    );
  }
}

export default SignIn;