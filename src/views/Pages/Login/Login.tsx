import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Alert } from 'reactstrap';
import { withCookies, ReactCookieProps } from 'react-cookie';
import { RouteComponentProps } from "react-router";

import {AFDSESSION, AFDSESSIONVALUES} from "./../../../constants/authentication"
/*const AFDSESSION ="session-state-1";
const AFDSESSIONVALUE ="uknFlkdnamdBeukndscfher==";
*/
interface ILoginProps extends RouteComponentProps, ReactCookieProps{

}
interface ILoginState{
  username:string,
  password:string,
  showNotification:boolean
}

class Login extends Component<ILoginProps,ILoginState> {
  public constructor(props:ILoginProps){
    super(props);
    
    this.state={
      username:'',
      password:'',
      showNotification:false
     
    }
  }
  render() {
    return (<React.Fragment>
      {this.state.showNotification?<Alert color="danger">
          Incorrect password. Try again.
        </Alert>:""}
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" value={this.state.username} onChange={(e:any)=>{this.setState({username:e.target.value});}}  />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" value={this.state.password} onChange={(e:any)=>{this.setState({password:e.target.value});}} 
                        autoComplete="none" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.onLoginClicked}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" disabled={true} className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%', display:'none' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
      </React.Fragment>

    );
  }
  private onLoginClicked=()=>{
    if(this.checkForCorrectPassword()){
      const { cookies, history } = this.props;
      var now = new Date();
      var time = now.getTime();
      var expireTime = time + 1000*60*60;
      now.setTime(expireTime);
      if(cookies) {console.log('setting cooki e'+ AFDSESSION, now)
        cookies.set(AFDSESSION, btoa(this.state.password.toLowerCase()), { path: '/', expires:now });}
        history.push('/');
    }else{
      this.setState({showNotification:true});
    }
   
  }
  private checkForCorrectPassword = ():boolean=>{
    return AFDSESSIONVALUES.find(a=> a=== btoa(this.state.password.toLowerCase())) !== undefined;
  }
}

export default withCookies(Login);
