/**
 * Format a date to time ago.
 * @param {Date} date Date to format
 */

export function getTimeInterval(date) {
  // getting seconds
  let seconds = Math.floor((Date.now() - date) / 1000);

  //   variables
  let unit = "second";
  let direction = "ago";

  // start counting
  if (seconds < 0) {
    seconds = -seconds;
    direction = "from now";
  }

  let value = seconds;

  //  changing the unit according the time
  if (seconds >= 31536000) {
    value = Math.floor(seconds / 31536000);
    unit = "year";
  } else if (seconds >= 86400) {
    value = Math.floor(seconds / 86400);
    unit = "day";
  } else if (seconds >= 3600) {
    value = Math.floor(seconds / 3600);
    unit = "hour";
  } else if (seconds >= 60) {
    value = Math.floor(seconds / 60);
    unit = "minute";
  }

  // formatting text with date
  if (value != 1) unit = unit + "s";
  return value + " " + unit + " " + direction;
}
