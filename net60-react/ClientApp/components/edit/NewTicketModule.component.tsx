import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { useAddNewTicketMutation } from "../../api/apiSlice";
import RenderError from "../messages/RenderError.component";
import { Ticket } from "../model/models";
import ShowField from "./ShowField.component";
//https://mui.com/material-ui/react-dialog/

export default function NewTicketModule({
  children,
  modalOpen,
  setModalOpen,
}: {
  children: React.ReactNode;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState(1);
  const [icon, setIcon] = React.useState("/images/icons/ticketIcon.svg");

  const handleClickOpen = () => {
    setOpen(true); // for blurring the background
    setModalOpen(true);
  };

  const handleClose = () => {
    setOpen(false); // for blurring the background
    setModalOpen(false);
  };

  const [addNewTicket, { isLoading, isError }] = useAddNewTicketMutation();

  const canSave = [name, description, price, icon].every(Boolean) && !isLoading;

  const handleSaveTicket = async () => {
    if (canSave) {
      try {
        console.log({ name, description, price, icon });
        await addNewTicket({ name, price, description, icon }).unwrap();
        handleClose();
      } catch (err) {
        console.error("Failed to save the ticket: ", err);
      }
    }
  };

  return (
    <div className="w-full">
      <div
        onClick={handleClickOpen}
        className="text-left text-black hover:text-secondary"
      >
        {children}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-primary ">Rediger ny billett</DialogTitle>
        <DialogContent>
          <div className={`flex flex-col`}>
            <div className="flex flex-col">
              <label className="">Navn</label>
              <input
                type="text"
                name="name"
                className={`w-[35vw] font-nunito mt-2 mb-6 mr-2 px-4`}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="">Beskrivelse</label>
              <input
                type="text"
                name="description"
                className={`w-[35vw] font-nunito mt-2 mb-6 px-4 `}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="">Pris</label>
              <input
                type="number"
                name="price"
                step="50"
                className={`w-[35vw] font-nunito mt-2 mb-6 px-4`}
                onChange={(e) => setPrice(e.target.valueAsNumber)}
              />
            </div>
            {isError && <RenderError message="Failed to save ticket!" />}
          </div>
        </DialogContent>
        <DialogActions>
          <div
            className="hover:cursor-pointer w-fit p-2 px-4 bg-primary text-white rounded mr-4 mb-4"
            onClick={handleSaveTicket}
          >
            Lagre
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
