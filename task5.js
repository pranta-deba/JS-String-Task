let str = "I'm a little tea pot.";
let strArr = str.split(" ");

for (let i = 0; i < strArr.length; i++) {
  strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
}
let result = strArr.join(" ");
console.log(result);
