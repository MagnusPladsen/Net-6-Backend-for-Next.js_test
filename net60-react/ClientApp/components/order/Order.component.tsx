import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Concert, TICKETS } from "../../pages/order/tickets/[id]";
import DateOrderText from "./DateOrderText.component";
import DiscountOrderText from "./DiscountOrderText.component";
import OrderLine from "./OrderLine.component";
import OrderText from "./OrderText.component";
import SumOrderText from "./SumOrderText.component";
import TicketOrderText from "./TicketOrderText.component";

export default function Order({
  tickets,
  dateRange,
  placementId,
  setFieldValue,
  concert,
  setStepIndex,
  mobileOpen,
  setMobileOpen,
}: {
  tickets: { [key: string]: number };
  dateRange: any;
  placementId: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  concert: Concert;
  setStepIndex: (index: number) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}) {
  const [discount, setDiscount] = useState(0);

  const totalSum = useMemo(() => {
    return (
      ((100 - discount) *
        Object.entries(tickets).reduce((acc, [ticketId, quantity]) => {
          return acc + quantity * TICKETS[ticketId].price;
        }, 0)) /
      100
    );
  }, [tickets, discount]);

  return (
    <div className=" ">
      <div
        onClick={() => setMobileOpen(!mobileOpen)}
        className={`w-[90%] md:w-[80%] mx-auto h-12  lg:hidden flex items-center justify-between`}
      >
        <div className="flex gap-2 items-center">
          <p className="lg:hidden font-roboto text-xl font-semibold text-secondary">
            {mobileOpen ? "Skjul bestilling" : "Vis bestilling"}
          </p>
          <motion.div
            animate={{
              rotate: mobileOpen ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
            className=""
          >
            <Image
              src="/images/icons/downArrow.svg"
              height="15px"
              width="15px"
              alt="arrow"
            />
          </motion.div>
        </div>
        <p className="font-bold font-roboto text-xl ">
          {totalSum > 0 ? totalSum + ",-" : ""}
        </p>
      </div>
      <div className={`${mobileOpen ? "block" : "hidden"} lg:hidden`}>
        <OrderLine />
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            visible: { opacity: 1, scale: 1, y: ["-100%", "5%", "0%"] },
            hidden: { opacity: 0, scale: 1, y: "-100%" },
          }}
          transition={{ duration: 0.7 }}
          className={`${
            mobileOpen ? "block" : "hidden"
          } w-[90%] md:w-[80%] mx-auto py-2  lg:py-0 lg:w-full lg:block`}
        >
          <div className={`hidden absolute lg:block right-0 top-4 lg:-top-12`}>
            <Image
              src={concert.image}
              width="80px"
              height="80px"
              alt="Image of concert"
            />
          </div>
          <h1
            className={`${
              mobileOpen ? "block" : "hidden"
            } font-bold lg:block font-roboto text-xl text-left text-primary`}
          >
            Handlekurv
          </h1>
          <div className={`${mobileOpen ? "block" : "hidden"} lg:block`}>
            <OrderLine />
          </div>
          <h2
            className={` ${
              mobileOpen ? "block" : "hidden"
            } lg:block font-nunito font-bold`}
          >
            {concert.name}
          </h2>

          {
            <div
              className={`${
                mobileOpen ? "block" : "hidden"
              } lg:block w-full mt-2`}
            >
              {Object.keys(tickets).map((ticket) => (
                <TicketOrderText
                  name={ticket}
                  key={ticket}
                  quantity={tickets[ticket]}
                  setStepIndex={setStepIndex}
                />
              ))}
            </div>
          }

          {dateRange && (
            <DateOrderText
              from={dateRange.startDate}
              to={dateRange.endDate}
              setStepIndex={setStepIndex}
            />
          )}

          {placementId && (
            <OrderText
              placementId={placementId}
              tekst="Valgt plassering"
              setStepIndex={setStepIndex}
            />
          )}

          <DiscountOrderText
            discount={discount}
            setDiscount={setDiscount}
            mobileOpen={mobileOpen}
            totalSum={totalSum}
          />

          {!!totalSum && (
            <motion.div
            className="pb-4 md:pb-4 lg:pb-0"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { opacity: 1, scale: 1, x: ["-150%", "5%", "0%"] },
                hidden: { opacity: 0, scale: 1, x: "-150%" },
              }}
              transition={{ duration: 0.7 }}
            >
              <SumOrderText totalSum={totalSum} tekst="Totalt" />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
