import { useField } from "formik";
import L, { LatLngBoundsExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ImageOverlay, MapContainer, Rectangle } from "react-leaflet";
import { fields } from "./Plassering";

interface rectangle {
  bounds: LatLngBoundsExpression;
}

export default function Map({ name }: { name: string}) {
  const [field, meta, helpers] = useField(name);
  const plass = null;

  

  // bounds for the map
  const bounds: LatLngBoundsExpression = [
    [0, 0],
    [450, 550],
  ];

  const centerOne = Number(bounds[1].slice(0, 1)) / 2;
  const centerTwo = Number(bounds[1].slice(1, 2)) / 2;

  const mapContainer = document.querySelector(
    ".leaflet-container"
  ) as HTMLDivElement;

  // SELECTING THE PLACEMENT ON THE MAP
  const onClick = (id: string) => {
    helpers.setValue(id);
  };

  return (
    <>
      <h2 className="group-hover:text-secondary">Country Music Festival Vinstra</h2>
      {plass ? (
        <p className="mx-auto font-medium">Valgt plass: {plass}</p>
      ) : (
        <p className="mx-auto font-medium pb-2">
          Trykk på kartet under for å velge ønsket plass
        </p>
      )}
      <div className={``}>
        <MapContainer
          center={[centerOne, centerTwo]}
          zoom={0}
          scrollWheelZoom={true}
          crs={L.CRS.Simple}
          maxBounds={bounds}
        >
          <ImageOverlay url={"/images/kart.png"} bounds={bounds} />

          {/* RENDER FIELD D */}
          {fields.fieldD.map((rectangle, index) => (
            <Rectangle
              bounds={rectangle.bounds}
              key={index}
              pathOptions={{
                color:
                  field.value === rectangle.id ? "limegreen" : "cornflowerblue",
                fillColor:
                  field.value === rectangle.id ? "limegreen" : "transparent",
                fillOpacity: 0.75,
              }}
              eventHandlers={{
                click: () => onClick(rectangle.id),
              }}
            />
          ))}
        </MapContainer>
        {field.value && (
          <p className="mx-auto font-medium text-center pt-2">
            Valgt plass: <span className="font-bold">{field.value}</span>
          </p>
        )}
      </div>
    </>
  );
}
