import { motion } from "framer-motion";

export default function SumOrderText({
  totalSum,
  tekst,
  setFieldValue,
}: {
  totalSum: number;
  tekst: string;
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
}) {
  return (
    <motion.div
      className="w-full flex justify-between font-nunito mt-20"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        visible: { opacity: 1, scale: 1, x: ["-150%", "5%", "0%"] },
        hidden: { opacity: 0, scale: 1, x: "-150%" },
      }}
      transition={{ duration: 0.7 }}
    >
      <p className="font-semibold pt-2">{tekst}:</p>
      <p className="float-right font-bold text-3xl">{totalSum},-</p>
    </motion.div>
  );
}
