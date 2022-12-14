import { useField } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Tickets } from "../../pages/order/tickets/[id]";
import Tile from "../tiles/Tile.component";
import EditHeader from "./EditHeader.component";
import EditTicketsTable from "./EditTicketsTable.component";

export default function EditTickets({
  name,
  editTickets,
  setEditTickets,
  modalOpen,
  setModalOpen,
}: {
  name: string;
  editTickets: boolean;
  setEditTickets: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [field, meta, helpers] = useField(name);

  const rowSpacing = "pl-6";
  const nameRowStyle = `w-[20vw] + ${rowSpacing}`;
  const descRowStyle = `w-[26vw] + ${rowSpacing}`;
  const priceRowStyle = `w-[6vw] + ${rowSpacing}`;
  const dateRowStyle = `w-[8vw] + ${rowSpacing}`;

  return (
    <Tile scaleOnHover={!editTickets}>
      <div>
        <EditHeader
          text="Billetter"
          open={editTickets}
          setOpen={setEditTickets}
        />
        <AnimatePresence initial={false}>
          {editTickets ? (
            <motion.div
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  height: "auto",
                },
                hidden: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="flex flex-col mt-6 gap-0"
            >
              <div className="flex py-3 pl-1 bg-primary text-white rounded">
                <label className={`${nameRowStyle} font-roboto`}>Navn</label>
                <label className={`${descRowStyle} font-roboto`}>
                  Beskrivelse
                </label>
                <label className={`${priceRowStyle} font-roboto`}>Pris</label>
                <label className={`${dateRowStyle} font-roboto`}>
                  Dato fra
                </label>
                <label className={`${dateRowStyle} font-roboto`}>
                  Dato til
                </label>
              </div>
              <EditTicketsTable
                nameRowStyle={nameRowStyle}
                descRowStyle={descRowStyle}
                priceRowStyle={priceRowStyle}
                dateRowStyle={dateRowStyle}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </Tile>
  );
}
