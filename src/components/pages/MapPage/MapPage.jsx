//импорт модулей
import React, {useState, useEffect} from 'react';

import {YMaps, Map, ZoomControl, Placemark, Clusterer} from '@pbe/react-yandex-maps';


const MapPage = () => {
    const [lat, setLat] = useState(51.1605);
    const [lng, setLng] = useState(71.4704);

    useEffect(() => {
        async function fetch() {
            try {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        setLat(position.coords.latitude);
                        setLng(position.coords.longitude);
                    });
                }
            } catch (e) {
                console.log(e)
            }
        }

        fetch();
    }, []);

    const clusterPoints = [[lat - 0.001, lng - 0.001], [lat - 0.002, lng - 0.002], [lat + 0.001, lng + 0.001],
        [lat - 0.001, lng + 0.001], [lat - 0.004, lng + 0.010]]

    return (
        <>
            <YMaps>
                <Map width="1200px" height="700px" defaultState={{center: [lat, lng], zoom: 15}}>
                    <Placemark geometry={[lat, lng]} properties={{iconContent: "Я"}} options={{preset: "islands#darkGreenIcon"}}/>
                    <ZoomControl/>
                    <Clusterer
                        options={{
                            preset: "islands#invertedVioletClusterIcons",
                            groupByCoordinates: false,
                        }}
                    >
                        {clusterPoints.map((coordinates, index) => (
                            <Placemark key={index} geometry={coordinates} />
                        ))}
                    </Clusterer>
                </Map>
            </YMaps>
        </>
    );
};

export default MapPage;