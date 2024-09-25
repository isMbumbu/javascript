const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
rl.question("Please enter your age: " ,(age)=>{
    console.log('Your age is '+ age+' years');
    rl.close();
});