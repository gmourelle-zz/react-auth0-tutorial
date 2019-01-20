import React, { Component, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  NavBar,
  Question,
  Questions,
  NewQuestion,
  SecuredRoute,
  ErrorBoundary
} from './components';
import Callback from './Callback';
import auth0Client from './Auth';
import { raiseError } from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true
    };

    //checkingSession que lo reciba por prop?
  }

  // componentDidMount() {
  //   if (this.props.location.pathname === '/callback') {
  //     this.props.checkingSessionRequest();
  //     return;
  //   }

  //   try {
  //     auth0Client.silentAuth();
  //     this.forceUpdate();
  //   } catch (err) {
  //     if (err.error === 'login_required') return;
  //     console.log(err.error);
  //   }

  //   this.props.checkingSessionRequest();
  // }
  async componentDidMount() {
    if (this.props.location.pathname === '/callback') {
      this.setState({ checkingSession: false });
      return;
    }

    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error === 'login_required') return;
      console.log(err.error);
    }

    this.setState({ checkingSession: false });
  }

  render() {
    const { error, raiseError } = this.props;
    const { checkingSession } = this.state;

    return (
      <Fragment>
        <NavBar />
        <Route exact path="/" component={Questions} />
        <ErrorBoundary error={error} raiseError={raiseError}>
          <Route exact path="/question/:questionId" component={Question} />
          <Route exact path="/callback" component={Callback} />
          <SecuredRoute
            path="/new-question"
            component={NewQuestion}
            checkingSession={checkingSession}
          />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  error: state.questionsReducer.error,
  checkingSession: state.userReducer.checkingSession
});
export default withRouter(
  connect(
    mapStateToProps,
    { raiseError }
  )(App)
);
