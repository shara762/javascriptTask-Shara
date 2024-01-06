var box=document.getElementsByClassName("box")
// console.log(box);
var arr=[...box]
var count=1
arr.map((element,index)=>{
    
    // console.log(arr);

    element.addEventListener("click",()=>{

        if(count==1)
        {
            element.style.backgroundColor="orange"
            count=count+1
         }
       
        else if(count==2)
        {
            element.style.backgroundColor="white"
            count=count+1
        }
        else if(count==3)
        { 
            element.style.backgroundColor="green"
            count=1
        }



    })

})
