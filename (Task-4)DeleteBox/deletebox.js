var box=document.getElementsByClassName("box")
// console.log(box);

var arr=[...box]
// console.log(arr);

// arr.map((element,index)=>{

//     // console.log(index);

//     console.log(arr.length);

// element.addEventListener("click",()=>{

//    if(index==0)
//    {
//         element.remove()
//    }
//    else if(index==1)
//    {
//     element.remove()

//     }
//     else if(index==2)
//    {
//     element.remove()
//     }
//     else if(index==3)
//    {
//     element.remove()
//     }
//     else if(index==4)
//    {
//     element.remove()
//     }
//     else if(index==5)
//    {
//     element.remove()
//     }
//     else if(index==6)
//    {
//     element.remove()
//     }
//     else if(index==7)
//    {
//     element.remove()
//     }
//     else if(index==8)
//    {
//     element.remove()
//     }
//     else if(index==9)
//    {
//     element.remove()
//     }


// })
// element.innerHTML=`<h1>count${index+1}</h1>`


// })


arr.map((element,index)=>{

    element.addEventListener("click",()=>{


        element.remove()

        // for(let i=0;i<arr.length;i++)
        // {
        //     if(i==arr.length)
        //     {
        //         element.remove()
        //     }
        //     else{
        //         element.remove()
        //     }
        // }

    })


    element.innerHTML=`<h1>count${index+1}</h1>`

})


