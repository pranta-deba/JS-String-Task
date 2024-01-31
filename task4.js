let str = "abfhb X jufduh";

if (str.includes("x")) {
  str = str.replace(/x/g, "y");
} else if (str.includes("X")) {
  str = str.replace(/X/g, "Y");
}
console.log(str);
