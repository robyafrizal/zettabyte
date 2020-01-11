const cetak1 = s => {
  let result = "";
  for (let i = 1; i < s; i++) {
    result += "@";
    for (let j = 0; j < i; j++) {
      result += "";
    }
    console.log(result);
  }
};
cetak1(10);

const cetak = s => {
  for (let i = s; i > 0; i--) {
    let result = "";
    for (let j = 0; j < i; j++) {
      result += "@";
    }
    console.log(result);
  }
};
cetak(10);

const test = s => {
  let result = "";
  for (let i = 0; i < s; i++) {
    result += "@";
    for (let j = 1; j < s - 1; j++) {
      if (i === 0 || i % 4 === 0) {
        if (j !== 1) {
          result += "@";
        } else {
          result += " ";
        }
        continue;
      }
      if (i % 2 === 0) {
        if (j !== s - 2) {
          result += "@";
        } else {
          result += " ";
        }
        continue;
      }
      result += " ";
    }
    result += "@\n";
  }
  return result;
};
console.log(test(15));

console.log('--------------------------------------')
const char = "@";
const generateChar = (c, n) => [...Array(n > 0 ? n : 0)].fill(c).join("");

const createMaze1 = n => {
  const oddWall = char + ' ' + generateChar(char, n-2)
  const evenWall = generateChar(char, n-2) + ' ' + char
  const emptyWall = char + generateChar(' ', n-2) + char​

  loop = (n+1)/4
​
  while(loop > 0) {
      console.log(oddWall)
      console.log(emptyWall)
      console.log(evenWall)
      loop !== 1 && console.log(emptyWall)
​
      loop-=1
  }
}
const createMaze2 = n => {
  let lw = char + " ",
    rw = "";
  let hw = generateChar(char, n - 2);
​
  for (i = 0; i <= n / 4; i++) {
    let len = hw.length;
    console.log(lw + hw + rw);
​
    lw += char + " ";
    rw += " " + char;
    hw = hw.slice(0, len - 4);
    console.log(
      lw +
        generateChar(" ", len - 4) +
        (i === Math.floor(n / 4) ? rw.replace(" @ ", "") : rw)
    );
  }
​
  rw = rw.replace(" ", "");
  lw = lw.replace("@ ", "");
  lw = lw.slice(0, lw.length - 1);
​
  for (i = 0; i <= n / 4; i++) {
    let len = hw.length;
    console.log(lw + char + hw + rw);
​
    lw = lw.replace(char + " ", "");
    rw = rw.replace(" " + char, "");
    hw += generateChar(char, 4);
    i < Math.floor(n / 4) && console.log(lw + " " + generateChar(" ", len + 4) + rw);
  }
};

const createMaze3 = n => {
	if (n < 3) throw new Error("Enter n > 2");
	const emptyWall = char + generateChar(' ', n-2) + char;
	const max = n - 1;
	const min = 1;
	const getRandLeftWallCount = () => Math.floor(Math.random() * (max - min) + min);
	const generateRandWall = leftWallCount => char + generateChar(char, leftWallCount - 1) + ' ' + generateChar(char, max - leftWallCount - 1) + char;
	loop = (n+1)/4;
	while(loop > 0) {
		console.log(generateRandWall(getRandLeftWallCount()));
		console.log(emptyWall)
		console.log(generateRandWall(getRandLeftWallCount()));
		loop !== 1 && console.log(emptyWall)
		loop--;
	}
};

createMaze3(11);
createMaze1(11);
createMaze2(11);