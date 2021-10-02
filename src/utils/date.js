export const dateFormat = (year, month, date) => {
  if (date === 0) return new Date(year, month, date);
  return new Date(year, month);
};

export const currentDate = () => {
  return new Date(new Date().setHours(0, 0, 0, 0));
};

export const thisYear = () => {
  return new Date().getFullYear();
};

export const thisMonth = () => {
  return new Date().getMonth();
};

export const today = () => {
  return new Date().getDate();
};
