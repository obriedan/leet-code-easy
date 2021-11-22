const plusOne = (digits) => {
  let addToNext = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9 && i === digits.length - 1) {
      digits[i] += 1;
      i = 0;
      continue;
    } else if (!addToNext) {
      digits[i] = 0;
      addToNext = true;
      continue;
    }
    if (addToNext && digits[i] !== 9) {
      digits[i] += 1;
      i = 0;
      continue;
    } else if (addToNext) {
      digits[i] = 0;
      continue;
    }
  }

  if (digits[0] === 0) {
    digits.unshift(1);
  }
  return digits;
};

const example1 = [1, 2, 3];
const example2 = [4, 3, 2, 1];
const example3 = [0];
const example4 = [9];
const example5 = [
  1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
  8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
];

plusOne(example4);
