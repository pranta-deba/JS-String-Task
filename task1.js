let str = "ami tomake valovashi";

let count = 0;
let target = 'a';

for (const i of str) {
  if (target == i) {
    count++;
  }
}
console.log(count);