import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import cardIcon from "../../public/images/icons/cardIcon.svg";
import invoiceIcon from "../../public/images/icons/invoiceIcon.svg";
import CheckMark from "../buttons/CheckMark.component";
import CardTile from "./CardTile.component";
import InvoiceTile from "./InvoiceTile.component";

export default function PaymentTile({
  type,
  open,
  handleOpen,
}: {
  type: string;
  open: boolean;
  handleOpen: (type: string) => void;
}) {
  return (
    <div className="mt-2 mb-8 drop-shadow-default w-full">
      <motion.div
        whileHover={{ border: "1px solid #DC1C83", scale: !open? 1.05 : 1 }}
        className={`${
          open ? "bg-secondary-light" : "bg-white"
        } rounded-lg border border-border  `}
        onClick={() => handleOpen(type)}
      >
        <div className="flex gap-5 items-center p-8">
          <div className="">
            <Image
              src={type === "card" ? cardIcon : invoiceIcon}
              height="35px"
              width="50px"
              alt="payment icon"
            />
          </div>
          <div className="flex-col flex-1">
            <p className="font-bold">{type === "card" ? "Kort" : "Faktura"}</p>
            <p className="text-xs">
              {type === "card" ? "Betaling med kort" : "Betaling med faktura"}
            </p>
          </div>
          <div className="flex content-center">
            <CheckMark type={type} handleOpen={handleOpen} open={open} />
          </div>
        </div>
        <div className="">
          <AnimatePresence initial={false}>
            {open && type === "card" && <CardTile />}
            {open && type === "invoice" && <InvoiceTile />}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
