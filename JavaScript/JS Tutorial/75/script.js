// CallBack Function Unerstanding....

console.log("Kaialsh is a hacker");
console.log("Raj is a hecker");

setTimeout(() => {
    console.log("I am inside stTimeOut");
}, 0);

setTimeout(() => {
    console.log("I am inside stTimeOut 2");
}, 0);

console.log("The end")

const fn = () => {
    console.log("nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )