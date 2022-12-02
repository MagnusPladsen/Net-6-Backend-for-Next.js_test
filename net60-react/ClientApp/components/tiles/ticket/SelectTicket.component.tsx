import { useField } from "formik";
import Image from "next/image";
import { TICKETS } from "../../../pages/order/tickets/[id]";
import Tile from "../Tile.component";
import SelectAmount from "./SelectAmount.component";

export default function SelectTicket({
  name, // Name of the ticket, this is the title
  ticketId,
  id,
  error,
}: {
  name: string;
  ticketId: string;
  id: string;
  error: boolean;
}) {
  const [field, meta, helpers] = useField(name);

  const handleIncrement = () => {
    if (field.value < 9) {
      helpers.setValue(field.value + 1);
    }
  };

  const handleDecrement = () => {
    if (field.value > 0) {
      helpers.setValue(field.value - 1);
    }
  };

  return (
    <Tile error={error} scaleOnHover={true} className="group">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="flex flex-row gap-5 w-full pb-4 lg:p-0">
          <div className="mt-2 ">
            <Image
              src={TICKETS[ticketId].icon}
              height="35px"
              width="50px"
              alt="Ticket icon"
            />
          </div>
          <div className="flex-col flex-1">
            <p className="font-bold group-hover:text-secondary">{TICKETS[ticketId].name}</p>
            <p className="text-xs">{TICKETS[ticketId].description}</p>
            <p className="text-md font-bold">{TICKETS[ticketId].price},-</p>
          </div>
        </div>
        <div className="flex content-center">
          <SelectAmount
            count={field.value}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        </div>
      </div>
    </Tile>
  );
}
