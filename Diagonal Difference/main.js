function diagonalDifference(arr) {
  if (!arr) return false;
  let left = 0;
  let right = 0;
  let pivot = arr[0].length - 1;

  for (let x = 0; x < arr.length; x++) {
    left += arr[x][x];
  }

  for (let a = 0; a < arr.length; a++) {
    right += arr[a][pivot];
    pivot--;
  }

  let result = left - right;
  result = Math.abs(result);
  return result;
}
