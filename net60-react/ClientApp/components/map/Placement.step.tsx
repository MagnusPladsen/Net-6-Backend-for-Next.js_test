import { useField } from "formik";
import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";
import RenderError from "../messages/RenderError.component";
import Tile from "../tiles/Tile.component";

const MapLeaflet = dynamic(
  () => import("./MapLeaflet"),
  { ssr: false }
);
//Disable server side rendering for MapLeaflet

export default function PlacementStep({ name }: { name: string }) {
  const [field, meta, helpers] = useField(name);

  useEffect(() => {
    window.scrollTo(0, 90);
  }, []);

  const isError = useMemo(() => !!meta.error && !!meta.touched, [meta]);

  return (
    <Tile error={isError && !!meta.error} className="group">
      <div className="flex flex-col w-full ">
        <div className="w-full">
          <MapLeaflet name={name} />
        </div>
        {isError && !!meta.error && (
          <div className="mt-4 text-center">
            <RenderError message={meta.error!} />
          </div>
        )}
      </div>
    </Tile>
  );
}
