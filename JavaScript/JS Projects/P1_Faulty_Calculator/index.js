let random = Math.random();
let a = prompt("Enter First Number");
let b = prompt("Enter operation");
let c = prompt("Enter Second Number");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

console.log(random);

if(random > 0.1){
    // Right Calculation
    console.log(`The result is ${a} ${b} ${c}`);
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}
else{
    // Wrong Calculation
    b = obj[b];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}