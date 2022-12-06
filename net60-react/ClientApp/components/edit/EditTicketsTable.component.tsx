import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useGetTicketsQuery } from "../../api/apiSlice";
import PrimaryButton from "../buttons/Button.component";
import { Ticket } from "../model/models";
import EditTicketModule from "./EditTicketModule.component";
import NewTicketModule from "./NewTicketModule.component";

export default function EditTicketsTable({
  nameRowStyle,
  descRowStyle,
  priceRowStyle,
  dateRowStyle,
  modalOpen,
  setModalOpen,
}: {
  nameRowStyle: string;
  descRowStyle: string;
  priceRowStyle: string;
  dateRowStyle: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    data: tickets,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTicketsQuery("");

  return (
    <>
      {isSuccess
        ? tickets.map((ticket: Ticket) => (
            <div
              key={ticket.id}
              className="flex hover:text-primary py-1 odd:bg-primary-light border rounded"
            >
              <EditTicketModule
                ticketId={ticket.id}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
              >
                <motion.div
                  whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.2 },
                  }}
                  className={"flex py-2 pl-1 hover:cursor-pointer "}
                >
                  <p className={`${nameRowStyle} `}>{ticket.name}</p>

                  <p className={`${descRowStyle} `}>{ticket.description}</p>
                  <div className={`${priceRowStyle} text-right flex gap-1`}>
                    <span className="">kr</span>
                    <p className="">{ticket.price}</p>
                  </div>
                  <p className={`${dateRowStyle} `}>01.01.23</p>
                  <p className={`${dateRowStyle} `}>05.01.23</p>
                </motion.div>
              </EditTicketModule>
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                className="mx-4 flex items-center justify-center hover:cursor-pointer"
              >
                <Image
                  src="/images/icons/deleteIcon.svg"
                  width={25}
                  height={25}
                  onClick={() => ""}
                  alt="pencil icon"
                />
              </motion.div>
            </div>
          ))
        : null}

      <div className="flex justify-end mt-12 my-4">
        <NewTicketModule modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <PrimaryButton
            text="Ny billett"
            onClick={() => ""}
            primary={true}
            disabled={false}
          />
        </NewTicketModule>
      </div>
    </>
  );
}
