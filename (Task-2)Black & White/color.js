var box=document.getElementsByClassName("box")
// console.log(box);

var arr=[...box];
// 

arr.map((element,index)=>{
    // console.log(element);

    var arr=document.getElementsByClassName("box")
    // console.log(arr);
    
    // console.log(element.style.backgroundColor);



    element.addEventListener("click",()=>
    {

        if(element.style.backgroundColor=="white")
        {
            element.style.backgroundColor="black"; 
        }
        else
        {
           element.style.backgroundColor="white"; 
        }

    })
});
