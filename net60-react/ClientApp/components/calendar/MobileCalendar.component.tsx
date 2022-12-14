import { useField } from "formik";
import { useState } from "react";
import { Concert } from "../../pages/order/tickets/[id]";
import RenderError from "../messages/RenderError.component";
import Tile from "../tiles/Tile.component";

export default function MobileCalendar({
  name,
  concert,
}: {
  name: string;
  concert: Concert;
}) {
  const [field, meta, helpers] = useField(name);
  const isError = !!meta.error && !!meta.touched;

  const [selectedDateFrom, setSelectedDateFrom] = useState<number>();
  const [selectedDateTo, setSelectedDateTo] = useState<number>();

  const dateFrom = concert.dateFrom;
  const dateTo = concert.dateTo;

  const findTotalDays = (startDate: Date, stopDate: Date) => {
    const difference = stopDate.getTime() - startDate.getTime(); // TOTAL MILLISECONDS BETWEEN DATES
    const totalDays = Math.ceil(difference / (1000 * 3600 * 24) + 1); // CONVERT TO TOTAL DAYS BETWEEN DATES
    let dates = [];
    for (let i = 0; i < totalDays; i++) {
      let date = new Date(startDate);
      date.setDate(date.getDate() + i); // ADD DAYS TO DATE
      let dateNumber = date.getDate(); // GET DATE IN NUMBER
      dates.push({ id: i, dateNumber, date });
    }
    return dates;
  };

  const totalDays = findTotalDays(dateFrom, dateTo);

  const selectDateRange = (date: number) => {
    if (selectedDateFrom !== undefined && selectedDateTo !== undefined) {
      setSelectedDateFrom(date);
      setSelectedDateTo(undefined);
    } else if (selectedDateFrom !== undefined && selectedDateTo === undefined) {
      if (date < selectedDateFrom) {
        setSelectedDateTo(selectedDateFrom);
        setSelectedDateFrom(date);
      } else {
        setSelectedDateTo(date);
      }
    } else {
      setSelectedDateFrom(date);
    }
  };

  const setDateRange = () => {
    if (selectedDateFrom !== undefined && selectedDateTo !== undefined) {
      const dateFrom = totalDays[selectedDateFrom!].date;
      const dateTo = totalDays[selectedDateTo!].date;
      console.log(dateFrom, dateTo);
      helpers.setValue({
        startDate: dateFrom,
        endDate: dateTo,
      });
    } else {
      return;
    }
  };

  return (
    <Tile error={isError}>
      <div className="mx-auto text-center flex flex-col gap-5">
        <p className="text-lg font-bold">Velg dato</p>
        <div className="grid grid-cols-2 gap-2">
          {totalDays.map((day) => (
            <div
              key={day.id}
              className={` 
              ${day.id == selectedDateFrom ? "bg-primary text-white" : ""} 
              ${day.id == selectedDateTo ? "bg-primary text-white" : ""}
              ${
                day.id < selectedDateTo! && day.id > selectedDateFrom!
                  ? "bg-primary text-white"
                  : ""
              }
              border border-border shadow-inner whitespace-nowrap bg-white py-3 px-6 rounded`}
              onClick={() => selectDateRange(day.id)}
            >
              {day.date.toLocaleDateString("no-NO")}
            </div>
          ))}
        </div>
        <button
          className={`${
            selectedDateFrom !== undefined && selectedDateTo !== undefined
              ? "bg-secondary text-white"
              : "bg-gray-300 text-gray-500"
          } w-32 h-11 rounded-lg font-roboto font-bold drop-shadow-default mx-auto mt-4`}
          onClick={setDateRange}
        >
          Bekreft
        </button>
        {isError && !!meta.error && (
          <div className="mt-4 text-center">
            <RenderError message={meta.error!} />
          </div>
        )}
      </div>
    </Tile>
  );
}
