// Get input from elements
var numberInput = document.getElementById("numberInput");
var stringInput = document.getElementById("stringInput");

// Button click event handler
function updateReactable() {
  // Access input values
  var number = numberInput.value;
  var string = stringInput.value;

  // Set environment variables for R access
  Sys.setenv("number", number);
  Sys.setenv("string", string);

  // Trigger re-rendering (use library-specific function)
  renderReactable();
}

// Attach event handler to button
document.getElementById("updateButton").addEventListener("click", updateReactable);
