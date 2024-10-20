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

// Select the link element
const link = document.getElementById('myLink');
let doubleClicked = false;

// Add a double-click event listener
link.addEventListener('dblclick', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    doubleClicked = true; // Set the flag to true
    });

// Add a click event listener to check for double click status
link.addEventListener('click', function(event) {
    if (doubleClicked) {
        // If double-clicked, allow the link to navigate
        doubleClicked = false; // Reset the flag
        window.location.href = link.href; // Navigate to the href of the link
    } else {
        event.preventDefault(); // Prevent the default action if not double-clicked
    }
});
