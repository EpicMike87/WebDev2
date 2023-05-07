//This gets the username cookie from the browser to be used in text.
const userValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('username='))
  .split('=')[1];
 
// Update HTML with cookie value
document.getElementById('userValue').textContent = userValue;