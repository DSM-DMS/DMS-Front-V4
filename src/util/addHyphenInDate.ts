const addHyphenInDate = (date: string): string => {
  const hyphenDate = date.replace(/\s/g, '-');
  return hyphenDate;
};

export default addHyphenInDate;
