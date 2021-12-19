export const getUpdateTime = (updateTime) => {
  const date = new Date(updateTime);
  const nowdate = new Date();
  const diff = nowdate.getTime() - date.getTime();
  const hours = Math.trunc(diff / 1000 / 60 / 60);

  if (hours < 24) {
    if (hours < 1) return "just now";
    let measurement = hours === 1 ? "hour" : "hours";
    return `${hours.toString()} ${measurement} ago`;
  } else {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const time = new Intl.DateTimeFormat("en-US", options).format(date);
    return `on ${time}`;
  }
};
