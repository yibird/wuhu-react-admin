export const isWhite = (color: string) => {
  return ['white', '#fff', '#ffffff', 'rgb(255, 255, 255)', 'rgba(255,255,255)'].includes(
    color.trim(),
  );
};
