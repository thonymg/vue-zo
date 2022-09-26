export const startCase = (str: string) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const isEmpty = (obj: string) => Object.keys(obj).length === 0;

export const pregQuote = (str: string) => str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");

export const match = (str: string, wildcard: string) => {
  const regex = new RegExp(
    `^${wildcard.split(/\*+/).map(pregQuote).join(".*")}$`,
    "g"
  );
  return str.match(regex);
};
