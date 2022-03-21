let PMHours = [
  { i: 13, j: 1 },
  { i: 14, j: 2 },
  { i: 15, j: 3 },
  { i: 16, j: 4 },
  { i: 17, j: 5 },
  { i: 18, j: 6 },
  { i: 19, j: 7 },
  { i: 20, j: 8 },
  { i: 21, j: 9 },
  { i: 22, j: 10 },
  { i: 23, j: 11 },
  { i: 24, j: 12 },
];
export const clock = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = "";
  if (hour > 12) {
    ampm = "PM";
    let element = PMHours.find((item) => item.i === hour);
    if (element) hour = element.j;
  } else {
    ampm = "AM";
  }
  let time = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  return {
    time: `${time} ${ampm}`,
  };
};
