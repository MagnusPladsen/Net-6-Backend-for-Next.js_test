import { motion } from "framer-motion";
import React from "react";
import MinusIcon from "../icons/MinusIcon.component";
import PlusIcon from "../icons/PlusIcon.component";

export default function EditHeader({
  text,
  open,
  setOpen,
}: {
  text: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="flex justify-between mt-2">
        <h2 className="text-2xl text-primary">{text}</h2>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          className="text-primary px-4 text-4xl hover:cursor-pointer hover:bg-pink-200 rounded-full"
          onClick={() => setOpen(open ? false : true)}
        >
          {open ? (
            <MinusIcon width="20" height="20" />
          ) : (
            <PlusIcon width="20" height="20" />
          )}
        </motion.div>
      </div>
    </>
  );
}
