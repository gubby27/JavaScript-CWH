let button = document.getElementById("btn");

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "Hey, I am a box";
})