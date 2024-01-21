const url="https://api.github.com/users/shara762";

 var demo1=document.getElementById('demo1');
 var demo2=document.getElementById('demo2');
 var demo3=document.getElementById('demo3');
 var demo4=document.getElementById('demo4');
 var demo5=document.getElementById('demo5');
var container=document.getElementById("container")
    


async function DemoPromise(){

    try{
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

    demo1.innerHTML=`<h1>${result.type}</h1>`;
    demo2.innerHTML=`<img src="${result.avatar_url}">`
    demo3.innerHTML=`<h1>${result.bio}</h1>`;
    demo4.innerHTML=`<h1>${result.followers}</h1>`;
    demo5.innerHTML=`<h1>${result.id}</h1>`;
    }
    catch(error)
    {
        console.log(error);

    }

}
DemoPromise()