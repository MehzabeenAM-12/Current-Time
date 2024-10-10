function updateTime() {
    const currentTime = new Date();
    // This line creates a new Date object, which represents the current time and date.
    
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
  //These lines extract the hour, minute, and second from the currentTime object.
    document.getElementById("hour").innerHTML = 
      hour + ":";
  // document.getElementById gets a reference to the HTML element with the ID "hour".
    
    document.getElementById("minute").innerHTML =
      minute + ":";
    
    document.getElementById("second").innerHTML = 
      second;
  }
  
  setInterval(updateTime);