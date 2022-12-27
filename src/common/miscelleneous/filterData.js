export const filteredData = (data) => {
  const interval = Math.floor(data.length / 6);
  let currentIndex = 0;
  const selectedItems = [];
  for (let i = 0; i < 6; i++) {
    selectedItems.push(data[currentIndex]);
    currentIndex += interval;
  }
  return selectedItems;
};
