

var box=document.getElementsByClassName("box")
// console.log(box);

var btn=document.getElementsByClassName("btn")
// var arr=[...box]

let cnt=1
function ChangeBoxColor(color){

    if(cnt==1 )
    {    document.getElementsByClassName("box")[0].style.backgroundColor = color;
        cnt=cnt+1
    }
    else if(cnt==2)
    {
        document.getElementsByClassName("box")[1].style.backgroundColor = color;
        cnt=cnt+1

    }
    else if(cnt==3)
    {
        document.getElementsByClassName("box")[2].style.backgroundColor = color;
        cnt=cnt+1

    }
    else if(cnt==4)
    {
        document.getElementsByClassName("box")[3].style.backgroundColor = color;
        cnt=cnt+1

    }
    else if(cnt==5)
    {
        document.getElementsByClassName("box")[4].style.backgroundColor = color;
        cnt=cnt+1

    }

    else if(cnt==6)
    {
        document.getElementsByClassName("box")[0].style.backgroundColor = color;
        cnt=cnt+1

    }
    else if(cnt==7)
    {
        document.getElementsByClassName("box")[1].style.backgroundColor = color;
        cnt=cnt+1

    }
    else if(cnt==8)
    {
        document.getElementsByClassName("box")[2].style.backgroundColor = color;
        cnt=cnt+1

    }
    else if(cnt==9)
    {
        document.getElementsByClassName("box")[3].style.backgroundColor = color;
        cnt=cnt+1

    }
    else if(cnt==10)
    {
        document.getElementsByClassName("box")[4].style.backgroundColor = color;
        cnt=1

    }
  

    
}














