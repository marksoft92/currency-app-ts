import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const onPush = (path: string) => {
    navigate(path);
  };

  return onPush;
};

export const convertToHyphenCase = (str: string) => {
  return str.replace(/\s+/g, "-").toLowerCase();
};

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
