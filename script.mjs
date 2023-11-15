function toggleDetails(element) {
    var details = element.nextElementSibling;
    if (details.style.display === "block") {
        details.style.display = "none";
        element.innerHTML = "Show Details";
    } else {
        details.style.display = "block";
        element.innerHTML = "Hide Details";
    }
    }