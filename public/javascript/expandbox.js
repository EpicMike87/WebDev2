
// This is some JavaScript to handle the expandable boxes on some of the content pages along with the terms and conditions of the register page.

const windowContainers = document.querySelectorAll('.window-container');
const showWindowLinks = document.querySelectorAll('.show-window');
const closeWindowBtns = document.querySelectorAll('.close-window');

// Add event listeners to show window links
for (let i = 0; i < showWindowLinks.length; i++) {
  const link = showWindowLinks[i];
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const containerId = link.getAttribute('href');
    const container = document.querySelector(containerId);
    container.style.display = 'block';
    return false;
  });
}

// Add event listeners to close window buttons
for (let i = 0; i < closeWindowBtns.length; i++) {
  const btn = closeWindowBtns[i];
  btn.addEventListener('click', function() {
    const container = btn.parentNode;
    container.style.display = 'none';
  });
}

const showTermsLinks = document.querySelectorAll('.show-terms');
const closeTermsBtns = document.querySelectorAll('.close-terms');

// Add event listeners to show window links
for (let i = 0; i < showTermsLinks.length; i++) {
  const link = showTermsLinks[i];
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const containerId = link.getAttribute('href');
    const container = document.querySelector(containerId);
    container.style.display = 'block';
    return false;
  });
}

// Add event listeners to close window buttons
for (let i = 0; i < closeTermsBtns.length; i++) {
  const btn = closeTermsBtns[i];
  btn.addEventListener('click', function() {
    const container = btn.parentNode;
    container.style.display = 'none';
  });
}