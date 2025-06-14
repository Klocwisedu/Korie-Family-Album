document.getElementById('toggle-btn').addEventListener('click', function() {
    let sidebar = document.getElementById('sidebar');
    let content = document.getElementById('content');

    // Toggle sidebar visibility
    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        sidebar.style.left = "-300px"; // Moves sidebar out of view
        content.classList.remove("expanded");
    } else {
        sidebar.classList.add("active");
        sidebar.style.left = "0"; // Moves sidebar fully into view
        content.classList.add("expanded");
    }
});