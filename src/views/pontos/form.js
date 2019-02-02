import React from 'react';
import {
    Form, FormGroup, Label, Input, Col, Button, Card, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import service from './../../service/service';
import { Link } from 'react-router-dom';
export default class Pontos extends React.Component {
    state = {
        id: null,
        local: '',
        latitude: '',
        longitude: '',

    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { id, local, latitude, longitude } = this.state;
        let obj = {
            id, local, latitude, longitude
        }
        if (this.state.id) {
            service.update(this.state.id, 'pontos', obj);

        } else {
            service.create('pontos', obj);
        }

        this.props.history.push('/adm/pontos');
    };
    componentWillMount() {
        const { id } = this.props.match.params;

        if (!(id === undefined || !id)) {
            this.setState({ id });
            service.getById('pontos', id, (data) => this.setState({ ...data }));
        }
    };


    render() {


        return (
            <div>

                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/adm/dashboard'>Dashboard</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/adm/pontos'>pontos</Link></BreadcrumbItem>
                        <BreadcrumbItem active >{this.state.id ? 'atualizar ponto' : 'adicionar ponto'}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle>{this.state.id ? ('Atualizar ponto') : ('Novo ponto')}</CardTitle>

                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label for='local' sm={2}>Local</Label>
                                    <Col sm={10}>
                                        <Input type='text' required name='local' id='local' placeholder='Local de coleta' bsSize='sm' value={this.state.local} onChange={e => this.setState({ local: e.target.value })} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for='latitude' sm={2}>Latitude</Label>
                                    <Col sm={10}>
                                        <Input type='number' required name='latitude' id='latitude' placeholder='-11.111111' bsSize='sm' value={this.state.latitude} onChange={e => this.setState({ latitude: e.target.value })} />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for='longitude' sm={2}>Longitude</Label>
                                    <Col sm={10}>
                                        <Input type='number' required name='longitude' id='longitude' placeholder='-11.111111' bsSize='sm' value={this.state.longitude} onChange={e => this.setState({ longitude: e.target.value })} />
                                    </Col>
                                </FormGroup>

                                <Button color='primary' size='sm'>{this.state.id ? ('Atualizar') : ('Salvar')}</Button>


                            </Form>
                        </CardBody>
                    </Card>
                </div>

            </div>

        )
    }
}