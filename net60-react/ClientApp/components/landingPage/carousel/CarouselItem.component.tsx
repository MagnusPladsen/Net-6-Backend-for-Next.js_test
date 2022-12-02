import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Artist } from "../../model/models";

export default function CarouselItem({
  artist,
  toggleArtistInView,
}: {
  artist: Artist;
  toggleArtistInView: (artistId: string, inView: boolean) => void;
}) {
  const inViewRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const isInView = useInView(inViewRef);

  useEffect(() => {
    toggleArtistInView(artist.id, isInView);
  }, [isInView]);
  // Change the array? ESlint says artist.id and toggleArtistInView missing in the dependency array, but the site bugges out if I add them.

  return (
    <motion.div
      className={`rounded-lg drop-shadow-default pointer-events-none min-w-[80vw] lg:h-[60vh] lg:min-w-[50vw] xl:h-[30vh] xl:min-w-[30vw] transition-all
      } `}
      transition={{ duration: 0.2 }}
      ref={inViewRef}
    >
      <Image
        src={artist.image}
/*         layout="fill" */
        alt={artist.name}
        width={1000}
        height={600}
        className="rounded-lg object-cover"
      />

      <p className="text-xl group-hover:text-secondary text-white font-roboto font-black tracking-wider absolute bg-black bg-opacity-50 py-2 pr-2 pl-4 bottom-8">
        {artist.name.toUpperCase()}
      </p>
    </motion.div>
  );
}
