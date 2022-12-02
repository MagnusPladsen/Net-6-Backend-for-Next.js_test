import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useField } from "formik";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import RenderError from "../../messages/RenderError.component";
import MobileCalendar from "../calendar/MobileCalendar.component";
import NewCalendar from "../calendar/NewCalendar.component";
import SelectTicketTile from "./SelectTicket.component";
import { Concert } from "../../../pages/order/tickets/[id]";

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
  const isError = useMemo(() => !!meta.error && !!meta.touched, [meta]);

  const { id } = router.query;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {Object.keys(availableTickets).map((ticketId) => (
        <SelectTicketTile
          name={`tickets.${ticketId}`}
          ticketId={ticketId}
          key={ticketId}
          id={ticketId}
          error={isError && !!meta.error}
        />
      ))}

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
