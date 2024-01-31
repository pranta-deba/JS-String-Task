let str = "ami tomAke valovAshi";

let count = 0;
let target = 'a';

for (const i of str) {
  if (target.toLowerCase() == i.toLowerCase()) {
    count++;
  }
}
console.log(count);