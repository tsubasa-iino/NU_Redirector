function clickButton() {
  let button = document.querySelector('input[name="_eventId_proceed"]');
  if (button) {
    button.click();
  } else {
    // If the button isn't there yet, wait a bit and try again
    setTimeout(clickButton, 500); // waiting 500 ms
  }
}

// Wait for the page to load before trying to click the button
window.addEventListener('load', clickButton);
