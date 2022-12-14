import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import checkedIcon from "../../public/images/icons/checkedIcon.svg";
import uncheckedIcon from "../../public/images/icons/uncheckedIcon.svg";

export default function CheckMark({
  handleOpen,
  type,
  open,
}: {
  handleOpen: (type: string) => void;
  type: string;
  open: boolean;
}) {
  const [icon, setIcon] = useState(uncheckedIcon);

  return (
    <>
      <motion.div
        className="h-10 w-10 flex content-center justify-center"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image
          src={!open ? uncheckedIcon : checkedIcon}
          height="20px"
          width="20px"
          alt="checkmark"
        />
      </motion.div>
    </>
  );
}
