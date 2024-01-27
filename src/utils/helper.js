export const formatedDate = (data) => {
  const date = new Date(data);
  const year = date?.getFullYear();
  const month = String(date?.getMonth() + 1).padStart(2, "0");
  const day = String(date?.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const formattedHour = (data) => {
  const hours = new Date(data);
  const formatdHour = hours.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  return formatdHour
}