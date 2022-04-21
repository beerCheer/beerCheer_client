export const getContrastYIQ = (hc: string) => {
  const hexcolor = hc.replace('#', '');
  const [r, g, b] = [0, 2, 4].map(p => parseInt(hexcolor.substring(p, 2 + p), 16));

  return (r * 299 + g * 587 + b * 114) / 1000 >= 128;
};
