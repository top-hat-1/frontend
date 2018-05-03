import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signIn } from './actions';

class Signup extends PureComponent {

  handleSubmit = event => {
    event.preventDefault();
    const { target: { elements } } = event;
    const { email, password } = elements;

    const { signIn, history } = this.props;

    signIn({
      email: email.value,
      password: password.value
    })
      .then(() => {
        history.push('/api/auth/signin');
      });
  };

  render() {
    return (
      <section className='form-submit'>
        <h4>Sign In</h4>
        <form onSubmit={this.handleSubmit}>

          <div>
            <label>
              <div>Email:</div>
              <input name="email" required/>
            </label>
          </div>
          
          <div>
            <label>
              <div>Password:</div>
              <input name="password" required/>
            </label>
          </div>

          <div className= 'sign-in'>
            <label>
              <div>
                <button>Sign in</button>
              </div>
            </label>
          </div>

        </form>
      </section>
    );
  }
}

export default withRouter(connect(
  ({ auth }) => ({ auth }),
  { signIn }
)(Signup));
