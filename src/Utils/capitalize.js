export const capitalize = (source = " ") => {
  const firstLetter = source.charAt(0).toUpperCase();
  const remain = source.slice(1);
  return firstLetter + remain;
};
