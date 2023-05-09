export const paginate = (pageNumber, pageSize, array) => {
  const start = 0;
  const end = pageNumber * pageSize;
  return array.slice(start, end);
};
