import { useField } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import L, { LatLngBoundsExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import {
  FeatureGroup,
  ImageOverlay,
  MapContainer,
  Rectangle,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import PrimaryButton from "../buttons/Button.component";
import Tile from "../tiles/Tile.component";
import EditHeader from "./EditHeader.component";

interface rectangle {
  name: string;
  bounds: LatLngBoundsExpression;
  id: string;
  color: string;
  available: boolean;
}

export default function EditMapLeaflet({
  name,
  editMap,
  setEditMap,
}: {
  name: string;
  editMap: boolean;
  setEditMap: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [field, meta, helpers] = useField(name);

  const [Yamt, setYamt] = useState(5);
  const [Xamt, setXamt] = useState(5);
  const [fieldLetter, setFieldLetter] = useState("A");

  const bounds: LatLngBoundsExpression = [
    // bounds for the map
    [0, 0],
    [450, 550],
  ];

  const centerOne = Number(bounds[1].slice(0, 1)) / 2;
  const centerTwo = Number(bounds[1].slice(1, 2)) / 2;

  const mapContainer = document.querySelector(
    ".leaflet-container"
  ) as HTMLDivElement;

  const [rectangles, setRectangles] = useState<rectangle[]>(field.value);

  // RENDERING NEW RECTANGLES ON CLICK
  const createRectangles = (
    startPoint: { x: number; y: number },
    endPoint: { x: number; y: number }
  ) => {
    const xLength = Math.abs(startPoint.x - endPoint.x) / Yamt;
    const yLength = Math.abs(startPoint.y - endPoint.y) / Xamt;
    const newField: rectangle[] = [];
    let id = 0;
    for (let i = 0; i < Yamt; i++) {
      for (let j = 0; j < Xamt; j++) {
        newField.push({
          name: `Plass ${i}${j}`,
          bounds: [
            [startPoint.x + i * xLength, startPoint.y + j * yLength],
            [
              startPoint.x + (i + 1) * xLength,
              startPoint.y + (j + 1) * yLength,
            ],
          ],
          id: `${fieldLetter}${id++}`,
          color: "cyan",
          available: true,
        });
      }
    }
    newField.map((rect, key) => {
      setRectangles((prev) => [...prev, rect]);
    });
  };

  // RENDERING NEW RECTANGLES AFTER SELECTED AREA
  const handleNewArea = (e: any) => {
    const bounds = e.layer._bounds;
    const neLat = bounds._northEast.lat;
    const neLng = bounds._northEast.lng;
    const swLat = bounds._southWest.lat;
    const swLng = bounds._southWest.lng;
    e.layer.remove();
    createRectangles({ x: swLat, y: swLng }, { x: neLat, y: neLng });
  };

  const spanStyle = "font-bold text-secondary";

  return (
    <Tile scaleOnHover={!editMap}>
      <div>
        <EditHeader text="Kart" open={editMap} setOpen={setEditMap} />
        <AnimatePresence initial={false}>
          {editMap ? (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  height: "auto",
                },
                hidden: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-10 mt-6"
            >
              <div className="flex-grow">
                <MapContainer
                  center={[centerOne, centerTwo]}
                  zoom={0}
                  scrollWheelZoom={true}
                  crs={L.CRS.Simple}
                  maxBounds={bounds}
                >
                  <FeatureGroup>
                    <EditControl
                      key={`${Xamt}-${Yamt}-${fieldLetter}`}
                      position="topright"
                      draw={{
                        circle: false,
                        circlemarker: false,
                        marker: false,
                        polyline: false,
                        polygon: false,
                        rectangle: true,
                      }}
                      onCreated={handleNewArea}
                    />
                    {rectangles.map((rectangle, key) => (
                      <Rectangle key={key} bounds={rectangle.bounds} />
                    ))}
                  </FeatureGroup>
                  <ImageOverlay url="/images/kart.png" bounds={bounds} />
                </MapContainer>
              </div>
              <div className="flex flex-col justify-center gap-10">
                <div className="flex gap-10 mx-auto">
                  <div className="flex flex-col">
                    <label className="text-primary">Vertikalt</label>
                    <input
                      type="number"
                      className="w-20 text-center hover:text-secondary"
                      onChange={(e) => setYamt(Number(e.target.value))}
                      value={Yamt ? Yamt : ""}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-primary">Horisontalt</label>
                    <input
                      type="number"
                      className="w-20 text-center hover:text-secondary"
                      onChange={(e) => setXamt(Number(e.target.value))}
                      value={Xamt ? Xamt : ""}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-primary">Felt bokstav</label>
                    <input
                      type="text"
                      className="w-20 text-center hover:text-secondary"
                      onChange={(e) => setFieldLetter(e.target.value)}
                      value={fieldLetter}
                    />
                  </div>
                </div>
                <p className="text-center font-medium">
                  Start med å velge hvor mange plasser det skal være{" "}
                  <span className={`${spanStyle}`}>vertikalt</span> og{" "}
                  <span className={`${spanStyle}`}>horisontalt</span>, deretter
                  velg <span className={`${spanStyle}`}>felt bokstav</span>.
                </p>
                <p className="text-center font-medium">
                  Velg <span className={`${spanStyle}`}>firkanten</span> på
                  høyre siden av kartet og lag områder ved å dra musepekeren
                  over kartet.
                </p>
                <p className="text-center font-medium">
                  Deretter velg{" "}
                  <span className={`${spanStyle}`}>søppelkassen</span> om du
                  trenger å slette plasser.
                </p>

                <div className="flex justify-end my-4">
                  <PrimaryButton
                    text="Lagre"
                    onClick={() => helpers.setValue(rectangles)}
                    primary={true}
                    disabled={false}
                  />
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </Tile>
  );
}
