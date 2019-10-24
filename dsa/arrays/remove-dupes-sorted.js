let testArr = [1, 1, 2];

const dedupedLength = (arr) => {
  let length = 1;

  for(i=1; i<arr.length; i++) {
    if(arr[i] !== arr[i-1]) {
      length ++;
    }
  }
  return length;
}

console.log(dedupedLength(testArr));
console.log(testArr);

let testArr2 = [0, 0, 1, 1, 2, 2, 3, 3, 4];

const dedupeAndLength = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for(j = 1; j < arr.length; j++) {
    if(arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i+1;
}

console.log(dedupeAndLength(testArr2));
console.log(testArr2);
