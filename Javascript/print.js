// Retrieve all users from local storage
const users = JSON.parse(localStorage.getItem("users")) || [];

// Select the container where images will be displayed
const userContainer = document.getElementById("user-container");

// Define circle parameters
const radius = 200;
const centerX = 250;
const centerY = 250;

let html = "";
users.forEach((user, index, arr) => {
    if (user.fileUpload) { 
        const angle = (index / arr.length) * (2 * Math.PI);
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        html += `
        <div class="circle-item" style="top: ${y}px; left: ${x}px;">
            <img src="${user.fileUpload}" alt="User Image">
            <p class="user-name">${user.firstName} ${user.lastName}</p>
        </div>
        `;
    }
});

// Insert into the page
userContainer.innerHTML = html;

function printAlbum() {
    window.print(); // Opens print dialog for the page
}

function goHome() {
    window.location.href = "index.html"; // Redirects to homepage
}