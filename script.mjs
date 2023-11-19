function toggleDetails(element) {
    let details = element.nextElementSibling;

    // Check if the cursor entered the element
    element.addEventListener('mouseenter', function() {
        // Set the display property to "block" to show the details
        details.style.display = "block";
        // Change the inner HTML of the passed element to show "Hide Details"
        element.innerHTML = "Course details _";
    });

    // Check if the cursor left the element
    element.addEventListener('mouseleave', function() {
        // Set the display property to "none" to hide the details
        details.style.display = "none";
        // Change the inner HTML of the passed element to show "Toggle Details"
        element.innerHTML = "&#9776; Toggle Details";
    });
}
