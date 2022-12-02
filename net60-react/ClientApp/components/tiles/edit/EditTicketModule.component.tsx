import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import ShowField from "./ShowField.component";
//https://mui.com/material-ui/react-dialog/

export default function EditTicketModule({
  children,
  field,
  ticket,
  onChangeEditTickets,
  modalOpen,
  setModalOpen,
}: {
  children: React.ReactNode;
  field: any;
  ticket: string;
  onChangeEditTickets: any;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true); // for blurring the background
    setModalOpen(true);
  };

  const handleClose = () => {
    setOpen(false); // for blurring the background
    setModalOpen(false);
  };

  const availiableFields = [
    "Felt A",
    "Felt B",
    "Felt C",
    "Felt D",
    "Felt E",
    "Felt F",
    "Felt G",
    "Felt H",
    "Felt I",
    "Felt J",
    "Felt K",
  ];

  const [fields, setFields] = React.useState<string[]>([]);

  const setField = (field: string) => {
    if (fields.includes(field) === false) {
      setFields([...fields, field]);
    }
  };

  const removeField = (field: string) => {
    const newFields = fields.filter((f) => f !== field);
    setFields(newFields);
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
        <DialogTitle className="text-primary ">
          Rediger {field.value[ticket].name}
        </DialogTitle>
        <DialogContent>
          <div className={`flex flex-col`}>
            <div className="flex flex-col">
              <label className="">Navn</label>
              <input
                type="text"
                name="name"
                className={`w-[35vw] font-nunito mt-2 mb-6 mr-2 px-4`}
                value={field.value[ticket].name ? field.value[ticket].name : ""}
                onChange={(e) => onChangeEditTickets(e, ticket)}
              />
            </div>
            <div className="flex flex-col">
              <label className="">Beskrivelse</label>
              <input
                type="text"
                name="description"
                className={`w-[35vw] font-nunito mt-2 mb-6 px-4 `}
                onChange={(e) => onChangeEditTickets(e, ticket)}
                value={
                  field.value[ticket].description
                    ? field.value[ticket].description
                    : ""
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="">Pris</label>
              <input
                type="number"
                name="price"
                step="50"
                className={`w-[35vw] font-nunito mt-2 mb-6 px-4`}
                onChange={(e) => onChangeEditTickets(e, ticket)}
                value={
                  field.value[ticket].price ? field.value[ticket].price : ""
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="">Velg felt</label>
              <select
                name="placements"
                className={`w-[35vw] font-nunito mt-2 mb-6 px-4`}
                onChange={(e) => setField(e.target.value)}
              >
                {availiableFields.map((felt, index) => {
                  return (
                    <option key={index} value={felt}>
                      {felt}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="">
              <div className="pb-2"><label className="">Aktive felt</label></div>
              <div className="grid grid-cols-4">
                {fields.length !== 0
                  ? fields.map((field, index) => {
                      return (
                        <ShowField
                          key={index}
                          removeField={removeField}
                          field={field}
                        />
                      );
                    })
                  : <p className="italic opacity-50">Ingen aktive felt</p>}
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <div
            className="hover:cursor-pointer w-fit p-2 px-4 bg-primary text-white rounded mr-4 mb-4"
            onClick={handleClose}
          >
            Bekreft
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
