import { useField } from "formik";
import Image from "next/image";
import { TICKETS } from "../../pages/order/tickets/[id]";
import Tile from "../tiles/Tile.component";
import SelectAmount from "./SelectAmount.component";

export default function SelectTicketTest({
  name, // Name of the ticket, this is the title
  id,
  icon,
  description,
  price,
  error,
}: {
  name: string;
  id: string;
  icon: string;
  description: string;
  price: number;
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
    {  <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="flex flex-row gap-5 w-full pb-4 lg:p-0">
          <div className="mt-2 ">
            <Image
              src={icon}
              height="35px"
              width="50px"
              alt="Ticket icon"
            />
          </div>
          <div className="flex-col flex-1">
            <p className="font-bold group-hover:text-secondary">{name}</p>
            <p className="text-xs">{description}</p>
            <p className="text-md font-bold">{price},-</p>
          </div>
        </div>
        <div className="flex content-center">
          <SelectAmount
            count={field.value}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        </div>
      </div>}
    </Tile>
  );
}
