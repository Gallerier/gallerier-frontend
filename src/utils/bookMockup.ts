export const BookSrcMockup = () => {
  const no = (Math.random() * 5 + 1).toFixed(0);
  return `/static/images/book-tmp${no}.png`;
};
