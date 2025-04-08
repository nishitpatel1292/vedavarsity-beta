export const schedTime = (time) => {
  // Convert the GMT time to a Date object
  const utcDate = new Date(time * 1000); // Convert Unix timestamp (in seconds) to milliseconds

  // Adjust for IST (UTC+5:30)
  const indiaOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
  const indiaTime = new Date(utcDate.getTime() + indiaOffset);

  // Format the adjusted time
  return indiaTime.toLocaleTimeString('en-IN', {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  });
};