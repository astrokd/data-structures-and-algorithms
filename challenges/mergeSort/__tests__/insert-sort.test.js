const insertionSort = require('../insert-sort');

describe('Insertion Sort', () => {
  let inputArray = [8,4,23,42,16,15];
  const resultArray = [4,8,15,16,23,42];
    it('sort of input array', () => {
      insertionSort(inputArray);
      expect(inputArray).not.toEqual([8,4,23,42,16,15]);
      expect(inputArray).toEqual(resultArray);
    });
  let reverseSortArray = [20,18,12,8,5,-2];
  const resultArray2 = [-2,5,8,12,18,20];
    it('sort of Reverse-sorted array', () => {
      insertionSort(reverseSortArray);
      expect(reverseSortArray).not.toEqual([20,18,12,8,5,-2]);
      expect(reverseSortArray).toEqual(resultArray2);
    });
  let fewUniquesArray = [5,12,7,5,5,7];
  const resultArray3 = [5,5,5,7,7,12];
    it('sort of few uniques array', () => {
      insertionSort(fewUniquesArray);
      expect(fewUniquesArray).not.toEqual([5,12,7,5,5,7]);
      expect(fewUniquesArray).toEqual(resultArray3);
    });
  let nearlySortArray = [2,3,5,7,13,11];
  const resultArray4 = [2,3,5,7,11,13];
    it('sort of nearly sorted array', () => {
      insertionSort(nearlySortArray);
      expect(nearlySortArray).not.toEqual([2,3,5,7,13,11]);
      expect(nearlySortArray).toEqual(resultArray4);
    });
  });