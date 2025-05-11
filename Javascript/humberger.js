document.getElementById('toggle-btn').addEventListener('click', function() {
    let sidebar = document.getElementById('sidebar');
    let content = document.getElementById('content');
    if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        content.classList.remove('expanded');
    } else {
        sidebar.classList.add('collapsed');
        content.classList.add('expanded');
    }
});