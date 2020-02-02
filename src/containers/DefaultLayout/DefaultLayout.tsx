import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from 'react-cookie';
import LogRocket from 'logrocket';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
  // @ts-ignore
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import {AFDSESSION, AFDSESSIONVALUES} from "./../../constants/authentication";


const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

interface IDefaultLayoutProps extends RouteComponentProps, ReactCookieProps{
}
interface IDefaultLayoutState {
  validSession:boolean
}
class DefaultLayout extends Component<IDefaultLayoutProps, IDefaultLayoutState> {

  public constructor(props:IDefaultLayoutProps){
    super(props);
    this.state ={
      validSession:false
    }
  }
  private checkForValidSession = ()=>{
    const { cookies, history } = this.props;
    if(cookies){
      const session = cookies.get(AFDSESSION);
      if(AFDSESSIONVALUES.find(a=> a === session) !== undefined){
        console.log('User has a valid session. Proceed with page- ' + atob(session));
        LogRocket.identify(atob(session))
        this.setState({validSession:true})
      }else{
        console.log('User does not have a valid session.  Redirecting to Login Page ')
        history.push('/Login');
        this.setState({validSession:false})
      }
    }  
  }
  public componentDidMount=()=>{
    this.checkForValidSession();
  }
  private loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  public render() {
    if(!this.state.validSession){return <div/>}
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense fallback={this.loading()}>
            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props:any) => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter/>
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default withCookies(withRouter(DefaultLayout));
