var obj = [
  {
      rollNo: 1,
      name: "Sharifa Shaikh",
      age: 21,
      gender: "female",
      favItCompany: "Cognizant",
      githubUrl: "https://api.github.com/users/shara762",
      mailId: "shaikhsharifa762@gmail.com",
      birthDate: "14-01-2003",
      avatar: "https://avatars.githubusercontent.com/u/145984673?v=4",
      profileLink:"https://github.com/shara762"
    },
    {
      rollNo: 2,
      name: "Farzana Shaikh",
      age: 21,
      gender: "female",
      favItCompany: "Talentica software ",
      githubUrl: "https://api.github.com/users/Fara-776",
      mailId: "farashaikh564@gmail.com",
      birthDate: "14-01-2003",
      avatar: "https://avatars.githubusercontent.com/u/145984007?v=4",
      profileLink:"https://github.com/Fara-776"
  
    },
    {
      rollNo: 3,
      name: "Prajwal Jagtap",
      age: 19,
      gender: "Male",
      favItCompany: "Wipro India",
      githubUrl: "https://api.github.com/users/PJ9172",
      mailId: "rohitjagtap5000@gmail.com",
      birthDate: "22-06-2004",
      avatar: "https://avatars.githubusercontent.com/u/147252354?v=4",
      profileLink:""
  
    },
    {
      rollNo: 4,
      name: "Mosin Balsing",
      age: 19,
      gender: "Male",
      favItCompany: "Wipro India",
      githubUrl: "https://api.github.com/users/Mosin-M-B",
      mailId: "mosinbalsing@gmail.com",
      birthDate: "13-03-2004",
      avatar: "https://avatars.githubusercontent.com/u/119176708?v=4",
      profileLink:"https://github.com/Mosin-M-B"
  
    },
    {
      rollNo: 5,       
      name: "Ashwini Yadav",
      age: 21,
      gender: "Female",
      favItCompany: "Tech Mahindra India",   
      githubUrl: "https://api.github.com/users/ashwini6777",   
      mailId: "ashwiniyadav3703@gmail.com",
      birthDate: "29-01-2003",
      avatar :"https://avatars.githubusercontent.com/u/147252354?v=4" ,
      profileLink:"https://github.com/ashwini6777"
  
    },
    {
      rollNo: 6,       
      name: "Sanjana Hodbe",
      age: 19,
      gender: "Female",
      favItCompany: "Persistent systems Limited",   
      githubUrl: "https://api.github.com/users/SH3422",   
      mailId: "sanjanahodbe@gmail.com",
      birthDate: "06-03-2004",
      avatar :"https://avatars.githubusercontent.com/u/147395950?v=4",
      profileLink:""
    }
  ];

  // console.log(obj[0]);
  async function fetchGitHubData(url) {
      try {
          const response = await fetch(url);
          const data = await response.json();
          return data;
      } catch (error) {
          console.error(error);
         
      }
  }

  async function displayStudentData() {
      var container = document.getElementById('student');

      // console.log(container);
      
    for(var i=0;i<obj.length;i++) {

      // console.log(obj.length);
          const githubData = await fetchGitHubData(obj[i].githubUrl);

          // console.log(githubData);
          var card = document.createElement('div');
          card.className = 'card';

          var avatar = document.createElement('img');
          avatar.src = obj[i].avatar;

          var name = document.createElement('h2');
          name.textContent = obj[i].name;

          var rollNumber = document.createElement('p');
          rollNumber.textContent = 'Roll Number: ' + obj[i].rollNo;

          var age = document.createElement('p');
          age.textContent = 'Age: ' + obj[i].age;

          var favItCompany = document.createElement('p');
          favItCompany.textContent = 'Favorite IT Company: ' + obj[i].favItCompany;

          var githubUrl = document.createElement('p');
          githubUrl.innerHTML = `<a href="${obj[i]. profileLink} "Target = blank>GitHub Profile</a>`;

          var mailId = document.createElement('p');
          mailId.textContent = 'Mail ID: ' + obj[i].mailId;

          var birthDate = document.createElement('p');
          birthDate.textContent = 'Birth Date: ' +obj[i] .birthDate;

          card.appendChild(avatar);
          card.appendChild(name);
          card.appendChild(rollNumber);
          card.appendChild(age);
          card.appendChild(favItCompany);
          card.appendChild(githubUrl);
          card.appendChild(mailId);
          card.appendChild(birthDate);

          container.appendChild(card);
      };
  }

  displayStudentData(); 