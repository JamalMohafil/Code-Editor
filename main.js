let codes = document.getElementById("codes");
let remove = document.getElementById("btn-1");
let play = document.getElementById("btn-2");
let result = document.getElementById("result");

play.addEventListener("click",function()
{
    result.innerHTML = codes.value;
localStorage.setItem("resultt",codes.value)
})
remove.onclick = ()=>{
    result.innerHTML = "";

}

var nav = document.getElementById("nav");
var body = document.getElementById("body");
var title = document.getElementById("title-result");
var a = document.getElementById("a");
var night = document.getElementById("img-1");
night.onclick = ()=>{
    document.body.style.background = "#444";
    codes.style.background = "#777";
    codes.style.color = "#f0f0f0";
    title.style.color = "#f0f0f0"
    a.style.color = "#f0f0f0"
localStorage.setItem("body",body.value);
localStorage.setItem("titlee",title.value);
localStorage.setItem("aa",a.value);

}

var moon = document.getElementById("img-2");
moon.onclick = ()=>{
    document.body.style.background = "white";
    codes.style.background = "#f0f0f0";
    codes.style.color = "#111";
    title.style.color = "black"
    a.style.color = "black"
}

onload = ()=>{
    codes.value = localStorage.getItem("resultt");
}

