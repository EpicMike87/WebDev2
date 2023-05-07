//This grabs the username value on log in and stores it client side

function storeUsername() {
    const storedUsername = document.getElementById("username").value;
    document.cookie = `username=${storedUsername}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;
    console.log(`Username ${storedUsername} has been stored in cookie.`);
  }

      