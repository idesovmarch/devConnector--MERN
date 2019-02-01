import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <div className='dark-overlay landing-inner text-light'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h1 className='display-3 mb-4'>
                  <b>Dev/Connect</b>
                </h1>
                <p className='lead'>
                  {' '}
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <hr />
                <Link to='/register' className='btn btn-lg btn-info mr-2'>
                  Sign Up {''}
                  <i class='fas fa-user-plus justify-content-end' />
                </Link>
                <Link to='/login' className='btn btn-lg btn-light'>
                  Login {''}
                  <i class='fas fa-sign-in-alt' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
