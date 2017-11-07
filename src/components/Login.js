import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h2 className="box-layout__title">ExpenseIt</h2>
      <p>Sign in to get started</p>
      <button className="button" onClick={startLogin}>Sign in with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);