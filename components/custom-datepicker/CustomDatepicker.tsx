const DateTimePicker = () => {
  return (
    <input
      type="datetime-local"
      id="date"
      className="relative bg-gray-50 border border-gray-300 text-gray-900 overflow-hidden text-sm rounded-lg outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
    />
  );
};

export default DateTimePicker;
