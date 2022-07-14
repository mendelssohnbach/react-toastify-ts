export const makeRandomColorStyle = () => {
  const getColor = () => Math.floor(Math.random() * 255);
  return {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
    backgroundColor: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
};
