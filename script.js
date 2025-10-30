function volume_sphere(event) {
  // Prevent the form from reloading the page
  event.preventDefault();

  // Get the radius value from input
  const radius = document.getElementById('radius').value;

  // Check for valid input
  if (radius === '' || isNaN(radius) || radius < 0) {
    alert("Please enter a valid positive number for radius.");
    return false;
  }

  // Calculate volume of the sphere: (4/3) * π * r³
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display result rounded to 4 decimal places
  document.getElementById('volume').value = volume.toFixed(4);

  return false; // prevent form submission
}

// Attach the function to form submit
window.onload = function() {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
