import { EventYearsDropdown as EventYearsDropdownProps } from "../../interfaces/History";

function EventYearsDropdown({ majorEvents }: EventYearsDropdownProps) {
  return (
    <div className="text-start">
      <label htmlFor="event-years">Select Event Year:</label>

      <select id="event-years" className="block border">
        <option value="">-- Select a year --</option>

        {majorEvents.map((majorEvent, index) => {
          return (
            <option key={index} value={majorEvent.year}>
              {majorEvent.year}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default EventYearsDropdown;
