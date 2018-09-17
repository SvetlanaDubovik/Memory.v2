  let lastTimeout;

  export const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  export const getRandomArray = (arr, k) => {
    let result = [];
    let copyArr = [];
    copyArr = [].concat(arr);
    for (let i = 0; i < k; i++) {
      const randomIndex = getRandomValue(0, copyArr.length - 1);
      result.push(copyArr[randomIndex]);
      copyArr.splice(randomIndex, 1);
    }
    return result;
  };

  export const debounce = (func, interval) => {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(func, interval);
  };