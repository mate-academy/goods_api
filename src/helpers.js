export const getNewId = (array) => {
  if (!array.length) {
    return 1;
  }

  const ids = array.map((item) => item.id);
  const maxId = Math.max(...ids);

  return maxId + 1;
}
