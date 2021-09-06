export const getDiff = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = Math.abs(end - start);
  const millSecInMinute = 60 * 1000;
  const millSecInHour = 60 * millSecInMinute;
  const millSecInDay = 24 * millSecInHour;
  const countDays = Math.trunc(diff / millSecInDay);
  const restOfDayInMs = diff % millSecInDay;
  const countHours = Math.trunc(restOfDayInMs / millSecInHour);
  const restOfHourInMs = restOfDayInMs % millSecInHour;
  const countMinutes = Math.trunc(restOfHourInMs / millSecInMinute);
  const restOfMinuteInMs = restOfHourInMs % millSecInMinute;
  const countSeconds = Math.trunc(restOfMinuteInMs / 1000);
  return `${countDays}d ${countHours}h ${countMinutes}m ${countSeconds}s`;
};
const start = new Date(2019, 1, 1);
const end = new Date(2019, 1, 13);
console.log(getDiff(start, end));
