import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Artist } from "../../model/models";
import CarouselControls from "./CarouselControls.component";
import CarouselItem from "./CarouselItem.component";
import CarouselSteps from "./CarouselSteps.component";

export interface ArtistsInView {
  artistId: string;
  inView: boolean;
}

export default function DragSlideCarousel({ artists }: { artists: Artist[] }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [artistsInView, setArtistsInView] = useState<ArtistsInView[]>([]);

  const controls = useAnimation();

  artists.map((artist) => {
    if (
      !artistsInView.find(
        (artistsInView) => artistsInView.artistId === artist.id
      )
    ) {
      setArtistsInView([
        ...artistsInView,
        { artistId: artist.id, inView: true },
      ]);
    }
  });

  const toggleArtistInView = (artistId: string, inView: boolean) => {
    let newArtistInView = artistsInView.map((artist) => {
      if (artist.artistId === artistId) {
        return { artistId: artistId, inView: inView };
      } else {
        return artist;
      }
    });
    setArtistsInView(newArtistInView);
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      className="overflow-hidden cursor-grab pb-5 md:pb-0"
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
    >
      <CarouselControls
        controls={controls}
        width={width}
        artistsLength={artists.length}
      />

      <motion.div
        drag="x"
        dragConstraints={{ left: -width, right: 0 }}
        initial={{ x: 0 }}
        className="flex gap-8 pt-10 pb-6 justify-around w-fit px-4 lg:px-8"
        dragElastic={0.2}
        animate={controls}
      >
        {artists.map((artist) => (
          <CarouselItem
            artist={artist}
            key={artist.id}
            toggleArtistInView={toggleArtistInView}
          />
        ))}
      </motion.div>
      <div className="mx-auto flex flex-row-reverse w-fit gap-2 justify-around">
        {/* Flex row reverse so that the index matches the order of the carousel items */}
        {artists.map((artist, index) => (
          <CarouselSteps
            artist={artist}
            artistsInView={artistsInView}
            index={index}
            key={artist.id}
          />
        ))}
      </div>
    </motion.div>
  );
}
