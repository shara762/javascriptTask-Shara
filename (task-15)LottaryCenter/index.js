var btn=document.getElementById("confirm-btn")
// console.log(btn);

var gbtn=document.getElementById("genLotary")
// console.log(gbtn);
var cashinput=document.getElementById("take-cash")
// console.log(cashinput);
var cashdisplay=document.getElementById("cash")

var inputbox=document.getElementsByClassName("inputbox")
// console.log(inputbox);

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var showgif=true;
btn.addEventListener("click",()=>{

if(cashinput.value==""||cashinput.value<=0)
{
    alert("Invalid input")
}
else
{
    cashinput.style.display='none';
    cashdisplay.innerHTML = `<center><h1>${cashinput.value}</h1></center>`

}
})

gbtn.addEventListener("click",()=>{
 
    if(inputbox[0].value=="" ||inputbox[0].value<0||inputbox[1].value=="" ||inputbox[1].value<0||inputbox[2].value=="" ||inputbox[2].value<0||inputbox[3].value<0||inputbox[3].value=="" )
        {
            alert("invalid input")
        }
    else if(showgif)
    {
            gif.style.display = 'block';
            box1.style.display='block';
            box2.style.display='block';
            box3.style.display='block';
            box4.style.display='block';

             
    }
    else
    {
        // setTimeout(() => {


        // box1.value = Math.floor(Math.random() * 9) ;

        // box2.value = Math.floor(Math.random() * 9) ;
        // box3.value = Math.floor(Math.random() * 9) ;
        // box4.value = Math.floor(Math.random() * 9) ;



        

        // },100)
        displayRandomNumbers()
  
     
    }
       

})


function displayRandomNumbers() {
    setTimeout(function() {
      document.getElementById('box1').value = Math.floor(Math.random() * 100);
    }, 1000);
    setTimeout(function() {
      document.getElementById('box2').value = Math.floor(Math.random() * 100);
    }, 2000);
    setTimeout(function() {
      document.getElementById('box3').value = Math.floor(Math.random() * 100);
    }, 3000);
    setTimeout(function() {
      document.getElementById('box4').value = Math.floor(Math.random() * 100);
    }, 4000);
  }




