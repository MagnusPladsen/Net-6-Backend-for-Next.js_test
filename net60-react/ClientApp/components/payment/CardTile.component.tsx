import { motion } from "framer-motion";
import FormInput from "../form/input/FormInput.component";

export default function CardTile() {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg "
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        visible: { opacity: 1, scale: 1, y: ["-150%", "5%", "0%"], height: "auto" },
        hidden: { opacity: 0, scale: 1, y: "-150%", height: 0 },
      }}
      transition={{ duration: 0.7 }}
    >
      <FormInput name="cardHolder" type="text" label="Kortinnehaver" />
      <FormInput name="cardNumber" type="number" label="Kortnummer" />
      <div className="flex gap-10">
        <div className="w-1/2">
          <FormInput name="cardExpiry" type="number" label="Utløpsdato" />
        </div>
        <div className="w-1/2">
          <FormInput name="cardCVC" type="number" label="CVC" />
        </div>
      </div>
    </motion.div>
  );
}
