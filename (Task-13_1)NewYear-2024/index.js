var timebox=document.getElementById('timebox');
var wish = document.getElementById('wish');
var wishcontainer = false;

var fireworks=document.getElementsByClassName('fireworks')
var fireworks2=document.getElementsByClassName('fireworks2')
var fireworks3=document.getElementsByClassName('fireworks3')
var fireworks4=document.getElementsByClassName('fireworks4')
var fireworks5=document.getElementsByClassName('fireworks5')



setInterval(() => {
   
    var date=new Date();
var currunt_time=date.toLocaleTimeString();
// console.log(currunt_time);

if (currunt_time ==='7:42:30 AM') {
    wishcontainer= true;
}
if (wishcontainer)
 {
    wish.style.display = 'block';
    fireworks[0].style.display='block';
    fireworks2[0].style.display='block';
    fireworks3[0].style.display='block';
    fireworks4[0].style.display='block';
    fireworks5[0].style.display='block';
} 
else 
{
    wish.style.display = 'none';
}

timebox.innerHTML = `<h1>${currunt_time}</h1>`


},1000)

