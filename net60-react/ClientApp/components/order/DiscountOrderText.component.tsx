import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { DiscountCodes } from "../../pages/order/tickets/[id]";
import Input from "../form/input/Input.component";
import OrderLine from "./OrderLine.component";

export const discountCodes: DiscountCodes = {
  test10: 10,
  test20: 20,
  test50: 50,
};

export default function DiscountOrderText({
  discount,
  setDiscount,
  mobileOpen,
  totalSum,
}: {
  discount: number;
  setDiscount: (value: number) => void;
  mobileOpen: boolean;
  totalSum: number;
}) {
  const [discountCode, setDiscountCode] = useState("");
  const [discountInput, setDiscountInput] = useState("");
  const [discountError, setDiscountError] = useState(false);

  const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const discountCode = e.target.value;
    setDiscountInput(discountCode);
    if (discountCode in discountCodes) {
      setDiscountCode(discountCode);
    } else {
      setDiscountCode("");
      setDiscountError(false);
    }
  };

  const handleSubmitDiscount = () => {
    if (discountInput.length > 0) {
      if (discountCode in discountCodes) {
        setDiscountError(false);
        setDiscount(discountCodes[discountCode]);
      } else {
        setDiscountError(true);
        setDiscount(0);
      }
    }
  };

  const firstLetterToUpperCase = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={`${mobileOpen ? "block" : "hidden"} lg:block`}>
      <OrderLine />
      <div className="w-full flex justify-between">
        <Input
          type="text"
          placeholder="Rabattkode"
          onChange={handleDiscount}
          handleSubmitDiscount={handleSubmitDiscount}
          error={discountError}
        />
        <motion.button
          whileHover={{ scale: discountCode ? 1.1 : 1 }}
          whileTap={{ scale: discountCode ? 0.9 : 1 }}
          className={`${
            discountInput.length > 0
              ? "bg-secondary text-white hover:opacity-70"
              : "bg-gray-300 text-gray-500 hover: cursor-default"
          } w-32 ml-4  h-11 rounded-lg font-roboto font-bold drop-shadow-default`}
          type="submit"
          onClick={handleSubmitDiscount}
        >
          Bruk
        </motion.button>
      </div>
      {discountError && <p className="text-red-500 mt-2">Ugyldig rabattkode</p>}
      <OrderLine />
      <AnimatePresence initial={false}>
        {discount > 0 && (
          <motion.div
            className="w-full group hover:cursor-pointer"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, x: ["-150%", "5%", "0%"] },
              hidden: { opacity: 0, scale: 1, x: "-150%" },
            }}
            transition={{ duration: 0.7 }}
            onClick={() => setDiscount(0)}
          >
            <div className="w-full flex mt-2 justify-between font-nunito">
              <p>Rabattkode: <span className="font-bold">{firstLetterToUpperCase(discountCode)}</span></p>
              <div className="flex gap-3 content-center">
                <p className="float-right font-bold">-{discount}%</p>

                <div
                  className="hover:opacity-70 text-red-500 lg:hidden group-hover:block text-base my-auto"
                >
                  Fjern
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
