export const fieldWidthControll = (
  width?: 'xs' | 's' | 'm' | 'l' | 'xl' | string,
) => {
  switch (width) {
    case 'xs':
      return '15ch';
    case 's':
      return '25vw';
    case 'm':
      return '50vw';
    case 'l':
      return '75vw';
    case 'xl':
      return '100vw';
    default:
      return width ? width : '50vw';
  }
};
