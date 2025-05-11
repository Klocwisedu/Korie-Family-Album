
let users = JSON.parse(localStorage.getItem("users")) || [];

function submitForm() {
    const form = document.getElementById("myForm");


    const firstName = form.elements["firstname"].value;
    const lastName = form.elements["lastname"].value;
    const sideOfFamily = form.elements["country"].value;
    const fileUpload = form.elements["fileUpload"].files[0];

    if (fileUpload) {

        const reader = new FileReader();
        reader.onload = function (event) {
            const base64Image = event.target.result;


            const userData = {
                firstName,
                lastName,
                sideOfFamily,
                fileUpload: base64Image,
            };


            // users.push(...users,userData);
            users = [...users, userData];


            form.reset();

            localStorage.setItem("users", JSON.stringify(users));

            renderUsers();
        };
        reader.readAsDataURL(fileUpload);
    } else {

        const userData = {
            firstName,
            lastName,
            sideOfFamily,
            fileUpload: null,
        };

        users.push(userData);
        form.reset();
    }
}

const PaternalMembersDiv = document.getElementById("PaternalDiv");
console.log(PaternalMembersDiv);


const paternalMembers = localStorage.getItem("users");
const paternalUsers = JSON.parse(paternalMembers);

const PaternalUsersFiltered = paternalUsers.filter(user => user.sideOfFamily === "Paternal");
console.log(PaternalUsersFiltered);


let html = '';
PaternalUsersFiltered.forEach((Member, index) => {
    html += `
    <div class="MemberDiv" id="PaternalMember-${index}">
        <div class="Member-container">
            <img class="Member-Img" src="${Member.fileUpload}" alt="Member Image" />
            <p><strong>First Name:</strong> ${Member.firstName}</p>
            <p><strong>Last Name:</strong> ${Member.lastName}</p>
            <p><strong>Side of Family:</strong> ${Member.sideOfFamily}</p>
            <button 
                style="background-color:#333; color:#fff; border-radius:20px;" 
                onclick="deletePaternalMember(${index})"
            >
                Delete
            </button>
        </div>
    </div>
    `;
});


PaternalMembersDiv.innerHTML = html;


function deletePaternalMember(index) {
   
    PaternalUsersFiltered.splice(index, 1);


    const updatedUsers = paternalUsers.filter(user => user.sideOfFamily !== "Paternal" || PaternalUsersFiltered.includes(user));
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    const memberDiv = document.getElementById(`PaternalMember-${index}`);
    if (memberDiv) {
        memberDiv.remove();
    }
    Toastify({
        text: "Member deleted!!!",
        duration: 3000,
        backgroundColor: "green",
    }).showToast();
}
console.log(html)
PaternalMembersDiv.innerHTML = html;


