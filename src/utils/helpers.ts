export function getStartAndEndDate() {
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();
  const daysUntilPreviousMonday = (currentDayOfWeek + 6) % 7;

  const start = new Date(currentDate);
  start.setDate(currentDate.getDate() - daysUntilPreviousMonday - 7);

  const startFormatted = start.toISOString().substring(0, 10);
  const endFormatted = currentDate.toISOString().substring(0, 10);

  return { start: startFormatted, end: endFormatted };
}
