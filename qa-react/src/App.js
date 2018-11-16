import React, { Component, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from './NavBar/NavBar';
import Question from './Question/Question';
import Questions from './Questions/Questions';
import Callback from './Callback';
import NewQuestion from './NewQuestion/NewQuestion';
import SecuredRoute from './SecuredRoute/SecuredRoute';
import auth0Client from './Auth';
import { checkingSessionRequest } from './store/actions/user';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   checkingSession: true
    // };

    //checkingSession que lo reciba por prop?
  }

  componentDidMount() {
    if (this.props.location.pathname === '/callback') {
      this.props.checkingSessionRequest();
      return;
    }

    try {
      auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error === 'login_required') return;
      console.log(err.error);
    }

    this.props.checkingSessionRequest();
  }
  // async componentDidMount() {
  //   if (this.props.location.pathname === '/callback') {
  //     this.setState({ checkingSession: false });
  //     return;
  //   }

  //   try {
  //     await auth0Client.silentAuth();
  //     this.forceUpdate();
  //   } catch (err) {
  //     if (err.error === 'login_required') return;
  //     console.log(err.error);
  //   }

  //   this.setState({ checkingSession: false });
  // }

  render() {
    const { checkingSession } = this.props;

    return (
      <div>
        <NavBar />
        <Route exact path="/" component={Questions} />
        <Route exact path="/question/:questionId" component={Question} />
        <Route exact path="/callback" component={Callback} />
        <SecuredRoute
          path="/new-question"
          component={NewQuestion}
          checkingSession={checkingSession}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  checkingSession: state.userReducer.checkingSession
});

export default withRouter(
  connect(
    mapStateToProps,
    { checkingSessionRequest }
  )(App)
);
