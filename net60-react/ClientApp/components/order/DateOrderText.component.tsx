import { motion } from "framer-motion";

export default function DateOrderText({
  from,
  to,
  setStepIndex,
}: {
  from: Date;
  to: Date;
  setStepIndex: (index: number) => void;
}) {
  return (
    <motion.div
      className="w-full flex justify-between mt-4 hover:text-secondary hover:opacity-70 hover:cursor-pointer"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        visible: { opacity: 1, scale: 1, x: ["-150%", "5%", "0%"] },
        hidden: { opacity: 0, scale: 1, x: "-150%" },
      }}
      transition={{ duration: 0.7 }}
      onClick={() => setStepIndex(0)}
    >
      <p>Valgt dato:</p>
      <p className="float-right font-bold">
        {from.toLocaleDateString("no-NO")} - {to.toLocaleDateString("no-NO")}
      </p>
    </motion.div>
  );
}
