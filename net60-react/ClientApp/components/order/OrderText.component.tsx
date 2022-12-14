import { motion } from "framer-motion";

export default function OrderText({
  placementId,
  tekst,
  setStepIndex,
}: {
  placementId: string;
  tekst: string;
  setStepIndex: (index: number) => void;
}) {
  return (
    <motion.div
      className="w-full flex justify-between mt-4 hover:text-secondary hover:cursor-pointer"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        visible: { opacity: 1, scale: 1, x: ["-150%", "5%", "0%"] },
        hidden: { opacity: 0, scale: 1, x: "-150%" },
      }}
      transition={{ duration: 0.7 }}
      onClick={() => setStepIndex(1)}
    >
      <p>{tekst}:</p>
      <p className="float-right font-nunito font-bold ">Plass {placementId}</p>
    </motion.div>
  );
}
