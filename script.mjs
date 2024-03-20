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

function toggleCourseDetails(tableId) {
    var details = document.getElementById(tableId);
    details.classList.toggle('show');
}

// academic work

document.addEventListener("DOMContentLoaded", function() {
    // Sample academic data
    const academics = [
        {
            name: "John Doe",
            pic: "https://via.placeholder.com/100",
            edu: "Ph.D. in Computer Science, Stanford University"
        },
        {
            name: "Jane Smith",
            pic: "https://via.placeholder.com/100",
            edu: "M.Sc. in Biology, Oxford University"
        },
        // Add more academic entries as needed
    ];

    const academicList = document.getElementById("academic-list");

    // Render academic cards
    academics.forEach(academic => {
        const academicCard = document.createElement("div");
        academicCard.classList.add("academic-card");

        const pic = document.createElement("img");
        pic.src = academic.pic;
        pic.alt = academic.name;
        pic.classList.add("academic-pic");
        academicCard.appendChild(pic);

        const info = document.createElement("div");
        info.classList.add("academic-info");

        const name = document.createElement("div");
        name.textContent = academic.name;
        name.classList.add("academic-name");
        info.appendChild(name);

        const edu = document.createElement("div");
        edu.textContent = academic.edu;
        edu.classList.add("academic-edu");
        info.appendChild(edu);

        academicCard.appendChild(info);

        academicList.appendChild(academicCard);
    });
});

// academic work end


// search bar

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    searchResults = document.getElementById("searchResults");
    li = document.getElementsByTagName('p');

    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
// search bar ends


