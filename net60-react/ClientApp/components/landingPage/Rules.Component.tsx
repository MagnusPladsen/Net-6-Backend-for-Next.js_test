import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import MinusIcon from "../icons/MinusIcon.component";
import PlusIcon from "../icons/PlusIcon.component";
import Tile from "../tiles/Tile.component";

export default function Rules({
  rules,
}: {
  rules: {
    [key: string]: string;
  };
}) {
  const spanStyle = "font-bold ";
  const headingStyle = " pb-1 font-bold";
  const articleStyle = "mb-6";
  const [open, setOpen] = React.useState(false);
  return (
    <Tile
      className="group hover:cursor-pointer"
      scaleOnHover={true}
      onClick={() => setOpen(!open)}
    >
      <div className="relative">
        <h2 className="text-primary group-hover:text-secondary text-left text-xl font-bold mb-6 ">
          Regelverk
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
                visible: {
                  opacity: 1,
                  height: "auto",
                },
                hidden: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.7 }}
            >
              {Object.keys(rules).map((ruleHeader) => (
                <div key={ruleHeader} className={articleStyle}>
                  <h3 className={headingStyle}>{ruleHeader}</h3>
                  <p>{rules[ruleHeader]}</p>
                </div>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
        {open ? (
          ""
        ) : (
          <>
            <h3 className="text-sm ">
              Vi anbefaler at du leser igjennom regelverket før du bestiller
              billetter
            </h3>
          </>
        )}
      </div>
    </Tile>
  );
}
