import React from 'react'
import {
  connect,
} from 'react-redux';
import SimpleLogin from './SimpleLogin';
import LoginForm from './LoginForm';
import Loggedin from './Loggedin';
import SignUp from './SignUp';
import Finish from './Finish';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreateEmailUser: false,
    };
  }

  showSignUpForm = (e) => {
    this.setState({isCreateEmailUser: true});
  };
  
  render() {
    return (
      <div id="login" className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns ">
            <div className="column login-form">
            <SimpleLogin />
            <LoginForm />
              { this.state.isCreateEmailUser && this.props.isLoggedIn ? <Finish /> : null }
            <Loggedin />
            </div>
            <div className="column login-message">
              <h2><span className="hello">안녕하세요!</span> <span className="nicetomeetyou">처음 뵙겠습니다.</span></h2>
              <p><span className="scwrap">Scwrap</span> 의 회원이 되어주세요!</p>
              { this.state.isCreateEmailUser ? 
              <SignUp onComplete={this.showFinishEmailUser} />
              : <button className="signup" onClick={this.showSignUpForm}>Sign up</button> 
               }
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.auth.uid,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
