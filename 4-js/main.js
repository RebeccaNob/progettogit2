console.log ("Hello World");
let btn=document.querySelector("button");

console.dir(btn);
btn.style.backgroundColor="red";

btn.onclick= () => {
    alert("Click ok");
}

btn.addEventListener("click", () => {
    console.log("Click ok");
});