import { motion } from "framer-motion";
import FormInput from "../form/input/FormInput.component";

export default function InvoiceTile() {
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
      <FormInput name="invoiceName" type="text" label="Faktura navn" />
      <FormInput name="invoiceEmail" type="email" label="Faktura epost" />
    </motion.div>
  );
}
