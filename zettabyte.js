console.log("Section 1");

console.log("1");
const post = {
  title: "Post 1",
  author: {
    name: "Jono",
    age: 26
  }
};
Object.freeze(post);
post.title = "Post 1 Edited";
post.author.name = "Junuman";
console.log(`${post.title} is written by ${post.author.name}`);

console.log("3");
var arr = [0, 1, 2];
const input = [3, -1, 4, -2];
function insert(array) {
  array.sort(function(a, b) {
    return a - b;
  });
}
arr = arr.concat(input);
insert(arr);
console.log(arr);
//output should be [ -2, -1, 0, 1, 2, 3, 4 ]

console.log("--------------Next Question--------------");

console.log("Section 2");

console.log("1");
var x = 21;
var girl = function() {
  console.log(x);
  var x = 20;
};
girl();

console.log("3");
function sayHello(name, cb) {
  var hello = "Hello, how are today " + name;
  cb(hello);
}
function say(name) {
  console.log(name);
}
sayHello("Roby Afrizal Palmendha", say);

console.log("4");
const obj1 = { Name: "Roby", City: "Palembang" };
const obj2 = { Name: "Afrizal", City: "Jakarta" };
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

console.log("5");
var sapa = "Good Day.. ";
function result() {
  var sayName = "Mas Roby";
  function temp() {
    return sapa + sayName;
  }
  return temp();
}
console.log(result()); //prints 'Good Day.. Mas Roby

console.log("6");
function cekPalindrome(string) {
  let output = "";
  let cek;
  for (let i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }
  if (output === string) {
    cek = "Palindrome";
  } else {
    cek = "Bukan palindrome";
  }
  return cek;
}
console.log(cekPalindrome("katak"));

console.log("--------------Next Question--------------");

console.log("Section 3");

console.log("1");
const cetakBintang = num => {
  for (let i = 1; i <= num; i++) {
    let result = "*";
    for (let j = 0; j < i; j++) {
      if (i === num) {
        result += "*";
      }
    }
    console.log(result);
  }
};
cetakBintang(5);

console.log("2");
var filterData = Data.filter(function(data) {
  return (
    data.Age > 20 &&
    data.Course.Paid === true &&
    data.Course.SubCourse.Episode === 1
  );
});
