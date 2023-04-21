// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
  let e = 100;
  let arr = c;
  let n = c.length;

  if (c.length % k !== 0) {
    n = c.length * k;
    for (let j = 1; j < k; j++) {
      arr = arr.concat(c);
    }
  }

  for (let i = 0; i < n; i += k) {
    if (arr[i] === 1) {
      e -= 3;
    } else if(arr[i] === 0) {
      e -= 1;
    }
  }

  return e;
}

// jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2);
// jumpingOnClouds([0, 0, 1, 0], 2);
// jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3);
