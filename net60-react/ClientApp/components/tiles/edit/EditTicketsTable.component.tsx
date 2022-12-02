import { useField } from "formik";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import PrimaryButton from "../../buttons/Button.component";
import EditTicketModule from "./EditTicketModule.component";

export default function EditTicketsTable({
  name,
  nameRowStyle,
  descRowStyle,
  priceRowStyle,
  dateRowStyle,
  modalOpen,
  setModalOpen,
}: {
  name: string;
  nameRowStyle: string;
  descRowStyle: string;
  priceRowStyle: string;
  dateRowStyle: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [field, meta, helpers] = useField(name);

  const onChangeEditTickets = (
    e: React.ChangeEvent<HTMLInputElement>,
    ticketName: string
  ) => {
    /* debugger */
    const type = e.target.name;
    const value = e.target.value;
    helpers.setValue({
      ...field.value,
      [ticketName]: { ...field.value[ticketName], [type]: value },
    });
  };

  const handleRemoveTicket = (ticket: string) => {
    const newTickets = { ...field.value };
    delete newTickets[ticket];
    helpers.setValue(newTickets);
  };

  const handleAddTicket = () => {
    const lastTicket = Object.keys(field.value).pop();
    const ticketNumber = lastTicket?.replace(/[^0-9]/g, "");
    const newTicket = `ticket${Number(ticketNumber) + 1}`;
    helpers.setValue({
      ...field.value,
      [newTicket]: {
        name: "Ny billett",
        price: 0,
        description: "Ny billett",
      },
    });
  };

  return (
    <>
      {Object.keys(field.value).map((ticket) => (
        <div
          key={ticket}
          className="flex hover:text-primary py-1 odd:bg-primary-light border rounded"
        >
          <EditTicketModule
            field={field}
            ticket={ticket}
            onChangeEditTickets={onChangeEditTickets}
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
              <p className={`${nameRowStyle} `}>{field.value[ticket].name}</p>

              <p className={`${descRowStyle} `}>
                {field.value[ticket].description}
              </p>
              <div className={`${priceRowStyle} text-right flex gap-1`}>
                <span className="">kr</span>
                <p className="">{field.value[ticket].price}</p>
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
              onClick={() => handleRemoveTicket(ticket)}
              alt="pencil icon"
            />
          </motion.div>
        </div>
      ))}

      <div className="flex justify-end mt-12 my-4">
        <PrimaryButton
          text="Ny billett"
          onClick={handleAddTicket}
          primary={true}
          disabled={false}
        />
      </div>
    </>
  );
}
