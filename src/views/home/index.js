import React from 'react';
import marker from './../../assets/marker.png';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';
import service from './../../service/service';
const TOKEN = 'pk.eyJ1IjoibXRoZXVzIiwiYSI6ImNqcWl1N3l0azAyb2EzeHFzYnZ6NXB4d3IifQ.dg21_RuTc0FJqVFPmM-lJQ';



export default class Map extends React.Component {
    componentDidMount() {
        service.findAll('pontos', (dataReceived) => this.setState({ pontos: dataReceived }));

    }

    state = {
        viewport: {
            latitude: -21.2065,
            longitude: -41.8896,
            zoom: 15,
            bearing: 29,
            pitch: 50,
            width: 2000,
            height: 1000,

        },
        pontos: [],


    }


    render() {
        const navStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            padding: '10px'
        };
        return (<ReactMapGL
            {...this.state.viewport}
            mapStyle='mapbox://styles/mapbox/streets-v10'
            mapboxApiAccessToken={TOKEN}
            onViewportChange={(viewport) => this.setState({ viewport })}
        >   
            
            {this.state.pontos.map(ponto => {
                return <Marker latitude={ponto.latitude} longitude={ponto.longitude} offsetLeft={-20} offsetTop={-10}>


                    <div>

                        <img src={marker} width={25} height={25} title={ponto.local} />
                    </div>
                </Marker>
            })}


            <div className='nav' style={navStyle}><NavigationControl /></div>
        </ReactMapGL>)
    }
}