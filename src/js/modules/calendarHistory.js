import flatpickr from "flatpickr";
import "flatpickr/dist/esm/l10n/es.js";
import rangePlugin from "flatpickr/dist/esm/plugins/rangePlugin.js";

function calendarHistory() {
  flatpickr("#startDate", {
    locale: 'es',
    plugins: [new rangePlugin({ input: "#endDate" })],
    dateFormat: "d-m-Y",
    disableMobile: "true"
  });
}

export default calendarHistory
