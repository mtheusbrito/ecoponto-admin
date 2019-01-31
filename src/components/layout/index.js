import React from 'react';
import './bootstrap.min.css';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import service from './../../service/base';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button, Container
} from 'reactstrap';
import urls from '../../urls';


export default class Layout extends React.Component {


    handleSignOut = async e => {
        e.preventDefault();
        service.auth().signOut();

    };
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Eco ponto</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>

                                <NavItem>
                                    <Link to='/adm/horarios'><Button outline color='success' size='sm' style={{ marginLeft: '10px' }}>Horários</Button></Link>
                                </NavItem>

                                <NavItem>
                                    <Link to='/adm/pontos'><Button outline color='success' size='sm' style={{ marginLeft: '10px' }}>Pontos</Button></Link>
                                </NavItem>

                                <NavItem>
                                    <Button outline color='danger' size='sm' style={{ marginLeft: '10px' }} onClick={this.handleSignOut}>Desconectar</Button>
                                </NavItem>



                            </Nav>
                        </Collapse>
                    </Navbar>

                </div>

                <div style={{marginRight: '25px', marginTop: '20px'}} >
                    <Container fluid >
                        <React.Suspense fallback={<div>Aguarde ...</div>}>

                            <Switch>
                                {urls.map((url, idx) => {
                                    return url.component ? (<Route key={idx} path={url.path} exact={url.exact} name={url.name} component={url.component} />) : (null);
                                })}
                                <Redirect from='/adm' to='/adm/dashboard' />
                            </Switch>

                        </React.Suspense>
                    </Container></div>
            </div>
        );
    }
}