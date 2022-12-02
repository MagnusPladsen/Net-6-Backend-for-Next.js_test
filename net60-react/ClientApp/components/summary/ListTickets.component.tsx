import Image from "next/image";
import { Tickets } from "../../pages/order/tickets/[id]";

export default function ListTickets({
  TICKETS,
  order,
  headingStyle,
}: {
  TICKETS: Tickets;
  order: any;
  headingStyle: string;
}) {
  return (
    <>
      <div className={`flex flex-row gap-5 pb-4 lg:p-0 lg:my-6 mx-auto`}>
        <div className="flex-col flex-1">
          <h3 className={`${headingStyle}`}>Billetter</h3>
        </div>
      </div>

      {Object.keys(order.tickets).map((ticketId) => (
        <div
          key={ticketId}
          className={`flex flex-row gap-5 pb-4 lg:p-0 lg:my-6 mx-auto`}
        >
          <div className="mt-2 hidden lg:block">
            <Image
              src={TICKETS[ticketId].icon}
              height="35px"
              width="50px"
              alt="ticket icon"
            />
          </div>
          <div className="flex-col flex-1">
            <p className="text-lg lg:text-sm font-bold text-secondary">
              {order.tickets[ticketId]} x <span>{TICKETS[ticketId].name}</span>
            </p>
            <p className="text-base lg:text-xs">Plass: {order.placementId}</p>
            {order.dateRange ? (
              <p className="text-base lg:text-xs">
                {order.dateRange.dateFrom.toLocaleDateString("no-NO")} -{" "}
                {order.dateRange.dateTo.toLocaleDateString("no-NO")}
              </p>
            ) : null}
            <p className="text-lg lg:text-sm font-bold">
              kr {TICKETS[ticketId].price},-
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
