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
      avatar: "https://avatars.githubusercontent.com/u/145984673?v=4"
    },
    {
      rollNo: 2,
      name: "Farzana Shaikh",
      age: 21,
      gender: "female",
      favItCompany: "Talentica software ",
      githubUrl: "https://api.github.com/users/Fara776",
      mailId: "farashaikh564@gmail.com",
      birthDate: "14-01-2003",
      avatar: "https://avatars.githubusercontent.com/u/145984007?v=4"
  
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
      avatar: "https://avatars.githubusercontent.com/u/147252354?v=4"
  
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
      avatar: "https://avatars.githubusercontent.com/u/119176708?v=4"
  
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
      avatar :"https://avatars.githubusercontent.com/u/147252354?v=4" 
  
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
      avatar :"https://avatars.githubusercontent.com/u/147395950?v=4"
    }
  ];

  // console.log(obj);
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
      var container = document.getElementById('studentData');
      
      await Promise.all(obj.map(async (student) => {
          const githubData = await fetchGitHubData(student.githubUrl);

          var card = document.createElement('div');
          card.className = 'card';

          var avatar = document.createElement('img');
          avatar.src = student.avatar;

          var name = document.createElement('h2');
          name.textContent = student.name;

          var rollNumber = document.createElement('p');
          rollNumber.textContent = 'Roll Number: ' + student.rollNo;

          var age = document.createElement('p');
          age.textContent = 'Age: ' + student.age;

          var favItCompany = document.createElement('p');
          favItCompany.textContent = 'Favorite IT Company: ' + student.favItCompany;

          var githubUrl = document.createElement('p');
          githubUrl.innerHTML = `<a href="${student.githubUrl}">GitHub Profile</a>`;

          var mailId = document.createElement('p');
          mailId.textContent = 'Mail ID: ' + student.mailId;

          var birthDate = document.createElement('p');
          birthDate.textContent = 'Birth Date: ' + student.birthDate;

          card.appendChild(avatar);
          card.appendChild(name);
          card.appendChild(rollNumber);
          card.appendChild(age);
          card.appendChild(favItCompany);
          card.appendChild(githubUrl);
          card.appendChild(mailId);
          card.appendChild(birthDate);

          container.appendChild(card);
      }));
  }

  displayStudentData(); 