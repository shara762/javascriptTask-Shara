        var inputbox = document.getElementById("inputbox");
        // console.log(inputbox);
        var data = JSON.parse(localStorage.getItem('data')) || [];
        var outputbox = document.getElementById("outputEmailbox");
        // console.log(outputbox);

        showData();

        function submitemail() {

            // inputbox.value;

            if (inputbox.value == "")
            {
                alert("Please enter the email!!!");
            } 
            else 
            {
                if (data.includes(inputbox.value)) {
                    alert("User with this email already exists");
                } 
                else 
                {
                    data.push(inputbox.value);
                    localStorage.setItem('data', JSON.stringify(data));
                    inputbox.value = "";
                    showData();
                }
            }
        }

        function showData() {
            let ptag;

            if (data.length === 0) {
                outputbox.innerHTML = "<center><h1>Array is Empty!!!</h1></center>";
            } else {
                outputbox.innerText = `Register User List:`;

                data.map((element, index) => {
                    ptag = document.createElement("p");
                    ptag.innerHTML = `<span>${element}<br></span>`;
                    outputbox.appendChild(ptag);
                });
            }
        }

