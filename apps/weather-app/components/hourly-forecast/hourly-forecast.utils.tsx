function formatTime(time: string) {
  const date = new Date(time);
  let hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${hours} ${ampm}`;
}

export { formatTime };
