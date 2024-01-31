let str = "akdjhfekfklfilflfofkfu";
let vowels = ['a','e','i','o','u'];
let count = 0;

for(let i = 0; i < str.length; i++ ){

    let char = str[i];

    if(vowels.includes(char)){
        count++;
    }

}
console.log(count>4);





