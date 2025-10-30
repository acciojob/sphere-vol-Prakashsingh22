function volume_sphere(event) {
  // Prevent page refresh
  event.preventDefault();

  // Get radius value
  const radius = parseFloat(document.getElementById('radius').value);

  // Calculate volume (even if invalid — will result in NaN)
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display result (NaN will appear automatically if invalid)
  document.getElementById('volume').value = volume.toFixed(4);

  return false; // prevent form submission
}

// Attach function to form submit
window.onload = function() {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
