"use client";
import React, { FC } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

interface IGoogleMapView {
  place: string;
}

const GoogleMapView: FC<IGoogleMapView> = ({ place }) => {
  const split = place.split(",");

  const lat = +split[0];
  const lng = +split[1];

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAUTwe0G7jq0zbr_vDhOSZnLumIuKZc1MY",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      // Code that depends on the browser environment
      const bounds = new window.google.maps.LatLngBounds({
        lat,
        lng,
      });
      map.fitBounds(bounds);

      setMap(map);
    },
    [lat, lng]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  console.log("isLoaded", isLoaded);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      // center={{
      //   lat,
      //   lng,
      // }}
      zoom={17}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        position={{
          lat,
          lng,
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GoogleMapView;
