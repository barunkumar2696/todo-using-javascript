var input=document.getElementById("innertext");
var button=document.getElementById("btn");
var list=document.getElementById("list");
var deletebtn=document.getElementById("btn2");
var list1=document.createElement("li")

function create(){
    var list1=document.createElement("li")
    list1.innerText=input.value;
    list.appendChild(list1)
    input.value=" "

    return list
}
function addclickhandler(){
    var list1=document.createElement("li")
    list1.innerText=input.value;
    list.appendChild(list1)
    input.value=" "
}

button.addEventListener("click",addclickhandler)
function addclickhandler2(e){
    if (e.keyCode ===13){
        addclickhandler();
    }
}
input.addEventListener("keypress",addclickhandler2)
function clickHandler3(){
list.innerText=" "
}
deletebtn.addEventListener("click",clickHandler3)
var btn3=document.getElementById("btn3")
function onBtn3Handler(){
    var firstChild=list.firstElementChild
    list.removeChild(firstChild)
}
btn3.addEventListener("click",onBtn3Handler)
var btn4=document.getElementById("btn4")
function onBtn4EventHandler(){
    var firstChild=list.firstElementChild
    var newElement=create()
    list.replaceChild(newElement,firstChild)
}
btn4.addEventListener("click",onBtn4EventHandler)