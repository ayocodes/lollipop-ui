/**
 * Shortens a number to a shortend String version
 * @param value number
 * @returns string
 */
export function intToString(value: number): string {
  if (value < 1000) {
    if (checkNumberIfFloat(value) == true) {
      return "" + value;
    } else {
      return value + ".00";
    }
  }
  var si = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" },
  ];
  var i: number;
  for (i = si.length - 1; i > 0; i--) {
    if (value >= si[i].v) {
      break;
    }
  }
  return (value / si[i].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i].s;
}

/**
 * Cheks if a number is a float
 * @param number number
 * @returns boolean
 */
export function checkNumberIfFloat(value: number): boolean {
  return Number(value) === value && value % 1 !== 0;
}

/**
 * Comma separates a number turning it into a string
 * @param value number
 * @returns string
 */
export function commaSeparateNumber(value: number): string {
  return Number(value).toLocaleString();
}
