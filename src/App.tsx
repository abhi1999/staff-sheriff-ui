import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { withCookies, ReactCookieProps } from 'react-cookie';

import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

interface IAppProps extends ReactCookieProps{
}
class App extends Component<IAppProps,any> {
  public constructor(props:IAppProps){
    super(props);
  }
  public render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" render={props => <Login {...props}/>} />
              <Route exact path="/register" render={props => <Register {...props}/>} />
              <Route exact path="/404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" render={props => <Page500 {...props}/>} />
]             <Route path="/" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default withCookies(App);
