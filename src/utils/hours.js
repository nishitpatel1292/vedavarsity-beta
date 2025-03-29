export const schedTime = (time) => {
  return new Date(time * 1000).toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric'
  });
};
