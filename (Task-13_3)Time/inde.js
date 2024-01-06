function updateClock() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const formattedDate =` ${dayOfWeek} ${month} ${day} ${year} ${hours}:${minutes}:${seconds}`
  
    document.getElementById('digital-clock').innerText = formattedDate;
  }
  
  setInterval(updateClock, 1000);
 
  
 
  updateClock();