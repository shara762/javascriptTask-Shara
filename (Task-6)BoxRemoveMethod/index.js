
var box = document.getElementsByClassName('box')
// console.log(box);
var startNo = document.getElementById('start-num')
// console.log(startNo);
var endNo = document.getElementById('end-num')
// console.log(endNo);

var deleteButton = document.getElementById('btn');
// console.log(deleteButton);
var arr = [...box]
// console.log(arr);

var deletebox = document.getElementById('deletebox')
// console.log(deletebox);
function DeleteBox() {

 deleteButton.addEventListener('click', () => {


        startNo = parseInt(startNo.value)
        endNo = parseInt(endNo.value)
        for (var i = startNo - 1; i <= endNo - 1; i++)
         {
            if ((startNo > arr.length) || (endNo > arr.length) || (startNo < 0) || (endNo < 0) || (startNo == '  ') || (endNo == '  ')) 
            {
                alert("Invalid Input. Enter The Valid Data!!!")
                deleteButton.disabled = true;
            }
            else
            {
                arr[i].remove(box);
                deletebox = document.getElementById('deletebox').appendChild(arr[i]);
            }

        }
    })
}














