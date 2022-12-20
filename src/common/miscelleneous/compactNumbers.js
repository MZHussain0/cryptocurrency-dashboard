export const compactNumbers = (number) => {
  const f = new Intl.NumberFormat("en-us", {
    notation: "compact",
  });

  return f.format(number);
};
