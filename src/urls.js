import React from 'react';

const Horarios = React.lazy(() => import('./views/horarios'));
const HorariosForm = React.lazy(() => import('./views/horarios/form'));

const Dashboard = React.lazy(() => import('./views/dashboard'));

const Pontos = React.lazy(() => import('./views/pontos'));
const PontosForm = React.lazy(() => import('./views/pontos/form'));


const urls = [
    { path: '/adm/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/adm/pontos', exact: true, name: 'Pontos', component: Pontos },
    { path: '/adm/pontos/novo', name: 'Adicionar Ponto', component: PontosForm },
    { path: '/adm/pontos/editar/:id', name: 'Editar Ponto', component: PontosForm },

    { path: '/adm/horarios', exact: true, name: 'Horários', component: Horarios },
    { path: '/adm/horarios/novo', name: 'Adicionar Horário', component: HorariosForm },
    { path: '/adm/horarios/editar/:id', name: 'Editar Horário', component: HorariosForm }

];


export default urls;
