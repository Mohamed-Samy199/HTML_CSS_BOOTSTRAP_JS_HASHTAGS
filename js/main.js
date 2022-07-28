let displayContent = document.getElementById("display-content")
let zero =document.getElementById("zero")
let one = document.getElementById("one")
let there = document.getElementById("there")
let free = document.getElementById("free")
let toggler = document.getElementById("toggler")
let navbarNav = document.getElementById("navbarNav")
let item1 = document.getElementById("item1")
let item2 = document.getElementById("item2")
let item3 = document.getElementById("item3")
let item4 = document.getElementById("item4")
let item5 = document.getElementById("item5")
let item6 = document.getElementById("item6")
if(zero){
    zero.addEventListener("click" , ()=>{
        displayContent.classList.toggle("showw")
    })
}
if(one){
    one.addEventListener("click", ()=>{
        displayContent.classList.remove("showw")
    })
}
if(there){
    there.addEventListener("click", ()=>{
        free.classList.toggle("frees")
    })
}
if(toggler){
    toggler.addEventListener("click" , ()=>{
        navbarNav.classList.toggle("more")
    })
}
item1.onclick = function(){
    navbarNav.classList.add("more")
}
item2.onclick = function(){
    navbarNav.classList.add("more")
}
item3.onclick = function(){
    navbarNav.classList.add("more")
}
item4.onclick = function(){
    navbarNav.classList.add("more")
}
item5.onclick = function(){
    navbarNav.classList.add("more")
}
item6.onclick = function(){
    navbarNav.classList.add("more")
}
item7.onclick = function(){
    navbarNav.classList.add("more")
}