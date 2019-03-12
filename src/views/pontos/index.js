import React from 'react';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import { Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import service from './../../service/service';
import './../styles/panteon.css';

export default class Pontos extends React.Component {

    componentDidMount() {
        service.findAll('pontos', (dataReceived) => this.setState({ pontos: dataReceived }));
    }
    handleDelete = async (id) => {
        service.delete(id, 'pontos')
    }
    state = {

        pontos: [],
    }
    render() {
        const data = {
            columns: [
                {
                    label: 'Local',
                    field: 'local',
                    sort: 'asc',
                    width: 100
                },
                {
                    'label': 'Dias',
                    'field': 'dias',
                    'sort': 'asc',
                    'width': 100
                },
                {
                    label: 'Início',
                    field: 'inicio',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Término',
                    field: 'termino',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Opções',
                    field: 'opcoes',
                    sort: 'asc',
                    width: 100
                },

            ],
            rows: this.state.pontos.map(ponto => {

                let dias = ponto.dias;
                return { local: ponto.local, dias: dias ? (Object.keys(dias).map(key => {
                    return <div className='mult-items' key={key}><div className='text-mult' key={key}>{dias[key].label} </div></div>
                })) : ('')  ,inicio: ponto.inicio, termino: ponto.termino, opcoes: <div> <Link to={`/adm/pontos/editar/${ponto.id}`}><Button size='sm' color='default'><i className='fas fa-edit'></i></Button></Link> <Button size='sm' color='default' onClick={() => this.handleDelete(ponto.id)}><i className='fas fa-trash'></i></Button></div> }
            })
        };
        return (
            <div>
                <div><Breadcrumb>
                    <BreadcrumbItem><Link to='/adm/dashboard'>Dashboard</Link></BreadcrumbItem>
                    <BreadcrumbItem active>pontos</BreadcrumbItem>

                </Breadcrumb></div>
                <div className='mybuttons'><Link to='/adm/pontos/novo'><Button color='primary' size='sm'>Adicionar ponto</Button></Link></div>
                <div><MDBDataTable className='panteon'
                    striped
                    bordered
                    hover

                    data={data}


                /></div>
            </div>

        )
    }
}