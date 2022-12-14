import { Artist } from "../../model/models";
import { ArtistsInView } from "./DragSlideCarousel.component";

export default function CarouselSteps({
  artist,
  artistsInView,
  index,
}: {
  artist: Artist;
  artistsInView: ArtistsInView[];
  index: number;
}) {
  return (
    <>
      <div
        key={artist.id}
        className={`h-2 w-2 rounded-full border border-primary transition-all md:my-8 2xl:mt-[7vw] ${
          artistsInView[index].inView ? "bg-primary" : "bg-white"
        }
             `}
      ></div>
    </>
  );
}
