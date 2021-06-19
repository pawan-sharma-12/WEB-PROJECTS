
console.log("hello js")
var open = document.querySelector("#open")
var close = document.querySelector(".close");
var element = document.querySelector("#story");
    var element1 = document.querySelector("#layout");
// funciton active()
// {
    
//    element.classList.add("actives");
//    element1.classList.add("activel");
// }
open.addEventListener('click',()=>
        {
            element.classList.add("actives");
            element1.classList.add("activel")
        }
)
close.addEventListener("click",()=>
        {
            element.classList.remove("actives");
            element1.classList.remove("activel")
        }
    )
function f1()
{
    alert("You are warned")
}
var y = document.querySelector("body");
function f2()
{
    var x = confirm("You want page in dark mode? ");
    if(x)
        {
         
            
            y.classList.add("dark");
        }
}
function f3()
{
   
    y.classList.add("day");
}