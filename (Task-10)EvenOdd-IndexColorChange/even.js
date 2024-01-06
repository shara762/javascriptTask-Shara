var box=document.getElementsByClassName("box")
// console.log(box);

var head=document.getElementsByClassName("head")
// console.log(head);

var arr=[...box]
arr.map((element,index)=>{
        // console.log(element);

        var arr=document.getElementsByClassName("box")
        // console.log(arr);
    // console.log(index);

    element.addEventListener("click",()=>{

        if(index%2==0)
        {
            element.style.backgroundColor="green"
        }
        else if(index%2!=0)
        {
            element.style.backgroundColor="red"
        }
    })
   
    element.innerHTML=`<h1>The index is${index}</h1>`
    
})