import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import { LocationInfoBox } from './LocationInfoBox';
import { LocationMarker } from './LocationMarker';

const NATURAL_EVENT_WILDFIRE = 8

const Map = ({eventData, center, zoom}) => {

  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map((ev, index) => {
    if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE)
        return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1] } lng={ev.geometries[0].coordinates[0]}  onClick ={()=> setLocationInfo({id : ev.id, title : ev.title})} />
    return null
  })
  return (
    <div className="map">
        <GoogleMapReact
            bootStrapURLKeys = {{key:'AIzaSyCno29s9ODX-Sm0aTAno9ZyIxhOUs_Ie4k'}}
            defaultCenter = {center}
            defaultZoom = {zoom}
        >
            {markers}
        </GoogleMapReact>
        {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 39.1130,
        lng: -105.358
    },
    zoom: 6
}

export default Map