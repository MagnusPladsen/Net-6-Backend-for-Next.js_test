import { motion } from "framer-motion";
import MinusIcon from "../icons/MinusIcon.component";
import PlusIcon from "../icons/PlusIcon.component";

export default function SelectAmount({
  count,
  handleDecrement,
  handleIncrement,
}: {
  count: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
}) {
  return (
    <div className="flex ">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="grid place-items-center px-2.5 w-[44px] h-[44px] hover:bg-pink-200 rounded-full hover:cursor-pointer"
        onClick={handleDecrement}
      >
        <MinusIcon height="2px" width="12px" />
      </motion.div>
      <div className="grid place-items-center px-2.5">
        <p className="text-4xl text-black font-roboto">{count}</p>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="grid place-items-center px-2.5 w-[44px] h-[44px] hover:bg-pink-200 rounded-full hover:cursor-pointer"
        onClick={handleIncrement}
      >
        <PlusIcon height="12px" width="12px" />
      </motion.div>
    </div>
  );
}
