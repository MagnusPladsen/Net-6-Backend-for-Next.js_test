import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useField } from "formik";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useGetTicketsQuery } from "../../api/apiSlice";
import { Concert } from "../../pages/order/tickets/[id]";
import Spinner from "../messages/loading/Spinner.component";
import RenderError from "../messages/RenderError.component";
import { Ticket } from "../model/models";
import MobileCalendar from "../calendar/MobileCalendar.component";
import NewCalendar from "../calendar/NewCalendar.component";
import SelectTicketTest from "./SelectTicketTest.component";

export default function TicketsStep({
  availableTickets,
  name,
  concert,
}: {
  availableTickets: { [key: string]: { name: string; price: number } };
  name: string;
  concert: Concert;
}) {
  const router = useRouter();

  const [field, meta, helpers] = useField(name);
  /* const isError = useMemo(() => !!meta.error && !!meta.touched, [meta]); */

  const {
    data: tickets,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTicketsQuery("");

  const { id } = router.query;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /*  const fetchTickets = async () => {
    try {
      const response = await fetch("https://localhost:7033/tickets");
      const data = await response.json();
      setTickets(data);
    } catch (e) {
      console.log(e);
    }
  }; */

  return (
    <div>
      {/*    {Object.keys(availableTickets).map((ticketId) => (
        <SelectTicketTile
          name={`tickets.${ticketId}`}
          ticketId={ticketId}
          key={ticketId}
          id={ticketId}
          error={isError && !!meta.error}
        />
      ))} */}

      {isLoading ? <Spinner /> : null}

      {isSuccess
        ? tickets.map((ticket: Ticket) => (
            <SelectTicketTest
              name={ticket.name}
              key={ticket.id}
              id={ticket.id}
              icon={ticket.icon}
              description={ticket.description}
              price={ticket.price}
              error={isError && !!meta.error}
            />
          ))
        : null}

      {isError ? (
        <RenderError
          message={
            "Beklager! Det ser ut som om vi har noen problemer med å finne billettene. :("
          }
        />
      ) : null}

      {isError && !!meta.error && (
        <div className="-mt-4 mb-10 text-center">
          <RenderError message={meta.error!} />
        </div>
      )}
      <div className="hidden lg:block">
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <NewCalendar name="dateRange" />
        </LocalizationProvider>
      </div>
      <div className="block lg:hidden">
        <MobileCalendar name="dateRange" concert={concert} />
      </div>
    </div>
  );
}
