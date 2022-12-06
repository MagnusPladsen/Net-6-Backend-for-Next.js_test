import { useField } from "formik";
import { useMemo, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { concert } from "../../pages/order/tickets/[id]";
import RenderError from "../messages/RenderError.component";
import Tile from "../tiles/Tile.component";

export default function NewCalendar({ name }: { name: string }) {
  const [state, setState] = useState([
    {
      startDate: concert.dateFrom,
      endDate: concert.dateFrom,
      key: "selection",
    },
  ]);

  const [field, meta, helpers] = useField("dateRange");
  const isError = useMemo(() => !!meta.error && !!meta.touched, [meta]);

  const handleSetRange = (item: any) => {
    setState([item.selection]);
    helpers.setValue(item.selection);
  };
  return (
    <Tile error={isError && !!meta.error}>
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="mx-auto">
          <DateRange
            onChange={(item) => handleSetRange(item)}
            moveRangeOnFirstSelection={false}
            ranges={state}
            showMonthAndYearPickers={false}
            endDatePlaceholder="Til"
            startDatePlaceholder="Fra"
            rangeColors={["#3F9EC8"]}
            showPreview={false}
            minDate={concert.dateFrom}
            maxDate={concert.dateTo}
          />
          {isError && !!meta.error && (
            <div className="mt-4 text-center">
              <RenderError message={meta.error!} />
            </div>
          )}
        </div>
      </div>
    </Tile>
  );
}
