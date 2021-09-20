import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

import 'leaflet/dist/leaflet.css';

const App = () => {
  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=80')
      .then((res) => res.json())
      .then(({ results }) => {
        setLaunches(results);
        console.log(launches);
      })
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {launches.map(
          (launch: any) =>
            !isLoading &&
            launch.pad.latitude &&
            launch.pad.longtitude && (
              // this is the marker that doesn't work no matter what I ve tried
              <Marker
                key={launch.pad.id}
                position={[
                  parseInt(launch.pad.latitude),
                  parseInt(launch.pad.longtitude),
                ]}
              >
                <Popup>
                  <span>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </span>
                </Popup>
              </Marker>
            )
        )}
      </MapContainer>
      {/* <pre>{JSON.stringify(launches, null, 2)}</pre> */}
    </div>
  );
};

export default App;
