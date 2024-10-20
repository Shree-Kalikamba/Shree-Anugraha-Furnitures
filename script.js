document.querySelectorAll('.works').forEach(image => {
    image.addEventListener('click', function() {
        // Check if the clicked image is already active
        if (this.classList.contains('active')) {
            // If it is active, remove the 'active' class
            this.classList.remove('active');
        } else {
            // Remove 'active' class from all images
            document.querySelectorAll('.works').forEach(img => {
                img.classList.remove('active');
            });
            // Add 'active' class to the clicked image
            this.classList.add('active');
        }
    });
});



        let clickedImageSrc = null;

        // Step 1: Select all image elements with class 'works'
        const imageElements = document.querySelectorAll('.works');

        // Step 2: Add an event listener to each image element
        imageElements.forEach((imageElement) => {
            imageElement.addEventListener('click', (event) => {
                // Step 3: Update the clickedImageSrc variable with the src of the clicked image
                clickedImageSrc = event.target.src;
                window.location.href =clickedImageSrc;
            });
        });
