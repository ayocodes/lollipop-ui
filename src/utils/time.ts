/**
 *  NOTE:  Gets present year date
 * @returns string
 */
export const getYear = () => {
  //  TODO:  Make sure that the year is initialized first in firebase else null!!!!
  //  TODO:  Get user uid and check with firebase to send the present document year
  const year = new Date().getFullYear();
  return "" + year;
};
