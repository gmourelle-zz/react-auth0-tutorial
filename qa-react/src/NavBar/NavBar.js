import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../Auth/Auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/user';

const NavBar = props => {
  const signOut = () => {
    //auth0Client.signOut();
    props.signOut(props.history);
    //props.history.replace('/');
  };

  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Q&App
      </Link>
      {!auth0Client.isAuthenticated() && (
        <button className="btn btn-dark" onClick={auth0Client.signIn}>
          Sign In
        </button>
      )}
      {auth0Client.isAuthenticated() && (
        <div>
          <label className="mr-2 text-white">
            {auth0Client.getProfile().name}
          </label>
          <button className="btn btn-dark" onClick={signOut}>
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signOut
    },
    dispatch
  );

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(NavBar)
);
