var inputbox=document.getElementById("inputbox");
var data=JSON.parse(localStorage.getItem('data'))||[]
var outputbox=document.getElementById("outputbox");
// console.log(data);
showData()
function addata() {
    console.log(inputbox.value);
    if(inputbox.value=="")
    {
        alert(" there is no Element in the inputbox that's why you can't add ")
    }
    else
    {
        data.push(inputbox.value);
        localStorage.setItem('data', JSON.stringify(data));
        inputbox.value = "";
        showData();
    }
}


function showData() {
    let ptag;
    if(data.length===0)
    {
    outputbox.innerHTML = "<center><h1>There is No Data Found & Array is Empty!!!</h1></center>";
    } 
    else
    {
        outputbox.innerText=`Local Storage Data:`
        
        data.map((element,index)=>{            
            ptag=document.createElement("p");

            ptag.style.color="puple";
            ptag.innerHTML=`<span>${element}<br></span>`
            outputbox.appendChild(ptag);
        })
        
     }


}

