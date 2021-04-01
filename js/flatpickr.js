var date = document.getElementById('date');
const config = {
  mode: "multiple",
  minDate: 'today',
  dateFormat: "Y-m-d"
}
flatpickr(date, config);
