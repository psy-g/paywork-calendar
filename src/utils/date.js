export const dateFormat = (year, month, date) => {
  return new Date(year, month, date);
};

export const dayNum = (dateObj) => {
  return dateObj.getDay();
};

export const dateNum = (dateObj) => {
  return dateObj.getDate();
};

export const monthNum = (dateObj) => {
  return dateObj.getMonth();
};

export const yearNum = (dateObj) => {
  return dateObj.getFullYear();
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
