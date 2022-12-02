import { useField } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { TICKETS } from "../../pages/order/tickets/[id]";

export default function TicketOrderText({
  name,
  quantity,
  setStepIndex,
}: {
  name: string;
  quantity: number;
  setStepIndex: (index: number) => void;
}) {

  return (
    <AnimatePresence initial={false}>
      {quantity > 0 && (
        <motion.div
          className="w-full flex justify-between items-center mt-4 hover:text-secondary hover:opacity-70 hover:cursor-pointer"
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
          <p>{`${quantity} x ${TICKETS[name].name}`}</p>
          <p className="float-right font-bold">
            {TICKETS[name].price * quantity},-
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
