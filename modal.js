// Function to attach event listeners to modal images
function attachModalEventListeners() {
  var imgContainer = document.querySelector(".light");
  var imgElements = imgContainer.querySelectorAll(".img-gallery");
  var modal = document.getElementById("myModal"); // Get the modal element directly
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  imgElements.forEach(function(img) {
    img.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      captionText.textContent = this.alt;
      modalImg.focus(); // Set focus to the modal content
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    });
  });

  // Get the <span> element that closes the modal
  var span = document.querySelector(".close");

  span.addEventListener("click", function() {
    modal.style.display = "none";
    imgContainer.focus(); // Return focus to the image gallery container
    document.body.style.overflow = ""; // Restore scrolling when modal is closed
    // Reattach event listeners after modal is closed
    attachModalEventListeners();
  });

  // Close modal when pressing Esc key
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
      imgContainer.focus(); // Return focus to the image gallery container
      document.body.style.overflow = ""; // Restore scrolling when modal is closed
      // Reattach event listeners after modal is closed
      attachModalEventListeners();
    }
  });
}

// Call the function to attach event listeners when the page loads
attachModalEventListeners();
