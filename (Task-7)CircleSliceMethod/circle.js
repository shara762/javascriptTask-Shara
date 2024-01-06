var circle=document.getElementsByClassName("circle")
// console.log(circle);

var Deletedcircle=document.getElementById('Deletedcircle')    
// console.log(Deletedcircle); 
var arr=[...circle]
// console.log(arr);
                                                                              
arr.map((element,index)=>{
    
    // console.log(index);
    // console.log(element);
    element.addEventListener("click",()=>{

        element.remove();
    arr.slice(element)
    
var div2=document.createElement("div");

div2.style.width="100px"
div2.style.borderColor="red"
div2.style.height="100px"
div2.style.borderRadius="50px"
div2.style.backgroundColor="yellow"
div2.style.width="100px"
div2.style.textAlign="center"
div2.style.marginTop="1%"


div2.innerHTML=`<h1>${index+1}</h1>`;

document.getElementById('Deletedcircle').appendChild(div2);



    })
})


//another way to do this task without using slice method

// arr.map((element,index)=>{
//     var deleteboxlist=[]

//     element.addEventListener("click",()=>{

//         element.remove();
    
//     //    var deletebox= [index+1]
// // console.log(deletebox);

// // deleteboxlist.push(deletebox)

// // console.log(deleteboxlist);

// var div2=document.createElement("div");


// div2.style.width="100px"
// div2.style.borderColor="red"
// div2.style.height="100px"
// div2.style.borderRadius="50px"
// div2.style.backgroundColor="yellow"
// div2.style.width="100px"
// div2.style.textAlign="center"
// div2.style.marginTop="1%"


// div2.innerHTML=`<h1>${index+1}</h1>`;

// document.getElementById('Deletedcircle').appendChild(div2);



//     })
// // document.getElementById("Deletedcircle").append(deleteboxlist)
// })

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               