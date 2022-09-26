/**
 * Convert CamelCase String to regular sentence putting space before cap letters
 * @param arg string
 * @param capitalize boolean
 * @returns string
 */
export function camelCaseToSentence(arg = "", capitalize = false): string {
  const strLength = arg.length;
  let count = 0;
  let newStr = "";

  while (count < strLength) {
    let char = arg[count];

    if (char && !!isNaN(Number(char)) && char === char.toUpperCase()) {
      newStr += " ";
      if (capitalize) {
        newStr += char.toLocaleUpperCase();
      } else {
        newStr += char.toLocaleLowerCase();
      }
    } else {
      newStr += char;
    }
    count += 1;
  }
  return newStr;
}
