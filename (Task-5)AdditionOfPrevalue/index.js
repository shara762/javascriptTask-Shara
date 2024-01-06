var shell=document.getElementsByClassName("shell")
// console.log(shell);

var box=[...shell]
// console.log(box);

box.map((element,index)=>{

// console.log(index);

// console.log(element.innerText);

let prevIndex
element.addEventListener("click",()=>{
// console.log(box.length);
if(index==0)
{
    prevIndex=box.length-1;

}
else
{
    prevIndex=index-1
}




var newValue=parseInt(element.innerText)+parseInt(box[prevIndex].innerText)

element.innerHTML=`<h1>${newValue}</h1>`

})


})