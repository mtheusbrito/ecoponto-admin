import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../service/base';
import Layout from './../components/layout';
import NotFound from '../views/not_found';
import Login from './../views/login';
export default class Routes extends React.Component {


    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={() => <div style={{ margin: '10px' }}><h4> Vá para: /adm</h4></div>} />
                    <PrivateRoute path='/adm' component={Layout} />
                    <Route path='/login' component={Login} />
                    <Route path='*' component={NotFound} />
                  


                </Switch>

            </BrowserRouter>

        );
    }



}
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={renderProps =>
            isAuthenticated() ? (
                <Component {...renderProps} />
            ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: renderProps.location },
                        }}
                    />
                )
        }
    />
);