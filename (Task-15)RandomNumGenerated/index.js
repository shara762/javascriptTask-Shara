var box=document.getElementById("box")
// console.log(box);
function randomNum(){
    
     num=Math.floor((Math.random() * 100))
     box.innerHTML=`<h1>${num}</h1>`;
}

