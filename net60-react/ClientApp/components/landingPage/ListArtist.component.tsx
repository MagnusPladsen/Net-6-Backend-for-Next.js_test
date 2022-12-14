import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import MinusIcon from "../icons/MinusIcon.component";
import PlusIcon from "../icons/PlusIcon.component";
import { Artist, Program } from "../model/models";
import Tile from "../tiles/Tile.component";

export default function ListArtist({
  artist,
  program,
  eventId,
}: {
  artist: Artist;
  program: Program;
  eventId: string;
}) {
  const [open, setOpen] = React.useState(false);

  const getStartOfDescription = () => {
    return artist.description.substring(0, 60) + "...";
  };
  return (
    <Tile
      onClick={() => setOpen(!open)}
      scaleOnHover={true}
      className="hover:cursor-pointer group"
    >
      <motion.div className="relative">
        <div className="">
          <h2 className="font-bold text-xl mb-4 text-primary group-hover:text-secondary">
            {artist.name}
          </h2>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className="hover:cursor-pointer hover:bg-pink-200 pb-1 pt-2 px-3 rounded-full absolute top-0 right-0 text-right "
            onClick={() => setOpen(open ? false : true)}
          >
            {open ? (
              <MinusIcon width="15" height="15" />
            ) : (
              <PlusIcon width="15" height="15" />
            )}
          </motion.div>
          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { opacity: 1, height: "auto" },
                  hidden: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-3 pb-8 md:pb-0"
              >
                <p className="mb-3 text-sm md:text-base">
                  {artist.description}
                </p>
                <h3 className="font-bold text-sm md:text-base">Opptredener:</h3>
                <div className="flex justify-between md:justify-start md:gap-3">
                  <div className="flex flex-col gap-2 md:gap-0 text-sm">
                    {program.happenings
                      .filter((h) => h.artistId === artist.id)
                      .map((h) => (
                        <p key={artist.id + "-" + h.startDate + "- date"}>
                          {h.startDate.toLocaleDateString("no-NO", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "2-digit",
                          })}
                        </p>
                      ))}
                  </div>
                  <div className="flex flex-col gap-2 md:gap-0 text-sm">
                    {program.happenings
                      .filter((h) => h.artistId === artist.id)
                      .map((h) => (
                        <p key={artist.id + "-" + h.startDate + "- time"}>
                          {h.startDate.toLocaleTimeString("no-NO", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      ))}
                  </div>
                  <div className="flex flex-col gap-2 md:gap-0 text-sm">
                    {program.happenings
                      .filter((h) => h.artistId === artist.id)
                      .map((h) => (
                        <p key={artist.id + "-" + h.startDate + "- scene"}>
                          {program.scenes
                            .filter((scene) => scene.id === h.sceneId)
                            .map((scene) => scene.name)}
                        </p>
                      ))}
                  </div>
                </div>
                <Link href={`/order/tickets/${eventId}`}>
                  <motion.a
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="text-secondary text-sm underline font-roboto font-bold hover:opacity-70 hover:cursor-pointer w-fit md:absolute md:right-2 md:bottom-0 relative -bottom-4"
                  >
                    Bestill billetter
                  </motion.a>
                </Link>
              </motion.div>
            ) : null}
          </AnimatePresence>
          {!open ? (
            <motion.p className="text-sm mt-4 max-w-[60vw]">
              {getStartOfDescription()}
            </motion.p>
          ) : null}
        </div>
        <div
          className={`absolute bottom-8 right-8 text-right text-sm text-secondary md:block ${
            open ? "" : "hidden"
          } `}
        ></div>
      </motion.div>
    </Tile>
  );
}
