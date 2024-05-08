document.addEventListener("DOMContentLoaded", function() {
    // Get all carousel containers
    var carousels = document.querySelectorAll(".carousel");
  
    // Loop through each carousel
    carousels.forEach(function(carousel) {
      // Get all the carousel images within the current carousel
      var images = carousel.querySelectorAll("img");
  
      // Set the initial index and show the first image
      var index = 0;
      images[index].style.opacity = "1";
  
      // Function to move to the next image
      function nextImage() {
        // Hide the current image
        images[index].style.opacity = "0";
  
        // Increment the index
        index++;
  
        // If the index goes beyond the last image, wrap around to the first image
        if (index >= images.length) {
          index = 0;
        }
  
        // Show the next image
        images[index].style.opacity = "1";
      }
  
      // Set the interval to switch images (every 3 seconds) for the current carousel
      setInterval(nextImage, 3000);
    });
  });

