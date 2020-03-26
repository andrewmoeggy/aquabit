import React, { Component } from 'react';

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
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default SignIn;